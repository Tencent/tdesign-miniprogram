#!/usr/bin/env node
/**
 * sync-tokens: 把 baseline 的 less CSS Token 同步到 target 的 .theme.less。
 *
 * 用法：
 *   # 默认 dry-run（只打印 diff，不写文件）
 *   node cli/sync/sync-tokens.mjs t-input
 *
 *   # 真改：补缺失字段（不动现有 fallback）
 *   node cli/sync/sync-tokens.mjs t-input --apply
 *
 *   # 真改：补缺失 + 把现有 fallback 也改成 baseline 标准化值（最激进）
 *   node cli/sync/sync-tokens.mjs t-input --apply --overwrite
 *
 *   # 全量
 *   node cli/sync/sync-tokens.mjs --all --apply
 *
 * 行为说明：
 * - 缺失的 CSS var：插入 `@td-{shortName}: var(--td-{xxx}, NORMALIZED_FALLBACK);`
 * - fallback 不一致：默认保留 target；--overwrite 时改成 baseline 标准化值
 * - target 私有 token：完全不动
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

/**
 * 解析 baseline less 文件顶部的局部别名定义，建立"短名 → rawFallback"字典。
 * 例：cell.less 顶部 `@cell-horizontal-padding: var(--td-cell-horizontal-padding, 32rpx);`
 *  → key='cell-horizontal-padding', rawFallback='32rpx'
 *
 * 这些别名经常被同文件后续 token 引用（如 `@cell-border-left-space: var(..., @cell-horizontal-padding)`），
 * 因此在 normalize 时必须把它们也作为字典展开来源。
 */
function loadLocalAliases(lessPath) {
  const map = new Map();
  if (!fs.existsSync(lessPath)) return map;
  const src = fs.readFileSync(lessPath, 'utf8');
  const re = /^\s*@([\w-]+)\s*:\s*var\(\s*--td-[\w-]+\s*,\s*([^)]+?)\s*\)\s*;/gm;
  let m;
  while ((m = re.exec(src)) != null) {
    map.set(m[1], { rawFallback: m[2].trim() });
  }
  return map;
}

/**
 * 把 CSS 变量名转成 target 的 less 别名：
 *   --td-input-bg-color → @td-input-bg-color
 */
function cssVarToLessAlias(cssVar) {
  // 去掉前导 --
  return '@' + cssVar.slice(2);
}

/**
 * 生成单行 less token 定义：
 *   @td-input-bg-color: var(--td-input-bg-color, FALLBACK); // COMMENT
 */
function renderTokenLine(cssVar, fallback, comment) {
  const alias = cssVarToLessAlias(cssVar);
  let line = `${alias}: var(${cssVar}, ${fallback});`;
  if (comment) line += ` // ${comment}`;
  return line;
}

/**
 * 在 target less 中找一个稳妥的插入点：
 *   - 优先：最后一个 `@td-...: var(...);` 行的下一行
 *   - 否则：第一个 `.t-xxx {` 选择器之前
 *   - 否则：文件开头
 */
function findInsertPoint(src) {
  const lines = src.split('\n');
  let lastTokenLine = -1;
  let firstSelectorLine = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*@td-[\w-]+\s*:\s*var\(/.test(line)) {
      lastTokenLine = i;
    }
    if (firstSelectorLine === -1 && /^\.t-[\w-]+\s*{/.test(line)) {
      firstSelectorLine = i;
    }
  }
  if (lastTokenLine >= 0) return lastTokenLine + 1;
  if (firstSelectorLine >= 0) return firstSelectorLine; // 插在选择器前
  return 0;
}

/**
 * 计算 sync plan：返回要执行的 add / overwrite 操作列表。
 */
function planSync(baselineMap, targetMap, { overwrite }, extraDict) {
  const adds = []; // 要插入的新行
  const overwrites = []; // 要改写 fallback 的行
  for (const [cssVar, base] of baselineMap) {
    const normalized = normalizeFallback(base.fallback, extraDict);
    const tgt = targetMap.get(cssVar);
    if (!tgt) {
      adds.push({
        cssVar,
        fallback: normalized,
        comment: base.comment,
      });
    } else if (overwrite && tgt.fallback !== normalized) {
      overwrites.push({
        cssVar,
        oldFallback: tgt.fallback,
        newFallback: normalized,
        targetLessVar: tgt.lessVar,
      });
    }
  }
  return { adds, overwrites };
}

