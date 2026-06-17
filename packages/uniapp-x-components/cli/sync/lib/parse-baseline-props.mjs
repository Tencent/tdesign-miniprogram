/**
 * 解析 baseline 的 props.ts（uniapp-components/{comp}/props.ts）。
 *
 * 这个文件是 tdesign-api 自动生成的，结构非常稳定：
 *
 *   export default {
 *     adjustPosition: { type: Boolean, default: true },
 *     align: { type: String, default: 'left', validator(...) },
 *     onBlur: { type: Function, default: () => ({}) },
 *     ...
 *   };
 *
 * 我们用纯正则 + 平衡括号扫描的方式拿到每个字段的元数据，而不引 ts-morph。
 *
 * 同时解析 baseline 的 type.ts 拿到 JSDoc 描述和 TS 类型联合。
 */

import fs from 'node:fs';

/**
 * @typedef {Object} ParsedProp
 * @property {string} name 字段名（如 align）
 * @property {string} category 'prop' | 'event'  以 on 开头视为 event
 * @property {string[]} typeNames type 数组，如 ['String'] 或 ['Boolean','null']
 * @property {string|null} defaultExpr 原始默认值表达式（如 "'left'", 'true', '-1', 'null'）
 * @property {string|null} validatorEnum 从 validator 中提取的枚举值数组源代码（如 "['left','center','right']"）
 * @property {boolean} hasValidator
 * @property {string|null} description 来自 type.ts 的 JSDoc 描述
 * @property {string|null} tsType 来自 type.ts 的 TS 类型联合
 * @property {string|null} jsDocDefault @default 标签
 * @property {boolean} optional type.ts 中是否带 ?
 */

/**
 * 平衡括号扫描：从 startIdx（指向 '{'）开始返回与之匹配的 '}' 的下标。
 * 简单实现，不处理字符串内的括号——但 props.ts 写法很规整，可接受。
 */
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
 * 提取 type 字段值，例如：
 *   type: Boolean                  → ['Boolean']
 *   type: [String, null]           → ['String', 'null']
 *   type: [String, Number]         → ['String', 'Number']
 *   type: Function                 → ['Function']
 */
function extractTypes(body) {
  const m = body.match(/\btype\s*:\s*(\[[^\]]+\]|[A-Za-z][A-Za-z0-9_]*)/);
  if (!m) return [];
  const raw = m[1].trim();
  if (raw.startsWith('[')) {
    return raw
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [raw];
}

/**
 * 提取 default 字段，原始字符串。
 *   default: 'left' as TdInputProps['align']    → "'left'"
 *   default: true                                → 'true'
 *   default: () => ({})                          → '() => ({})'
 *   default: null as TdInputProps['placeholder'] → 'null'
 *   default: -1                                  → '-1'
 *
 * 同样用平衡括号扫描，从 'default' 关键字之后开始。
 */
function extractDefault(body) {
  const startMatch = body.match(/\bdefault\s*:\s*/);
  if (!startMatch) return null;
  let i = startMatch.index + startMatch[0].length;
  let depth = 0;
  let inStr = null;
  let start = i;
  for (; i < body.length; i++) {
    const c = body[i];
    const prev = body[i - 1];
    if (inStr) {
      if (c === inStr && prev !== '\\') inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      inStr = c;
      continue;
    }
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    else if (c === ',' && depth === 0) break;
    else if (c === '\n' && depth === 0) {
      // 也支持没有逗号但换行的情况
      const tail = body.slice(i + 1).trimStart();
      // 如果下一行就是 validator/方法 → 已经结束
      if (/^[a-zA-Z_]\w*\s*[(:]/.test(tail) || tail.startsWith('}')) break;
    }
  }
  let raw = body.slice(start, i).trim();
  // 去掉 TS 类型断言尾巴： xxx as TdInputProps['align']
  raw = raw.replace(/\s+as\s+[^,\n}]+$/, '').trim();
  // 去掉末尾逗号
  raw = raw.replace(/,$/, '').trim();
  return raw.length > 0 ? raw : null;
}

/**
 * 提取 validator 中的枚举数组，例如：
 *   validator(val): boolean { ... return ['left','center','right'].includes(val); }
 * 我们只关心 ['...'].includes 的那个数组字面量。
 */
function extractValidatorEnum(body) {
  const m = body.match(/\[[^\]]*\]\s*\.\s*includes\s*\(/);
  if (!m) return null;
  // 找到这个 [ 的位置
  const idx = body.indexOf('[', body.indexOf(m[0]));
  // 提取这个数组
  const close = body.indexOf(']', idx);
  if (idx < 0 || close < 0) return null;
  return body.slice(idx, close + 1);
}

/**
 * 解析 baseline 的 props.ts。
 * @param {string} filePath 绝对路径
 * @returns {Map<string, ParsedProp>}
 */
