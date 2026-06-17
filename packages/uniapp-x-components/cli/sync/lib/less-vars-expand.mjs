/**
 * 解析 baseline 的 _variables.less，建立 less 变量名 → 标准化值的字典。
 *
 * 本仓库 baseline 的 _variables.less 中变量定义都是：
 *   @xxx: var(--td-yyy, FALLBACK);
 *
 * 其中 FALLBACK 可能是：
 *   - 字面值（颜色/数值/带单位）
 *   - 引用其它 less 变量（如 @gray-color-3、@font-gray-1）
 *   - 复合字面（如 24rpx / 40rpx @font-family）
 *
 * 我们要做两件事：
 * 1) 把 less 变量递归展开为最终 fallback（用于把 baseline 组件 less 中的 @xxx 替换成具体值）；
 * 2) 顺便记录每个 less 变量对应的 CSS 变量名（用于将来生成 var(--td-xxx, FALLBACK)）。
 */

import fs from 'node:fs';
import path from 'node:path';

import { UNIAPP_BASELINE_ROOT } from './component-paths.mjs';

const VARIABLES_LESS = path.resolve(UNIAPP_BASELINE_ROOT, 'common/style/_variables.less');

/**
 * @typedef {Object} LessVarDef
 * @property {string} name           不带 @ 的变量名，如 'text-color-primary'
 * @property {string} cssVar         如 '--td-text-color-primary'
 * @property {string} rawFallback    原始 fallback（可能含 @xxx 引用）
 * @property {string=} expandedFallback 完全展开后的字面 fallback
 */

/**
 * 解析 _variables.less 并返回一个 Map：lessVarName -> LessVarDef。
 */
let cached = null;
export function loadVariablesDict() {
  if (cached) return cached;
  if (!fs.existsSync(VARIABLES_LESS)) {
    cached = new Map();
    return cached;
  }
  const src = fs.readFileSync(VARIABLES_LESS, 'utf8');

  const map = new Map();

  // 因为 fallback 可能跨多行（如 @shadow-1 / @font-xxx），先按 ; 切，但 @shadow-* 内有逗号、跨多行
  // 这里只处理单行的 var() 形式：跨多行的 shadow 暂不展开（组件 less 用得少）
  const lineRe = /^\s*@([\w-]+)\s*:\s*var\(\s*(--td-[\w-]+)\s*,\s*(.+?)\s*\)\s*;/gm;
  let m;
  while ((m = lineRe.exec(src)) != null) {
    const [, name, cssVar, rawFallback] = m;
    map.set(name, {
      name,
      cssVar,
      rawFallback: rawFallback.trim(),
    });
  }

  // 单纯字面值 / 跨多行的非 var(...) 形式
  // @text-line-height: 1.5;
  const flatRe = /^\s*@([\w-]+)\s*:\s*([^;@\n]+?)\s*;\s*$/gm;
  while ((m = flatRe.exec(src)) != null) {
    const [, name, value] = m;
    if (!map.has(name)) {
      // 当 value 不是 var(...) 时存为 rawFallback
      if (!value.startsWith('var(')) {
        map.set(name, { name, cssVar: null, rawFallback: value.trim() });
      }
    }
  }

  // 递归展开
  function expand(value, seen = new Set()) {
    // 把 fallback 中所有 @xxx 替换为它们的展开值
    return value.replace(/@([\w-]+)/g, (whole, ref) => {
      if (seen.has(ref)) return whole;
      const def = map.get(ref);
      if (!def) return whole;
      const refSeen = new Set(seen);
      refSeen.add(ref);
      const expanded = expand(def.rawFallback, refSeen);
      return expanded;
    });
  }

  for (const def of map.values()) {
    def.expandedFallback = expand(def.rawFallback);
  }

  cached = map;
  return cached;
}

/**
 * 把任意 less fallback 表达式中的 @xxx 引用展开为字面值。
 * 用法：normalizeLessRefs('@gray-color-3') → '#e7e7e7'
 *
 * @param {string} value
 * @param {Map<string, {expandedFallback?: string, rawFallback: string}>=} extraDict
 *   组件局部变量字典（如 cell.less 顶部定义的 @cell-vertical-padding 这种），
 *   会优先于全局 _variables.less 字典查找。
 */
export function normalizeLessRefs(value, extraDict) {
  const dict = loadVariablesDict();
  // 先把 extraDict 也做一次自我展开（递归引用）
  const localResolved = new Map();
  if (extraDict && extraDict.size > 0) {
    function resolveLocal(name, seen = new Set()) {
      if (localResolved.has(name)) return localResolved.get(name);
      const def = extraDict.get(name);
      if (!def) return null;
      if (seen.has(name)) return def.rawFallback;
      const refSeen = new Set(seen);
      refSeen.add(name);
      const expanded = (def.rawFallback || '').replace(/@([\w-]+)/g, (whole, ref) => {
        // 优先 extraDict
        if (extraDict.has(ref)) {
          const r = resolveLocal(ref, refSeen);
          return r ?? whole;
        }
        const g = dict.get(ref);
        return g ? (g.expandedFallback || g.rawFallback) : whole;
      });
      localResolved.set(name, expanded);
      return expanded;
    }
    for (const name of extraDict.keys()) resolveLocal(name);
  }

  return value.replace(/@([\w-]+)/g, (whole, ref) => {
    if (localResolved.has(ref)) return localResolved.get(ref);
    const def = dict.get(ref);
    if (!def) return whole;
    return def.expandedFallback || def.rawFallback;
  });
}

/**
 * 把所有 rpx 数值转为 px（除以 2，保留小数）。750 设计稿 → 375 设计稿。
 *   '32rpx' → '16px'
 *   '24rpx / 40rpx @font-family' → '12px / 20px @font-family'
 */
export function rpxToPx(value) {
  return value.replace(/(\d+(?:\.\d+)?)rpx/g, (_, num) => {
    const n = Number(num) / 2;
    const px = Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
    return `${px}px`;
  });
}

/**
 * @param {string} rawFallback
 * @param {Map<string, {rawFallback: string}>=} extraDict 组件局部变量字典
 */
export function normalizeFallback(rawFallback, extraDict) {
  let v = normalizeLessRefs(rawFallback, extraDict);
  v = rpxToPx(v);
  return v.trim();
}