/**
 * 执行 sync plan，返回新的 less 源码。
 */
function applySync(src, plan) {
  let next = src;

  // 1) 改写已有行的 fallback
  for (const ov of plan.overwrites) {
    // 匹配该 token 行
    const lineRe = new RegExp(
      `(${escapeRegex(ov.targetLessVar)}\\s*:\\s*var\\(\\s*${escapeRegex(ov.cssVar)}\\s*,\\s*)([^)]+?)(\\)\\s*;)`,
      'g',
    );
    next = next.replace(lineRe, (_m, p1, _p2, p3) => `${p1}${ov.newFallback}${p3}`);
  }

  // 2) 追加新增行
  if (plan.adds.length > 0) {
    const lines = next.split('\n');
    const insertIdx = findInsertPoint(next);
    const newLines = plan.adds.map((a) => renderTokenLine(a.cssVar, a.fallback, a.comment));
    lines.splice(insertIdx, 0, ...newLines);
    next = lines.join('\n');
  }

  return next;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function syncOne(targetName, opts) {
  const paths = resolveComponentPaths(targetName);
  const missing = checkComponentExists(paths);
  if (missing.length > 0) return { targetName, ok: false, reason: missing.join(', ') };
  if (!fs.existsSync(paths.baseline.less)) {
    return { targetName, ok: false, reason: `baseline less 不存在: ${paths.baseline.less}` };
  }
  if (!fs.existsSync(paths.target.less)) {
    return { targetName, ok: false, reason: `target less 不存在: ${paths.target.less}` };
  }

  const baselineMap = parseLessTokens(paths.baseline.less);
  const targetSrc = fs.readFileSync(paths.target.less, 'utf8');
  const targetMap = parseLessTokens(paths.target.less);
  const extraDict = loadLocalAliases(paths.baseline.less);
  const plan = planSync(baselineMap, targetMap, { overwrite: opts.overwrite }, extraDict);

  const willChange = plan.adds.length + plan.overwrites.length;
  if (willChange === 0) return { targetName, ok: true, plan, changed: false };

  if (opts.apply) {
    const next = applySync(targetSrc, plan);
    fs.writeFileSync(paths.target.less, next, 'utf8');
  }
  return { targetName, ok: true, plan, changed: true, paths };
}

function printResult(r, opts) {
  if (!r.ok) {
    console.error(`[${r.targetName}] ❌ ${r.reason}`);
    return;
  }
  const adds = r.plan.adds.length;
  const ovs = r.plan.overwrites.length;
  const tag = opts.apply ? '✅ apply' : '🔍 dry-run';
  console.log(`[${r.targetName}] ${tag} | adds: ${adds} | overwrites: ${ovs}`);
  for (const a of r.plan.adds) {
    console.log(`  + ${renderTokenLine(a.cssVar, a.fallback, a.comment)}`);
  }
  for (const ov of r.plan.overwrites) {
    console.log(`  ~ ${ov.cssVar}: ${ov.oldFallback}  →  ${ov.newFallback}`);
  }
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const overwrite = args.includes('--overwrite');
  const all = args.includes('--all');
  let targets;
  if (all) {
    targets = listAllTargetComponents();
  } else {
    const positional = args.filter((a) => !a.startsWith('--'));
    if (positional.length === 0) {
      console.error('用法: node cli/sync/sync-tokens.mjs <comp> [--apply] [--overwrite] | --all');
      process.exit(1);
    }
    targets = positional;
  }

  let totalChanges = 0;
  for (const t of targets) {
    const r = syncOne(t, { apply, overwrite });
    printResult(r, { apply, overwrite });
    if (r.ok && r.changed) totalChanges += r.plan.adds.length + r.plan.overwrites.length;
  }
  console.log(`\n${apply ? '✅ 已写入' : '🔍 dry-run'}：共 ${totalChanges} 处变更${overwrite ? '（含覆盖）' : '（仅新增）'}`);
  if (!apply && totalChanges > 0) {
    console.log('提示：加 --apply 真写文件，加 --overwrite 同时覆盖现有不一致的默认值。');
  }
}

main();
