#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * 把 src/components/* 与 src/utils/* 同步到外部 HBuilderX 项目的 uni_modules 插件目录。
 *
 * 用法：
 *   node ./cli/sync-to-hbuilderx.mjs           # 一次性同步（once，默认开启 prune）
 *   node ./cli/sync-to-hbuilderx.mjs --watch   # 持续监听
 *   node ./cli/sync-to-hbuilderx.mjs --dry-run # 仅打印将要发生的变更
 *   node ./cli/sync-to-hbuilderx.mjs --no-prune  # 关闭孤儿清理
 *
 * 配置文件：包根的 `.sync-targets.json`（gitignored，每台机器自己写）
 * {
 *   "targets": [
 *     {
 *       "name": "demo-uniapp-x",
 *       "root": "/Users/xxx/HBuilderProjects/tdesign-uniapp-x-demo",
 *       "uniModuleId": "tdesign-uniapp-x",   // uni_modules 子目录名 / 插件 id
 *       "rewriteImports": true                // 可选，默认 true：去掉 import 中的 .ts 扩展
 *     }
 *   ]
 * }
 *
 * 同步规则：组件本体走 uni_modules（可被插件市场发布）；演示页 _example/ 走 pages-more（仅本地调试，不被插件包扫描）：
 *   src/components/t-<name>/t-<name>.uvue        → <root>/uni_modules/<id>/components/t-<name>/t-<name>.uvue
 *   src/components/t-<name>/t-<name>.theme.less  → <root>/uni_modules/<id>/components/t-<name>/t-<name>.theme.less
 *   src/components/t-<name>/t-<name>.types.ts    → <root>/uni_modules/<id>/components/t-<name>/t-<name>.types.uts
 *   src/components/t-<name>/t-<name>.variants.ts → <root>/uni_modules/<id>/components/t-<name>/t-<name>.variants.uts
 *   src/components/t-<name>/index.ts             → <root>/uni_modules/<id>/components/t-<name>/index.uts
 *   src/components/t-<name>/README.md            → <root>/uni_modules/<id>/components/t-<name>/README.md
 *   src/utils/<file>.ts                          → <root>/uni_modules/<id>/utils/<file>.uts
 *
 *   src/components/t-<name>/_example/<rest>      → <root>/pages-more/tdesign-uniapp-x/t-<name>/<rest>（调试页，不随插件发布）
 *   src/pages-more/<rest>                        → <root>/pages-more/tdesign-uniapp-x/<rest>（总入口页）
 *
 *
 * 首次同步会在 <root>/uni_modules/<id>/ 自动生成 package.json / readme.md / changelog.md 三个 stub，
 * 已存在则跳过，保护用户手工编辑（如调整插件元信息、版本号、changelog）。
 *
 * 跳过：*.vue / *.spec.ts / *.test.ts / 隐藏文件；index.ts 桶导出中的 .vue 引用会被改写为 .uvue
 */

