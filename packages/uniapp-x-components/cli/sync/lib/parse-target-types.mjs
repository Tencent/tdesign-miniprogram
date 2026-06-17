/**
 * 解析 target 的 types.ts（uniapp-x-components/src/components/{comp}/{comp}.types.ts）。
 *
 * target types.ts 用的是常规的 TS interface + 类型别名，且每个字段只有 JSDoc 描述、没有 default。
 * 这里把 `XxxProps` interface 解析出来 → fieldName → {tsType, description, optional}。
 */

import fs from 'node:fs';

function findMatchingBrace(text, startIdx) {
  let depth = 0;
  let inStr = null;
  let i = startIdx;
  for (; i < text.length; i++) {
    const c = text[i];
    const prev = text[i - 1];
    if (inStr) {
      if (c === inStr && prev !== '\\') inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      inStr = c;
      continue;
    }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * @returns {Map<string, {tsType: string, description: string|null, optional: boolean}>}
 */
export function parseTargetTypes(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  // 找到 export interface XxxProps {
  const m = src.match(/export\s+interface\s+\w+Props\s*{/);
  if (!m) return new Map();
  const startBrace = m.index + m[0].length - 1;
  const endBrace = findMatchingBrace(src, startBrace);
  const body = src.slice(startBrace + 1, endBrace);

  const result = new Map();
  const lines = body.split('\n');
  let pendingDoc = null;
  let pendingDocLines = [];
  let inDoc = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith('/**')) {
      inDoc = true;
      pendingDocLines = [];
      if (line.endsWith('*/')) {
        pendingDocLines.push(line.replace(/^\/\*\*\s*/, '').replace(/\s*\*\/$/, ''));
        inDoc = false;
        pendingDoc = pendingDocLines;
        pendingDocLines = [];
      }
      continue;
    }
    if (inDoc) {
      if (line.endsWith('*/')) {
        inDoc = false;
        pendingDoc = pendingDocLines;
        pendingDocLines = [];
        continue;
      }
      pendingDocLines.push(line.replace(/^\*\s?/, ''));
      continue;
    }
    if (!line || line.startsWith('//')) continue;

    const fieldMatch = line.match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*(\?)?\s*:\s*(.+);?\s*$/);
    if (!fieldMatch) {
      pendingDoc = null;
      continue;
    }
    const [, name, optMark, typePartRaw] = fieldMatch;
    let description = null;
    if (pendingDoc) {
      description = pendingDoc.filter((s) => s.length > 0).join(' ').trim() || null;
    }
    result.set(name, {
      tsType: typePartRaw.replace(/;$/, '').trim(),
      description,
      optional: optMark === '?',
    });
    pendingDoc = null;
  }
  return result;
}

/**
 * 解析 target 的 uvue 中 defineProps({ ... }) 的字段名集合。
 * 仅用于对比，不深度解析每个字段。
 */
export function parseTargetUvueDefineProps(filePath) {
  if (!fs.existsSync(filePath)) return new Set();
  const src = fs.readFileSync(filePath, 'utf8');
  const m = src.match(/defineProps\s*\(\s*{/);
  if (!m) return new Set();
  const startBrace = m.index + m[0].length - 1;
  const endBrace = findMatchingBrace(src, startBrace);
  const body = src.slice(startBrace + 1, endBrace);
  const names = new Set();
  // 顶层匹配 name: 形式
  // 简单实现：扫描 ^\s*name\s*:
  const lines = body.split('\n');
  let depth = 0;
  for (const line of lines) {
    // 计算这一行结束时的深度变化（很粗糙，但 defineProps 写法都是单行 { type: ..., default: ... }）
    const trimmed = line.trim();
    if (depth === 0) {
      const fm = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*:/);
      if (fm) names.add(fm[1]);
    }
    for (const c of line) {
      if (c === '{' || c === '(' || c === '[') depth++;
      else if (c === '}' || c === ')' || c === ']') depth--;
    }
  }
  return names;
}
