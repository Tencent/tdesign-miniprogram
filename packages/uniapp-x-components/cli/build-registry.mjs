#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * 扫描 src/components/* 目录，生成：
 *   - registry.json              ：所有组件的索引 + 完整内联源码
 *   - registry/<name>.json       ：每个组件单独的 manifest（CLI 单独 fetch）
 *
 * Manifest schema（参考 shadcn registry，按需精简）：
 * {
 *   "$schema": "https://tdesign.tencent.com/uniapp-x/registry/schema.json",
 *   "name": "button",
 *   "type": "registry:component",
 *   "title": "Button",
 *   "description": "...",
 *   "dependencies": [],                  // 外部 npm 依赖
 *   "registryDependencies": ["utils"],   // 同 registry 的兄弟项
 *   "files": [
 *     { "path": "components/button/button.vue", "type": "registry:component", "content": "..." },
 *     ...
 *   ]
 * }
 */

import { promises as fs } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC = join(ROOT, 'src');
const COMPONENTS_DIR = join(SRC, 'components');
const UTILS_DIR = join(SRC, 'utils');
const OUT_DIR = join(ROOT, 'registry');
const OUT_INDEX = join(ROOT, 'registry.json');

const SCHEMA_URL = 'https://tdesign.tencent.com/uniapp-x/registry/schema.json';

/** 列出目录的所有非 .test/.spec 文件，递归一层即可 */
async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    if (/\.(test|spec)\.[jt]s$/.test(e.name)) continue;
    if (e.name === 'index.ts') continue; // 桶导出由消费方决定如何整合
    files.push(join(dir, e.name));
  }
  return files;
}

/** 读取 README 中的首段 description */
function pickDescription(readme) {
  if (!readme) return '';
  const lines = readme.split(/\r?\n/);
  for (let i = 1; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t && !t.startsWith('#')) return t.replace(/^>\s*/, '');
  }
  return '';
}

async function buildComponent(name) {
  const dir = join(COMPONENTS_DIR, name);
  const stat = await fs.stat(dir).catch(() => null);
  if (!stat?.isDirectory()) return null;

  const filePaths = await listFiles(dir);
  const files = [];
  let readme = '';
  let title = name.replace(/^./, (c) => c.toUpperCase());

  for (const fp of filePaths) {
    const rel = relative(SRC, fp);
    const content = await fs.readFile(fp, 'utf8');
    if (fp.endsWith('README.md')) {
      readme = content;
      const m = content.match(/^#\s+(.+)$/m);
      if (m) title = m[1].trim();
      // README 也作为 file 暴露，方便 LLM 直接读
      files.push({ path: rel, type: 'registry:doc', content });
      continue;
    }
    let type = 'registry:component';
    if (fp.endsWith('.types.ts')) type = 'registry:types';
    else if (fp.endsWith('.variants.ts')) type = 'registry:variants';
    else if (fp.endsWith('.theme.less') || fp.endsWith('.less')) type = 'registry:style';
    else if (fp.endsWith('.uvue') || fp.endsWith('.vue')) type = 'registry:component';
    files.push({ path: rel, type, content });
  }

  return {
    $schema: SCHEMA_URL,
    name,
    type: 'registry:component',
    title,
    description: pickDescription(readme),
    dependencies: [],
    registryDependencies: ['utils'],
    files,
  };
}

async function buildUtilsModule() {
  const filePaths = await listFiles(UTILS_DIR);
  const files = [];
  for (const fp of filePaths) {
    const rel = relative(SRC, fp);
    const content = await fs.readFile(fp, 'utf8');
    files.push({ path: rel, type: 'registry:lib', content });
  }
  return {
    $schema: SCHEMA_URL,
    name: 'utils',
    type: 'registry:lib',
    title: 'Utils',
    description: '类名合并 cn 与变体引擎 cva（uts 兼容）',
    dependencies: [],
    registryDependencies: [],
    files,
  };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  // 1. utils
  const utils = await buildUtilsModule();

  // 2. components
  const compDirs = (await fs.readdir(COMPONENTS_DIR, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const components = [];
  for (const name of compDirs) {
    const c = await buildComponent(name);
    if (c) components.push(c);
  }

  // 3. 写每个 manifest
  const items = [utils, ...components];
  for (const item of items) {
    const out = join(OUT_DIR, `${item.name}.json`);
    await fs.writeFile(out, `${JSON.stringify(item, null, 2)}\n`);
    console.log(`✓ ${relative(ROOT, out)}  (${item.files.length} files)`);
  }

  // 4. 写总索引（不内联 content，仅元数据，体积可控）
  const index = {
    $schema: SCHEMA_URL,
    homepage: 'https://github.com/Tencent/tdesign-miniprogram',
    items: items.map((it) => ({
      name: it.name,
      type: it.type,
      title: it.title,
      description: it.description,
      dependencies: it.dependencies,
      registryDependencies: it.registryDependencies,
      files: it.files.map(({ path, type }) => ({ path, type })),
    })),
  };
  await fs.writeFile(OUT_INDEX, `${JSON.stringify(index, null, 2)}\n`);
  console.log(`✓ ${relative(ROOT, OUT_INDEX)}  (${items.length} items)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
