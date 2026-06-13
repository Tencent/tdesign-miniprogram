#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * 把 src/components/* 与 src/utils/* 同步到外部 HBuilderX 项目。
 *
 * 用法：
 *   node ./cli/sync-to-hbuilderx.mjs           # 一次性同步（once）
 *   node ./cli/sync-to-hbuilderx.mjs --watch   # 持续监听
 *   node ./cli/sync-to-hbuilderx.mjs --dry-run # 仅打印将要发生的变更
 *
 * 配置文件：包根的 `.sync-targets.json`（gitignored，每台机器自己写）
 * {
 *   "targets": [
 *     {
 *       "name": "demo-uniapp-x",
 *       "root": "/Users/xxx/HBuilderProjects/tdesign-uniapp-x-demo",
 *       "componentsDir": "components",     // 可选，默认 components
 *       "utilsDir": "utils",               // 可选，默认 utils
 *       "rewriteImports": true             // 可选，默认 true：把相对 utils 路径重写为目标项目内相对路径
 *     }
 *   ]
 * }
 *
 * 同步规则：
 *   src/components/<name>/<name>.uvue        → <target>/<componentsDir>/<name>/<name>.uvue
 *   src/components/<name>/<name>.theme.less  → <target>/<componentsDir>/<name>/<name>.theme.less
 *   src/components/<name>/<name>.types.ts    → <target>/<componentsDir>/<name>/<name>.types.uts
 *   src/components/<name>/<name>.variants.ts → <target>/<componentsDir>/<name>/<name>.variants.uts
 *   src/components/<name>/index.ts           → <target>/<componentsDir>/<name>/index.uts
 *   src/components/<name>/README.md          → <target>/<componentsDir>/<name>/README.md
 *   src/utils/<file>.ts                      → <target>/<utilsDir>/<file>.uts
 *
 * 跳过：*.vue / *.spec.ts / *.test.ts / index.ts 桶导出中的 vue 引用会被改写
 */

import { promises as fs, watch } from 'node:fs';
import { dirname, join, relative, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const SRC = join(PKG_ROOT, 'src');
const COMPONENTS_DIR = join(SRC, 'components');
const UTILS_DIR = join(SRC, 'utils');
const CONFIG_PATH = join(PKG_ROOT, '.sync-targets.json');

const args = new Set(process.argv.slice(2));
const isWatch = args.has('--watch') || args.has('-w');
const isDryRun = args.has('--dry-run');

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

/**
 * 把源文件相对 src 的路径，映射到目标项目内的相对路径
 * 返回 null 表示该文件不应被同步
 */
function mapToTarget(absSrcPath, target) {
  const rel = relative(SRC, absSrcPath);            // e.g. "components/button/button.uvue"
  if (rel.startsWith('..')) return null;            // 不在 src 内

  const segs = rel.split('/');
  if (segs[0] === 'components') {
    const compsDir = target.componentsDir ?? 'components';
    const tail = segs.slice(1).join('/');
    return join(target.root, compsDir, mapExt(tail));
  }
  if (segs[0] === 'utils') {
    const utilsDir = target.utilsDir ?? 'utils';
    const tail = segs.slice(1).join('/');
    return join(target.root, utilsDir, mapExt(tail));
  }
  return null;
}

/**
 * 改写文件内容，让 ts → uts 的 import 路径指向同样改名后的文件，
 * 并去掉 .vue 桶导出（HBuilderX 只用 .uvue）。
 */
function transformContent(absSrcPath, raw, target) {
  let out = raw;

  // 1) 桶导出 index.ts：把 './xxx.vue' 改为 './xxx.uvue'
  if (absSrcPath.endsWith('/index.ts')) {
    out = out.replace(/(['"])(\.\/[^'"]+?)\.vue\1/g, '$1$2.uvue$1');
  }

  // 2) 通用：把跨目录的 `from '../../utils/xxx'` 不带扩展名的 import 不需要改，
  //    HBuilderX 会自己解析 .uts。这里仅在用户启用 rewriteImports 时统一去掉 .ts 后缀。
  if (target.rewriteImports !== false) {
    out = out.replace(/(from\s+['"][^'"]+?)\.ts(['"])/g, '$1$2');
  }

  return out;
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
          { name: 'my-uniapp-x-demo', root: '/绝对路径/到/HBuilder/项目' },
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
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (!shouldSkip(full)) result.push(full);
    }
  }
  await walk(COMPONENTS_DIR);
  await walk(UTILS_DIR);
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
  for (const target of targets) {
    console.log(`→ ${target.name ?? target.root}`);
    for (const f of files) {
      const a = await syncOne(f, target);
      if (a === 'create') created++;
      else if (a === 'update') updated++;
      else skipped++;
    }
    console.log('');
  }
  console.log(`✅ 完成：${created} 新建 / ${updated} 更新 / ${skipped} 无变化${isDryRun ? ' (dry-run)' : ''}`);
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
