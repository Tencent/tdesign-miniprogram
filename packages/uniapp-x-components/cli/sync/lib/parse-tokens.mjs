/**
 * 解析 less 文件中的 CSS Token。
 *
 * baseline 写法（uniapp-components/input/input.less）：
 *   @input-bg-color: var(--td-input-bg-color, @bg-color-container);
 *   @input-vertical-padding: var(--td-input-vertical-padding, 32rpx);
 *
 * target 写法（uniapp-x-components/.../t-input.theme.less）：
 *   @td-input-bg-color: var(--td-input-bg-color, #ffffff);
 *
 * 两边的 less 别名前缀不同（baseline 是 @input-xxx，target 是 @td-input-xxx），
 * 但中间都有一致的 CSS 变量名 --td-xxx-xxx —— 我们以 CSS 变量名为对齐 key。
 */

import fs from 'node:fs';

/**
 * 解析单行：@xxx: var(--td-yyy, FALLBACK);
 * fallback 中可能含 rgba(0,0,0,0.9) 这种嵌套括号，所以要做平衡括号扫描，不能用 [^)]+。
 */
function parseTokenLine(line) {
  // 匹配前缀：@xxx: var(--td-yyy,
  const m = line.match(/^\s*@([\w-]+)\s*:\s*var\(\s*(--td-[\w-]+)\s*,\s*/);
  if (!m) return null;
  const lessVar = `@${m[1]}`;
  const cssVar = m[2];
  // 从 m[0] 末尾起做平衡括号扫描（var( 已计 1 个深度）
  let depth = 1;
  let i = m[0].length;
  let inStr = null;
  for (; i < line.length; i++) {
    const c = line[i];
    const prev = line[i - 1];
    if (inStr) {
      if (c === inStr && prev !== '\\') inStr = null;
      continue;
    }
    if (c === '"' || c === "'") {
      inStr = c;
      continue;
    }
    if (c === '(') depth++;
    else if (c === ')') {
      depth--;
      if (depth === 0) break;
    }
  }
  if (depth !== 0) return null;
  let fallback = line.slice(m[0].length, i).trim();
  // 提取行尾注释
  const after = line.slice(i + 1);
  const cm = after.match(/\/\/\s*(.+)$/);
  const comment = cm ? cm[1].trim() : null;
  return { lessVar, cssVar, fallback, comment };
}

export function parseLessTokens(filePath) {
  if (!fs.existsSync(filePath)) return new Map();
  const src = fs.readFileSync(filePath, 'utf8');
  const result = new Map();
  for (const line of src.split('\n')) {
    const t = parseTokenLine(line);
    if (t) result.set(t.cssVar, t);
  }
  return result;
}

/**
 * 比较 baseline 与 target 的 token 表，返回 audit 结果。
 *
 * baseline 中默认值如 `@text-color-primary` 这种 less 变量引用、`32rpx` 单位 rpx，
 * target 通常用具体十六进制色 / px。这里**不**自动转换，只标 mismatch，让人确认。
 */
export function compareTokens(baselineMap, targetMap) {
  const onlyInBaseline = []; // baseline 有 / target 无
  const onlyInTarget = [];   // target 有 / baseline 无
  const fallbackMismatch = []; // CSS var 同名，但默认值不一致

  for (const [cssVar, base] of baselineMap) {
    const tgt = targetMap.get(cssVar);
    if (!tgt) {
      onlyInBaseline.push(base);
    } else if (tgt.fallback !== base.fallback) {
      fallbackMismatch.push({ cssVar, baseline: base, target: tgt });
    }
  }
  for (const [cssVar, tgt] of targetMap) {
    if (!baselineMap.has(cssVar)) onlyInTarget.push(tgt);
  }

  return { onlyInBaseline, onlyInTarget, fallbackMismatch };
}