import { promises as fs, watch } from 'node:fs';
import { dirname, join, relative, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const SRC = join(PKG_ROOT, 'src');
const COMPONENTS_DIR = join(SRC, 'components');
const UTILS_DIR = join(SRC, 'utils');
const PAGES_MORE_DIR = join(SRC, 'pages-more');
const CONFIG_PATH = join(PKG_ROOT, '.sync-targets.json');
const PKG_JSON_PATH = join(PKG_ROOT, 'package.json');

const args = new Set(process.argv.slice(2));
const isWatch = args.has('--watch') || args.has('-w');
const isDryRun = args.has('--dry-run');
// 默认开启 prune：清理目标项目内"源仓库已不存在"的孤儿文件 / 空目录
// （仅在受管区域 pages-more/<id>/t-* 与 uni_modules/<id>/components/t-* 与 utils/）
const isPrune = !args.has('--no-prune');

/** 是否需要跳过 */
function shouldSkip(absPath) {
  const name = basename(absPath);
  if (name.endsWith('.vue')) return true;            // web 镜像不进 HBuilderX
  if (name.endsWith('.spec.ts')) return true;
  if (name.endsWith('.test.ts')) return true;
  if (name.startsWith('.')) return true;
  return false;
}

/** 把 src 内的 .ts 转换为 HBuilderX 内的 .uts；其他扩展名保持原样 */
function mapExt(file) {
  if (file.endsWith('.ts')) return `${file.slice(0, -3)}.uts`;
  return file;
}

/** 计算插件根目录：<root>/uni_modules/<id> */
function pluginRoot(target) {
  const id = target.uniModuleId || 'tdesign-uniapp-x';
  return join(target.root, 'uni_modules', id);
}

/** 计算调试页根目录：<root>/pages-more/<id>（不进 uni_modules，不随插件发布） */
function pagesMoreRoot(target) {
  const id = target.uniModuleId || 'tdesign-uniapp-x';
  return join(target.root, 'pages-more', id);
}

/**
 * 把源文件相对 src 的路径，映射到目标项目内的绝对路径。
 * 返回 null 表示该文件不应被同步。
 */
function mapToTarget(absSrcPath, target) {
  const rel = relative(SRC, absSrcPath);            // e.g. "components/t-button/_example/base/index.uvue"
  if (rel.startsWith('..')) return null;            // 不在 src 内

  const segs = rel.split('/');

  // src/pages-more/<rest> → <root>/pages-more/<id>/<rest>
  if (segs[0] === 'pages-more') {
    const tail = segs.slice(1).join('/');
    return join(pagesMoreRoot(target), mapExt(tail));
  }

  // src/components/<comp>/_example/<rest> → <root>/pages-more/<id>/<comp>/<rest>
  //   例如：src/components/t-button/_example/base/index.uvue
  //         → <root>/pages-more/tdesign-uniapp-x/t-button/base/index.uvue
  if (segs[0] === 'components' && segs[2] === '_example') {
    const comp = segs[1];
    const tail = segs.slice(3).join('/');
    return join(pagesMoreRoot(target), comp, mapExt(tail));
  }

  // src/components/<rest> → <root>/uni_modules/<id>/components/<rest>
  if (segs[0] === 'components') {
    const tail = segs.slice(1).join('/');
    return join(pluginRoot(target), 'components', mapExt(tail));
  }

  // src/utils/<rest> → <root>/uni_modules/<id>/utils/<rest>
  if (segs[0] === 'utils') {
    const tail = segs.slice(1).join('/');
    return join(pluginRoot(target), 'utils', mapExt(tail));
  }

  return null;
}

/**
 * 改写文件内容：
 * 1) 桶导出 .vue → .uvue
 * 2) 去掉 import 中的 .ts 扩展（HBuilderX 会自己解析为 .uts）
 */
function transformContent(absSrcPath, raw, target) {
  let out = raw;

  // 1) 桶导出 index.ts：把 './xxx.vue' 改为 './xxx.uvue'
  if (absSrcPath.endsWith('/index.ts')) {
    out = out.replace(/(['"])(\.\/[^'"]+?)\.vue\1/g, '$1$2.uvue$1');
  }

  // 2) 去掉 import 路径里的 .ts 扩展
  if (target.rewriteImports !== false) {
    out = out.replace(/(from\s+['"][^'"]+?)\.ts(['"])/g, '$1$2');
  }

  return out;
}

/** 读源包 package.json，给 stub 用 */
async function loadSrcPkg() {
  try {
    const raw = await fs.readFile(PKG_JSON_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

/** 生成 uni_modules 插件 package.json 的内容 */
function buildPluginPackageJson(target, srcPkg) {
  const id = target.uniModuleId || 'tdesign-uniapp-x';
  return `${JSON.stringify(
    {
      id,
      displayName: target.displayName || 'TDesign uni-app x',
      version: srcPkg.version || '0.0.1',
      description:
        target.description ||
        srcPkg.description ||
        'TDesign 风格的 uni-app x 组件库（uvue + uts，源自 tdesign-miniprogram/uniapp-x-components）',
      keywords: ['tdesign', 'uni-app-x', 'uvue', 'uts', 'components'],
      repository: srcPkg.repository || 'https://github.com/Tencent/tdesign-miniprogram',
      engines: { HBuilderX: '^4.0' },
      dcloudext: {
        category: ['前端组件', '通用组件'],
        sale: {
          regular: { price: '0.00' },
          sourcecode: { price: '0.00' },
        },
        contact: { qq: '' },
        declaration: { ads: '无', data: '无', permissions: '无' },
        npmurl: '',
      },
      uni_modules: {
        dependencies: [],
        encrypt: [],
        platforms: {
          cloud: { tcb: 'y', aliyun: 'y' },
          client: {
            App: { 'app-vue': 'n', 'app-nvue': 'n', 'app-uvue': 'y' },
            'H5-mobile': {
              Safari: 'n',
              'Android Browser': 'n',
              '微信浏览器(Android)': 'n',
              'QQ浏览器(Android)': 'n',
            },
            'H5-pc': { Chrome: 'n', IE: 'n', Edge: 'n', Firefox: 'n', Safari: 'n' },
            小程序: {
              微信: 'n', 阿里: 'n', 百度: 'n', 字节跳动: 'n', QQ: 'n',
              京东: 'n', 钉钉: 'n', 快手: 'n', 飞书: 'n',
            },
            快应用: { 华为: 'n', 联盟: 'n' },
            Vue: { vue2: 'n', vue3: 'y' },
          },
        },
      },
    },
    null,
    2,
  )}\n`;
}

function buildPluginReadme(target, srcPkg) {
  const id = target.uniModuleId || 'tdesign-uniapp-x';
  return `# ${id}

TDesign 风格的 **uni-app x** 组件库（uvue + uts）。

> 由 \`tdesign-miniprogram/packages/uniapp-x-components\` 通过同步脚本生成，请勿直接在此目录手改组件代码，
> 否则下次同步会被覆盖。元信息文件（\`package.json\` / \`readme.md\` / \`changelog.md\`）首次生成后不会被覆盖。

## 用法

将本插件作为 \`uni_modules\` 引入 HBuilderX 项目后，组件支持 easycom 自动按需引入：

\`\`\`vue
<template>
  <t-button theme="primary">主按钮</t-button>
</template>
\`\`\`

## 源码

- 源仓：${srcPkg.repository || 'https://github.com/Tencent/tdesign-miniprogram'}
- 当前版本：v${srcPkg.version || '0.0.1'}
`;
}

function buildPluginChangelog(srcPkg) {
  const today = new Date().toISOString().slice(0, 10);
  return `## v${srcPkg.version || '0.0.1'}（${today}）

- 初始化版本，从 \`tdesign-miniprogram/packages/uniapp-x-components\` 同步而来。
`;
}

/** 首次生成 uni_modules 插件元信息文件，存在则跳过 */
async function ensurePluginMeta(target) {
  const root = pluginRoot(target);
  const srcPkg = await loadSrcPkg();
  const files = [
    { name: 'package.json', content: buildPluginPackageJson(target, srcPkg) },
    { name: 'readme.md', content: buildPluginReadme(target, srcPkg) },
    { name: 'changelog.md', content: buildPluginChangelog(srcPkg) },
  ];

  for (const f of files) {
    const dst = join(root, f.name);
    const exists = await fs.stat(dst).catch(() => null);
    if (exists) continue;
    if (!isDryRun) {
      await fs.mkdir(dirname(dst), { recursive: true });
      await fs.writeFile(dst, f.content);
    }
    const tag = isDryRun ? '[dry] ' : '';
    console.log(
      `  ${tag}＋ [${target.name ?? target.root}] ${relative(target.root, dst)}  (meta stub)`,
    );
  }
}

/**
 * 自动收集需要注入到 pages.json 的示例页路由：
 *   1) src/pages-more/index.uvue           → pages-more/<id>/index             (固定标题：TDesign 示例)
 *   2) src/components/t-<name>/_example/t-<name>.uvue
 *                                          → pages-more/<id>/t-<name>/t-<name> (从 uvue 中读取 demo-title 作为标题)
 *
 * 子示例（如 _example/base/index.uvue）是被组件总览页通过 import 嵌入的，无需注册到 pages.json。
 */
async function collectExamplePages(id) {
  const result = [];

  // 1) 顶层入口
  const topIndex = join(PAGES_MORE_DIR, 'index.uvue');
  if (await fs.stat(topIndex).catch(() => null)) {
    result.push({ path: `pages-more/${id}/index`, title: 'TDesign 示例' });
  }

  // 2) 各组件总览页
  const compEntries = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true }).catch(() => []);
  const compNames = compEntries
    .filter((e) => e.isDirectory() && e.name.startsWith('t-'))
    .map((e) => e.name)
    .sort();

  for (const comp of compNames) {
    const overview = join(COMPONENTS_DIR, comp, '_example', `${comp}.uvue`);
    const exists = await fs.stat(overview).catch(() => null);
    if (!exists) continue; // 没有总览页就跳过
    const title = (await readDemoTitle(overview)) || comp;
    result.push({ path: `pages-more/${id}/${comp}/${comp}`, title });
  }

  return result;
}

/**
 * 从总览 .uvue 文件中读取 `<text class="demo-title">XXX</text>` 的 XXX 作为页面标题；
 * 解析失败时返回 null，由调用方回退到组件名。
 */
async function readDemoTitle(absUvuePath) {
  try {
    const raw = await fs.readFile(absUvuePath, 'utf8');
    const m = raw.match(/<text\s+class="demo-title"\s*>\s*([^<]+?)\s*<\/text>/);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

/**
 * 幂等地将示例路由注入到 starter 项目的 pages.json，为零手动启动提供便利。
 *
 * 实现要点：
 * 1) 路由清单全量来自 collectExamplePages：扫描 src/pages-more/index.uvue 与 src/components/t-*\/_example/t-*.uvue。
 *    新增/删除组件无需修改本脚本，重跑 sync 即自动生效。
 * 2) 用一对边界注释（// tdesign-uniapp-x:start … // tdesign-uniapp-x:end）包裹注入区，
 *    下一次运行只覆写这块，不影响用户在标记块外手加的页面。
 * 3) 不存在边界时：定位 "pages" 数组的右括号 ]，在其前插入；除首项外每项使用前置逗号 `,{ … }`
 *    的 jsonc 合法写法连接上一项，避免编辑上一行。
 * 4) 未找到 pages.json 或未找到 "pages" 数组时：警告后跳过，不会报错。
 */
async function injectPagesJson(target) {
  const pagesJsonPath = join(target.root, 'pages.json');
  const raw = await fs.readFile(pagesJsonPath, 'utf8').catch(() => null);
  if (raw == null) {
    console.log(`  (跳过：${relative(target.root, pagesJsonPath)} 不存在)`);
    return;
  }

  const id = target.uniModuleId || 'tdesign-uniapp-x';
  const startMark = `// ${id}:start (auto-managed by uniapp-x-components/cli/sync-to-hbuilderx.mjs, do not edit)`;
  const endMark = `// ${id}:end`;

  // 全量扫描示例路由清单（顶层 pages-more 入口 + 各组件 _example 总览页）
  const examplePages = await collectExamplePages(id);
  if (examplePages.length === 0) {
    console.log(`  (跳过：未在 src/pages-more 与 src/components/*/_example 下发现可注入页面)`);
    return;
  }

  // 拼接注入块：每项一律前置逗号（jsonc 合法），首项的前置逗号在原文中无害——
  // 当 pages 数组中没有其他项时，紧跟在 [ 之后的 `,{...}` 会让数组变为 `[,{...}]`，
  // 这并非合法 jsonc。因此首项不加前置逗号，其余项加前置逗号。
  const pageLines = examplePages
    .map((p, i) => {
      const prefix = i === 0 ? '' : ',';
      return `\t\t${prefix}{ "path": "${p.path}", "style": { "navigationBarTitleText": "${p.title}" } }`;
    })
    .join('\n');
  const newBlock = `\t\t${startMark}\n${pageLines}\n\t\t${endMark}\n`;

  // 1) 如果已存在边界块，则精准替换这一块
  const blockRe = new RegExp(
    `[\\t ]*\\/\\/ ${escapeRegExp(id)}:start[\\s\\S]*?\\/\\/ ${escapeRegExp(id)}:end\\s*\\n`,
  );
  if (blockRe.test(raw)) {
    const next = raw.replace(blockRe, newBlock);
    if (next === raw) {
      console.log(`  ≡ [${target.name ?? target.root}] pages.json （注入块无变化）`);
      return;
    }
    if (!isDryRun) await fs.writeFile(pagesJsonPath, next);
    const tag = isDryRun ? '[dry] ' : '';
    console.log(`  ${tag}✎ [${target.name ?? target.root}] pages.json （更新示例路由块）`);
    return;
  }

  // 2) 未存在边界块：定位 "pages" 数组的右括号，在其前插入
  const closeIdx = findPagesArrayClose(raw);
  if (closeIdx < 0) {
    console.log(
      `  (跳过：${relative(target.root, pagesJsonPath)} 中未找到 "pages" 数组的右括号)`,
    );
    return;
  }
  const next = raw.slice(0, closeIdx) + newBlock + raw.slice(closeIdx);
  if (!isDryRun) await fs.writeFile(pagesJsonPath, next);
  const tag = isDryRun ? '[dry] ' : '';
  console.log(`  ${tag}＋ [${target.name ?? target.root}] pages.json （首次注入 ${examplePages.length} 条示例路由）`);
}

/** 转义正则特殊字符 */
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 在 jsonc 文本中定位 "pages" 数组的右括号 ] 的字符位置。
 * 简化实现：仅跳过字符串与序列化转义（不考虑注释内含 []，足以应付 uniapp 生成的 pages.json）。
 */
function findPagesArrayClose(text) {
  const m = text.match(/"pages"\s*:\s*\[/);
  if (!m) return -1;
  let i = m.index + m[0].length; // 已跳过开括号
  let depth = 1;
  let inStr = false;
  let strCh = '';
  while (i < text.length) {
    const c = text[i];
    if (inStr) {
      if (c === '\\') { i += 2; continue; }
      if (c === strCh) inStr = false;
      i++;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; strCh = c; i++; continue; }
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) return i; // 返回 "]" 的下标
    }
    i++;
  }
  return -1;
}

/** 读配置 */
async function loadConfig() {
  try {
    const raw = await fs.readFile(CONFIG_PATH, 'utf8');
    const cfg = JSON.parse(raw);
    if (!Array.isArray(cfg.targets) || cfg.targets.length === 0) {
      throw new Error('targets 字段为空');
    }
    for (const t of cfg.targets) {
      if (!t.root) throw new Error('每个 target 都必须填 root');
      const stat = await fs.stat(t.root).catch(() => null);
      if (!stat?.isDirectory()) throw new Error(`目标路径不存在或不是目录：${t.root}`);
    }
    return cfg.targets;
  } catch (err) {
    console.error('❌ 读取 .sync-targets.json 失败：', err.message);
    console.error('请在包根创建 .sync-targets.json，示例：');
    console.error(JSON.stringify(
      {
        targets: [
          {
            name: 'my-uniapp-x-demo',
            root: '/绝对路径/到/HBuilder/项目',
            uniModuleId: 'tdesign-uniapp-x',
          },
        ],
      },
      null,
      2,
    ));
    process.exit(1);
  }
}

/** 列出 src 下所有需要同步的文件 */
async function listAllSrcFiles() {
  const result = [];
  async function walk(dir) {
    const stat = await fs.stat(dir).catch(() => null);
    if (!stat?.isDirectory()) return;
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (!shouldSkip(full)) result.push(full);
    }
  }
  await walk(COMPONENTS_DIR);
  await walk(UTILS_DIR);
  await walk(PAGES_MORE_DIR);
  return result;
}

/** 把单个文件同步到一个 target；返回 'create' | 'update' | 'skip' */
async function syncOne(absSrcPath, target) {
  if (shouldSkip(absSrcPath)) return 'skip';
  const dst = mapToTarget(absSrcPath, target);
  if (!dst) return 'skip';

  const srcRaw = await fs.readFile(absSrcPath, 'utf8');
  const content = transformContent(absSrcPath, srcRaw, target);

  let action = 'create';
  const prev = await fs.readFile(dst, 'utf8').catch(() => null);
  if (prev != null) {
    if (prev === content) return 'skip';
    action = 'update';
  }

  if (!isDryRun) {
    await fs.mkdir(dirname(dst), { recursive: true });
    await fs.writeFile(dst, content);
  }
  const tag = isDryRun ? '[dry] ' : '';
  console.log(
    `  ${tag}${action === 'create' ? '＋' : '✎'} [${target.name ?? target.root}] ${relative(target.root, dst)}`,
  );
  return action;
}

/** 一次性全量同步 */
async function syncAll(targets) {
  const files = await listAllSrcFiles();
  console.log(`📦 待同步 ${files.length} 个源文件 → ${targets.length} 个目标\n`);
  let created = 0;
  let updated = 0;
  let skipped = 0;
  let pruned = 0;
  for (const target of targets) {
    console.log(`→ ${target.name ?? target.root}  (uni_modules/${target.uniModuleId || 'tdesign-uniapp-x'})`);
    await ensurePluginMeta(target);
    // 1) 推送 src 中存在的所有文件
    const expectedDsts = new Set();
    for (const f of files) {
      const dst = mapToTarget(f, target);
      if (dst) expectedDsts.add(dst);
      const a = await syncOne(f, target);
      if (a === 'create') created++;
      else if (a === 'update') updated++;
      else skipped++;
    }
    // 2) 清理"源仓库已不存在"的孤儿（默认开启）
    if (isPrune) {
      pruned += await pruneOrphans(target, expectedDsts);
    }
    await injectPagesJson(target);
    console.log('');
  }
  const pruneSeg = isPrune ? ` / ${pruned} 清理` : '';
  console.log(`✅ 完成：${created} 新建 / ${updated} 更新 / ${skipped} 无变化${pruneSeg}${isDryRun ? ' (dry-run)' : ''}`);
}

/**
 * 清理目标项目里"源仓库已不存在"的孤儿文件与空目录。
 *
 * **只在受管区域内清理**，避免误删用户文件：
 *   1) <root>/uni_modules/<id>/components/t-*\/  ← 组件本体
 *   2) <root>/uni_modules/<id>/utils/            ← 工具
 *   3) <root>/pages-more/<id>/t-*\/              ← 各组件 _example 调试页
 *
 * 顶层 pages-more/<id>/ 下的非 t-* 文件（如 index.uvue）只在 src/pages-more 中明确不存在时才删。
 */
async function pruneOrphans(target, expectedDsts) {
  const id = target.uniModuleId || 'tdesign-uniapp-x';
  const compsRoot = join(pluginRoot(target), 'components');
  const utilsRoot = join(pluginRoot(target), 'utils');
  const examplesRoot = pagesMoreRoot(target);

  // 收集源仓库中存在的组件名（用于决定哪些 t-* 受 sync 管控）
  const srcCompNames = new Set();
  const compEntries = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true }).catch(() => []);
  for (const e of compEntries) {
    if (e.isDirectory() && e.name.startsWith('t-')) srcCompNames.add(e.name);
  }

  let removedCount = 0;

  /** 收集目录下所有文件（不含目录） */
  async function listAll(dir) {
    const out = [];
    async function walk(d) {
      const stat = await fs.stat(d).catch(() => null);
      if (!stat?.isDirectory()) return;
      const entries = await fs.readdir(d, { withFileTypes: true });
      for (const e of entries) {
        const full = join(d, e.name);
        if (e.isDirectory()) await walk(full);
        else out.push(full);
      }
    }
    await walk(dir);
    return out;
  }

  /** 删除孤儿文件，并尝试清理空目录（不超过受管 root） */
  async function removeOrphanFile(file, managedRoot) {
    if (expectedDsts.has(file)) return false;
    if (!isDryRun) await fs.rm(file, { force: true });
    const tag = isDryRun ? '[dry] ' : '';
    console.log(`  ${tag}✕ [${target.name ?? target.root}] ${relative(target.root, file)}  (orphan)`);
    removedCount++;
    // 向上清理空目录
    let parent = dirname(file);
    while (parent.startsWith(managedRoot) && parent !== managedRoot) {
      const left = await fs.readdir(parent).catch(() => null);
      if (left && left.length === 0) {
        if (!isDryRun) await fs.rmdir(parent).catch(() => {});
        console.log(`  ${tag}✕ [${target.name ?? target.root}] ${relative(target.root, parent)}/  (empty dir)`);
        parent = dirname(parent);
      } else break;
    }
    return true;
  }

  // 1) uni_modules/<id>/components/t-* 受管：源仓库不再有的组件目录、或同名组件下的孤儿文件
  const tgtCompEntries = await fs.readdir(compsRoot, { withFileTypes: true }).catch(() => []);
  for (const e of tgtCompEntries) {
    if (!e.isDirectory() || !e.name.startsWith('t-')) continue;
    const compDir = join(compsRoot, e.name);
    if (!srcCompNames.has(e.name)) {
      // 整个组件被删 → 整目录清掉
      if (!isDryRun) await fs.rm(compDir, { recursive: true, force: true });
      const tag = isDryRun ? '[dry] ' : '';
      console.log(`  ${tag}✕ [${target.name ?? target.root}] ${relative(target.root, compDir)}/  (orphan component)`);
      removedCount++;
      continue;
    }
    const all = await listAll(compDir);
    for (const f of all) await removeOrphanFile(f, compsRoot);
  }

  // 2) uni_modules/<id>/utils/ 全部受管
  const utilFiles = await listAll(utilsRoot);
  for (const f of utilFiles) await removeOrphanFile(f, utilsRoot);

  // 3) pages-more/<id>/t-* 各组件示例页：与 1) 同策略
  const tgtExEntries = await fs.readdir(examplesRoot, { withFileTypes: true }).catch(() => []);
  for (const e of tgtExEntries) {
    const full = join(examplesRoot, e.name);
    if (e.isDirectory() && e.name.startsWith('t-')) {
      if (!srcCompNames.has(e.name)) {
        if (!isDryRun) await fs.rm(full, { recursive: true, force: true });
        const tag = isDryRun ? '[dry] ' : '';
        console.log(`  ${tag}✕ [${target.name ?? target.root}] ${relative(target.root, full)}/  (orphan component examples)`);
        removedCount++;
        continue;
      }
      const all = await listAll(full);
      for (const f of all) await removeOrphanFile(f, examplesRoot);
    } else if (e.isFile()) {
      // 顶层 index.uvue 等：源仓库 src/pages-more 不存在则删
      const srcEquiv = join(PAGES_MORE_DIR, e.name.replace(/\.uts$/, '.ts'));
      const exists = await fs.stat(srcEquiv).catch(() => null);
      // 同时检查未替扩展名的版本
      const srcEquiv2 = join(PAGES_MORE_DIR, e.name);
      const exists2 = await fs.stat(srcEquiv2).catch(() => null);
      if (!exists && !exists2 && !expectedDsts.has(full)) {
        if (!isDryRun) await fs.rm(full, { force: true });
        const tag = isDryRun ? '[dry] ' : '';
        console.log(`  ${tag}✕ [${target.name ?? target.root}] ${relative(target.root, full)}  (orphan top-level)`);
        removedCount++;
      }
    }
  }

  return removedCount;
}

/** watch 模式 */
async function syncWatch(targets) {
  await syncAll(targets);
  console.log('\n👀 watch 模式启动，按 Ctrl+C 退出…');

  const debounce = new Map(); // path → timer
  function scheduleSync(absPath) {
    if (shouldSkip(absPath)) return;
    const old = debounce.get(absPath);
    if (old) clearTimeout(old);
    debounce.set(
      absPath,
      setTimeout(async () => {
        debounce.delete(absPath);
        const exists = await fs.stat(absPath).catch(() => null);
        if (!exists) {
          // 简化：源文件被删除时，暂不级联删除目标文件，避免误删
          console.log(`  (源文件被删除，未级联：${relative(SRC, absPath)})`);
          return;
        }
        for (const t of targets) {
          await syncOne(absPath, t).catch((e) =>
            console.error('  ❌', absPath, e.message),
          );
        }
      }, 80),
    );
  }

  // recursive 在 macOS / Windows 都支持；Linux 上 Node 22+ 也支持
  watch(SRC, { recursive: true }, (_event, filename) => {
    if (!filename) return;
    scheduleSync(join(SRC, filename));
  });

  // 让进程不退出
  return new Promise(() => {});
}

async function main() {
  const targets = await loadConfig();
  if (isWatch) await syncWatch(targets);
  else await syncAll(targets);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