export function parseBaselineProps(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  // 找到 export default {
  const m = src.match(/export\s+default\s*{/);
  if (!m) throw new Error(`Cannot find "export default {" in ${filePath}`);
  const startBrace = m.index + m[0].length - 1; // 指向 '{'
  const endBrace = findMatchingBrace(src, startBrace);
  if (endBrace < 0) throw new Error(`Cannot find matching brace in ${filePath}`);

  const body = src.slice(startBrace + 1, endBrace);

  // 顶层扫描：每个字段是 `name: SimpleType,` 或 `name: { ... },` 或 `name: Boolean,`
  const result = new Map();
  let i = 0;
  while (i < body.length) {
    // 跳过空白和注释
    while (i < body.length && /\s/.test(body[i])) i++;
    if (i >= body.length) break;
    if (body[i] === '/') {
      // // 行注释 或 /* 块注释 */ 或 /** JSDoc */
      if (body[i + 1] === '/') {
        const nl = body.indexOf('\n', i);
        i = nl < 0 ? body.length : nl + 1;
        continue;
      }
      if (body[i + 1] === '*') {
        const close = body.indexOf('*/', i);
        i = close < 0 ? body.length : close + 2;
        continue;
      }
    }

    // 字段名
    const nameMatch = body.slice(i).match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*:/);
    if (!nameMatch) {
      // 跳过到下一个逗号
      const nx = body.indexOf(',', i);
      i = nx < 0 ? body.length : nx + 1;
      continue;
    }
    const name = nameMatch[1];
    i += nameMatch[0].length;

    // 跳过空白
    while (i < body.length && /\s/.test(body[i])) i++;

    let valueStart = i;
    let valueEnd;
    if (body[i] === '{') {
      const close = findMatchingBrace(body, i);
      valueEnd = close + 1;
      i = close + 1;
    } else {
      // 直到顶层逗号
      let depth = 0;
      let inStr = null;
      let j = i;
      for (; j < body.length; j++) {
        const c = body[j];
        const prev = body[j - 1];
        if (inStr) {
          if (c === inStr && prev !== '\\') inStr = null;
          continue;
        }
        if (c === '"' || c === "'" || c === '`') {
          inStr = c;
          continue;
        }
        if (c === '(' || c === '[' || c === '{') depth++;
        else if (c === ')' || c === ']' || c === '}') depth--;
        else if (c === ',' && depth === 0) break;
      }
      valueEnd = j;
      i = j;
    }

    const valueRaw = body.slice(valueStart, valueEnd);
    let typeNames;
    let defaultExpr = null;
    let validatorEnum = null;
    let hasValidator = false;
    if (valueRaw.startsWith('{')) {
      const inner = valueRaw.slice(1, -1);
      typeNames = extractTypes(inner);
      defaultExpr = extractDefault(inner);
      hasValidator = /\bvalidator\s*\(/.test(inner);
      if (hasValidator) {
        validatorEnum = extractValidatorEnum(inner);
      }
    } else {
      // 简写形式：name: Boolean
      typeNames = [valueRaw.trim()];
    }

    result.set(name, {
      name,
      category: name.startsWith('on') && /^[A-Z]/.test(name[2] ?? '') ? 'event' : 'prop',
      typeNames,
      defaultExpr,
      validatorEnum,
      hasValidator,
      description: null,
      tsType: null,
      jsDocDefault: null,
      optional: true,
    });

    // 跳过逗号
    while (i < body.length && /\s/.test(body[i])) i++;
    if (body[i] === ',') i++;
  }

  return result;
}

/**
 * 解析 baseline 的 type.ts，提取每个字段的 JSDoc 描述、TS 类型、@default。
 * type.ts 中 onXxx 类型形如：`onBlur?: (context: { value: InputValue }) => void;`
 *
 * @param {string} filePath
 * @returns {Map<string, {description: string|null, tsType: string|null, jsDocDefault: string|null, optional: boolean}>}
 */
export function parseBaselineType(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  // 找到 interface TdXxxProps {
  const ifaceMatch = src.match(/export\s+interface\s+\w+Props\s*{/);
  if (!ifaceMatch) return new Map();
  const startBrace = ifaceMatch.index + ifaceMatch[0].length - 1;
  const endBrace = findMatchingBrace(src, startBrace);
  const body = src.slice(startBrace + 1, endBrace);

  const result = new Map();
  // 简单按行扫描，遇到 /** ... */ 段记下描述，下一行匹配 fieldName?: type;
  const lines = body.split('\n');
  let pendingDoc = null;
  let pendingDocLines = [];
  let inDoc = false;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith('/**')) {
      inDoc = true;
      pendingDocLines = [];
      // 兼容单行 /** xxx */
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
      // 形如 "* xxx"
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
    const tsType = typePartRaw.replace(/;$/, '').trim();
    // 从 pendingDoc 拆出描述 + @default
    let description = null;
    let jsDocDefault = null;
    if (pendingDoc) {
      const descLines = [];
      for (const dl of pendingDoc) {
        const defM = dl.match(/^@default\s+(.*)$/);
        if (defM) {
          jsDocDefault = defM[1].trim();
        } else if (dl.length > 0) {
          descLines.push(dl);
        }
      }
      description = descLines.join(' ').trim() || null;
    }
    result.set(name, {
      description,
      tsType,
      jsDocDefault,
      optional: optMark === '?',
    });
    pendingDoc = null;
  }
  return result;
}

/**
 * 合并 props.ts 和 type.ts 的解析结果。
 */
export function loadBaseline({ propsPath, typePath }) {
  const props = parseBaselineProps(propsPath);
  const types = parseBaselineType(typePath);
  for (const [name, t] of types) {
    if (props.has(name)) {
      const p = props.get(name);
      p.description = t.description;
      p.tsType = t.tsType;
      p.jsDocDefault = t.jsDocDefault;
      p.optional = t.optional;
      props.set(name, p);
    } else {
      // type.ts 有但 props.ts 没有 —— 极少见，忽略
    }
  }
  return props;
}
