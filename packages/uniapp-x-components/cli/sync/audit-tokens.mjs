#!/usr/bin/env node
/**
 * audit-tokens: 对比 baseline ↔ target 的 less CSS Token 差异，输出 markdown 报告，不改文件。
 *
 * 用法：
 *   node cli/sync/audit-tokens.mjs t-input
 *   node cli/sync/audit-tokens.mjs --all
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import {
  resolveComponentPaths,
  listAllTargetComponents,
  checkComponentExists,
  UNIAPP_X_ROOT,
} from './lib/component-paths.mjs';
import { parseLessTokens } from './lib/parse-tokens.mjs';
import { normalizeFallback } from './lib/less-vars-expand.mjs';
import fs2 from 'node:fs';

/**
 * 解析 baseline less 顶部的局部别名，作为 normalize 的 extraDict。
 */
function loadLocalAliases(lessPath) {
  const map = new Map();
  if (!fs2.existsSync(lessPath)) return map;
  const src = fs2.readFileSync(lessPath, 'utf8');
  const re = /^\s*@([\w-]+)\s*:\s*var\(\s*--td-[\w-]+\s*,\s*([^)]+?)\s*\)\s*;/gm;
  let m;
  while ((m = re.exec(src)) != null) {
    map.set(m[1], { rawFallback: m[2].trim() });
  }
  return map;
}

const REPORTS_DIR = path.resolve(UNIAPP_X_ROOT, 'cli/sync/.reports');

function auditOne(targetName) {
  const paths = resolveComponentPaths(targetName);
  const missing = checkComponentExists(paths);
  if (missing.length > 0) return { targetName, ok: false, reason: missing.join(', ') };
  if (!fs.existsSync(paths.baseline.less)) {
    return { targetName, ok: false, reason: `缺少 baseline less: ${paths.baseline.less}` };
  }
  if (!fs.existsSync(paths.target.less)) {
    return { targetName, ok: false, reason: `缺少 target less: ${paths.target.less}` };
  }
  const baselineRaw = parseLessTokens(paths.baseline.less);
  const target = parseLessTokens(paths.target.less);
  const extraDict = loadLocalAliases(paths.baseline.less);

  // 对 baseline 的 fallback 做标准化（rpx→px、less 变量展开），与 target 同口径比较
  const baseline = new Map();
  for (const [cssVar, t] of baselineRaw) {
    baseline.set(cssVar, {
      ...t,
      fallback: normalizeFallback(t.fallback, extraDict),
    });
  }

  const onlyInBaseline = [];
  const onlyInTarget = [];
  const fallbackMismatch = [];
  for (const [cssVar, base] of baseline) {
    const tgt = target.get(cssVar);
    if (!tgt) onlyInBaseline.push(base);
    else if (tgt.fallback !== base.fallback) {
      fallbackMismatch.push({ cssVar, baseline: base, target: tgt });
    }
  }
  for (const [cssVar, tgt] of target) {
    if (!baseline.has(cssVar)) onlyInTarget.push(tgt);
  }
  return {
    targetName,
    ok: true,
    baseline,
    target,
    onlyInBaseline,
    onlyInTarget,
    fallbackMismatch,
    paths,
  };
}

function renderMarkdown(audit) {
  const lines = [];
  lines.push(`# CSS Token Audit: ${audit.targetName}`);
  lines.push('');
  lines.push(`> baseline = \`${path.relative(UNIAPP_X_ROOT, audit.paths.baseline.less)}\`  `);
  lines.push(`> target = \`${path.relative(UNIAPP_X_ROOT, audit.paths.target.less)}\``);
  lines.push('');
  lines.push('## 概览');
  lines.push('');
  lines.push(`- baseline tokens：${audit.baseline.size}`);
  lines.push(`- target tokens：${audit.target.size}`);
  lines.push(`- baseline 有 / target 无：${audit.onlyInBaseline.length}`);
  lines.push(`- target 有 / baseline 无：${audit.onlyInTarget.length}`);
  lines.push(`- 默认值不一致：${audit.fallbackMismatch.length}`);
  lines.push('');

  lines.push('## ❌ baseline 有 / target 无（建议添加）');
  lines.push('');
  if (audit.onlyInBaseline.length === 0) lines.push('（无）');
  else {
    for (const t of audit.onlyInBaseline) {
      const cm = t.comment ? ` // ${t.comment}` : '';
      lines.push(`- \`${t.cssVar}\` (默认 \`${t.fallback}\`)${cm}`);
    }
  }
  lines.push('');

  lines.push('## ⚠️ 默认值不一致（请人工确认）');
  lines.push('');
  if (audit.fallbackMismatch.length === 0) lines.push('（无）');
  else {
    lines.push('| CSS 变量 | baseline 默认值 | target 默认值 |');
    lines.push('| --- | --- | --- |');
    for (const m of audit.fallbackMismatch) {
      lines.push(`| \`${m.cssVar}\` | \`${m.baseline.fallback}\` | \`${m.target.fallback}\` |`);
    }
  }
  lines.push('');

  lines.push('## 🟢 target 有 / baseline 无（target 私有 token，通常无需处理）');
  lines.push('');
  if (audit.onlyInTarget.length === 0) lines.push('（无）');
  else {
    for (const t of audit.onlyInTarget) lines.push(`- \`${t.cssVar}\` (默认 \`${t.fallback}\`)`);
  }
  lines.push('');

  return lines.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  let targets;
  if (args.includes('--all')) {
    targets = listAllTargetComponents();
  } else if (args.length === 0) {
    console.error('用法: node cli/sync/audit-tokens.mjs <comp> | --all');
    process.exit(1);
  } else {
    targets = args.filter((a) => !a.startsWith('--'));
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  let totalIssues = 0;
  for (const t of targets) {
    const a = auditOne(t);
    if (!a.ok) {
      console.error(`[${t}] ${a.reason}`);
      continue;
    }
    const out = path.join(REPORTS_DIR, `${t}-tokens.md`);
    fs.writeFileSync(out, renderMarkdown(a), 'utf8');
    const issues = a.onlyInBaseline.length + a.fallbackMismatch.length;
    totalIssues += issues;
    console.log(
      `[${t}] baseline ${a.baseline.size} | target ${a.target.size} | ` +
      `missing ${a.onlyInBaseline.length} | mismatch ${a.fallbackMismatch.length} | ` +
      `extra ${a.onlyInTarget.length}  →  ${path.relative(UNIAPP_X_ROOT, out)}`,
    );
  }
  if (totalIssues > 0) {
    console.log(`\n共发现 ${totalIssues} 处 token 差异，详见 .reports/*.md`);
  } else {
    console.log('\n✅ 全部组件 token 已对齐');
  }
}

main();
