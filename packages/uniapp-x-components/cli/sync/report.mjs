#!/usr/bin/env node
/**
 * report: 一键执行 audit-props + audit-tokens + typecheck，输出汇总 README。
 *
 * 用法：
 *   node cli/sync/report.mjs t-input
 *   node cli/sync/report.mjs --all
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

import {
  listAllTargetComponents,
  UNIAPP_X_ROOT,
} from './lib/component-paths.mjs';

const REPORTS_DIR = path.resolve(UNIAPP_X_ROOT, 'cli/sync/.reports');

function runNode(script, args) {
  const r = spawnSync('node', [path.join(UNIAPP_X_ROOT, 'cli/sync', script), ...args], {
    cwd: UNIAPP_X_ROOT,
    encoding: 'utf8',
    stdio: 'inherit',
  });
  return r.status ?? 0;
}

function main() {
  const args = process.argv.slice(2);
  let targets;
  if (args.includes('--all')) {
    targets = listAllTargetComponents();
  } else if (args.length === 0) {
    console.error('用法: node cli/sync/report.mjs <comp> | --all');
    process.exit(1);
  } else {
    targets = args.filter((a) => !a.startsWith('--'));
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  console.log('\n════════ [1/3] audit-props ════════\n');
  runNode('audit-props.mjs', targets);

  console.log('\n════════ [2/3] audit-tokens ════════\n');
  runNode('audit-tokens.mjs', targets);

  console.log('\n════════ [3/3] typecheck ════════\n');
  // typecheck 一次跑全量更经济
  runNode('typecheck.mjs', []);

  // 写汇总 index
  const indexPath = path.join(REPORTS_DIR, 'README.md');
  const lines = [];
  lines.push('# Sync Reports');
  lines.push('');
  lines.push(`生成时间：${new Date().toISOString()}`);
  lines.push('');
  lines.push('## 报告列表');
  lines.push('');
  for (const t of targets) {
    lines.push(`### ${t}`);
    lines.push('');
    lines.push(`- [props 差异](./${t}-props.md)`);
    lines.push(`- [tokens 差异](./${t}-tokens.md)`);
    lines.push('');
  }
  lines.push('- [全量 typecheck](./typecheck.md)');
  lines.push('');
  fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');
  console.log(`\n汇总：${path.relative(UNIAPP_X_ROOT, indexPath)}`);
}

main();
