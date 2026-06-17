#!/usr/bin/env node
/**
 * typecheck: 跑 tsc --noEmit，输出整理过的报告。
 *
 * 注意：t-input.uvue 中用的是 lang="uts"，tsc 默认不识别 .uvue，所以它**不会**对 uvue 报错。
 * 这里 typecheck 只对 .ts/.types.ts/.variants.ts 文件生效，是有用的最小集。
 *
 * 用法：
 *   node cli/sync/typecheck.mjs           # 全量
 *   node cli/sync/typecheck.mjs t-input   # 只过滤包含路径包含 t-input 的错误
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

import { UNIAPP_X_ROOT } from './lib/component-paths.mjs';

const REPORTS_DIR = path.resolve(UNIAPP_X_ROOT, 'cli/sync/.reports');

function main() {
  const args = process.argv.slice(2);
  const filterComp = args.find((a) => !a.startsWith('--')) || null;

  const result = spawnSync('npx', ['tsc', '--noEmit', '-p', UNIAPP_X_ROOT], {
    cwd: UNIAPP_X_ROOT,
    encoding: 'utf8',
    stdio: 'pipe',
  });

  // tsc 把错误输出到 stdout
  const out = (result.stdout || '') + (result.stderr || '');

  // 标准格式：path/to/file.ts(123,45): error TS2304: Cannot find name 'foo'.
  const lineRe = /^(.+?)\((\d+),(\d+)\):\s+(error|warning)\s+(TS\d+):\s+(.+)$/;
  const errors = [];
  for (const line of out.split('\n')) {
    const m = line.match(lineRe);
    if (m) {
      errors.push({
        file: m[1],
        line: Number(m[2]),
        col: Number(m[3]),
        level: m[4],
        code: m[5],
        msg: m[6],
      });
    }
  }

  let filtered = errors;
  if (filterComp) {
    filtered = errors.filter((e) => e.file.includes(`/${filterComp}/`));
  }

  // 按文件聚合
  const byFile = new Map();
  for (const e of filtered) {
    if (!byFile.has(e.file)) byFile.set(e.file, []);
    byFile.get(e.file).push(e);
  }

  // 输出 markdown
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const lines = [];
  const reportName = filterComp ? `typecheck-${filterComp}.md` : 'typecheck.md';
  lines.push(`# Typecheck Report${filterComp ? ` (filter: ${filterComp})` : ''}`);
  lines.push('');
  lines.push(`- 总错误：${errors.length}${filterComp ? `（过滤后：${filtered.length}）` : ''}`);
  lines.push(`- exit code：${result.status}`);
  lines.push('');
  if (filtered.length === 0) {
    lines.push('✅ 无错误');
  } else {
    for (const [file, errs] of byFile) {
      lines.push(`## \`${path.relative(UNIAPP_X_ROOT, file)}\``);
      lines.push('');
      for (const e of errs) {
        lines.push(`- L${e.line}:${e.col} ${e.code} ${e.msg}`);
      }
      lines.push('');
    }
  }
  const outPath = path.join(REPORTS_DIR, reportName);
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');

  console.log(`tsc 退出码：${result.status} | 总错误：${errors.length}${filterComp ? ` | 过滤后 ${filtered.length}` : ''}`);
  console.log(`报告：${path.relative(UNIAPP_X_ROOT, outPath)}`);
  if (filtered.length > 0) {
    // 展示前 10 条
    console.log('\n前 10 条错误：');
    for (const e of filtered.slice(0, 10)) {
      console.log(`  ${path.relative(UNIAPP_X_ROOT, e.file)}:${e.line}:${e.col} ${e.code} ${e.msg}`);
    }
  }

  process.exit(filtered.length > 0 ? 1 : 0);
}

main();
