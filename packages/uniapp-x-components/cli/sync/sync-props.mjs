#!/usr/bin/env node
/**
 * sync-props: 把 baseline 缺失的 props 同步到 target 的 types.ts + uvue defineProps。
 *
 * 用法：
 *   node cli/sync/sync-props.mjs t-input             # dry-run
 *   node cli/sync/sync-props.mjs t-input --apply     # 真改
 *   node cli/sync/sync-props.mjs --all --apply
 *
 * 行为：
 * - 仅"补缺"，不动 target 已有字段
 * - 跳过 baseline 的 onXxx 事件字段（target 用 emit 而非 prop）
 * - 跳过 Function 类型字段（uts 中需要手写函数签名，自动生成会出错）
 * - 联合类型 `string | null` 等：types.ts 用联合，uvue defineProps 用 [String, null]
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
import { loadBaseline } from './lib/parse-baseline-props.mjs';
import { parseTargetTypes, parseTargetUvueDefineProps } from './lib/parse-target-types.mjs';

/** target 私有字段（baseline 不存在但合法） */
const TARGET_PRIVATE_FIELDS = new Set(['modelValue', 'customClass']);

/**
 * 把 baseline props.ts 中的 type 数组转成 uvue defineProps 用的 type 表达式。
 *   ['String']             → 'String'
 *   ['Boolean']            → 'Boolean'
 *   ['String', 'null']     → '[String, null]'
 *   ['String', 'Number']   → '[String, Number]'
 *   ['String', 'Object']   → 'String'  (Object 退回 String 比较安全；uts 中 Object 难表达)
 *   ['Boolean', 'Object']  → 'Boolean'
 *   ['Function']           → 'Function'
 */
function renderUvueType(typeNames) {
  if (typeNames.length === 0) return 'String';
  // 含 Object 的联合：把 Object 去掉
  const filtered = typeNames.filter((t) => t !== 'Object');
  const final = filtered.length > 0 ? filtered : typeNames;
  if (final.length === 1) return final[0];
  return `[${final.join(', ')}]`;
}

/**
 * baseline props.ts 中的 type 数组 → target types.ts 的 TS 类型字符串（fallback）。
 *   ['String']             → 'string'
 *   ['Boolean']            → 'boolean'
 *   ['Number']             → 'number'
 *   ['String', 'null']     → 'string | null'
 *   ['String', 'Object']   → 'string'
 *   ['Function']           → '(...args: any[]) => any'
 */
function renderTsType(typeNames) {
  const tsMap = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Object: 'object',
    Array: 'any[]',
    Function: '(...args: any[]) => any',
    null: 'null',
  };
  const parts = typeNames
    .map((t) => tsMap[t] ?? 'any')
    .filter((t, i, a) => a.indexOf(t) === i);
  return parts.join(' | ');
}

/**
 * 把 baseline 的 default 表达式转成 uvue defineProps 中的 default 表达式。
 * 直接复用，但去掉 TS 类型断言。null → null。
 *
 * 特殊处理：当 baseline default 是工厂函数（如 () => ({}) / () => []）
 * 但 type 联合中包含简单值类型时，降级为该联合中第一个值类型的默认值，
 * 否则 uvue 中类型校验会出错。
 */
function renderUvueDefault(defaultExpr, typeNames) {
  if (defaultExpr == null) {
    return defaultForTypes(typeNames);
  }
  // 工厂函数 default
  const isFactory = /^\(\s*\)\s*=>/.test(defaultExpr.trim());
  if (isFactory) {
    const onlyObjArr = typeNames.every((t) => t === 'Object' || t === 'Array' || t === 'Function');
    if (!onlyObjArr) {
      // 当存在简单值类型时，工厂函数 default 不再合理 → 退回简单值默认
      return defaultForTypes(typeNames);
    }
  }
  return defaultExpr;
}

function defaultForTypes(typeNames) {
  if (typeNames.includes('Boolean')) return 'false';
  if (typeNames.includes('String')) return "''";
  if (typeNames.includes('Number')) return '0';
  if (typeNames.includes('Array')) return '() => []';
  if (typeNames.includes('Object')) return '() => ({})';
  if (typeNames.includes('null')) return 'null';
  return 'null';
}

/**
 * 决定字段是否要跳过同步：
 * - 事件 onXxx：跳过
 * - 复杂 Function 签名（baseline 默认是 () => ({})）：跳过，让用户自己加 emit
 * - 仅类型为 Object：跳过（uts 中 object 难表达）
 */
function shouldSkip(prop) {
  if (prop.category === 'event') return { skip: true, reason: 'event(用 emit)' };
  // 仅 Function：跳过
  const tns = prop.typeNames;
  if (tns.length === 1 && tns[0] === 'Function') return { skip: true, reason: 'Function 类型' };
  // 仅 Object：跳过
  if (tns.length === 1 && tns[0] === 'Object') return { skip: true, reason: '纯 Object 类型' };
  return { skip: false };
}

/**
 * 渲染单个 uvue defineProps 行：
 *   image: { type: String, default: '' },
 *   prefixIcon: { type: String, default: '' },
 *   url: { type: String, default: '' },
 */
function renderUvuePropLine(prop) {
  const type = renderUvueType(prop.typeNames);
  const def = renderUvueDefault(prop.defaultExpr, prop.typeNames);
  return `  ${prop.name}: { type: ${type}, default: ${def} },`;
}

/**
 * 渲染单个 types.ts interface 字段：
 *   /** 描述 *\/
 *   fieldName?: tsType;
 */
function renderTsInterfaceLines(prop) {
  const ts = renderTsType(prop.typeNames);
  const lines = [];
  const desc = prop.description || '';
  if (desc.length > 0) {
    lines.push(`  /** ${desc.replace(/\n/g, ' ')} */`);
  }
  lines.push(`  ${prop.name}?: ${ts};`);
  return lines;
}

/**
 * 找到 target types.ts 中 interface XxxProps { ... } 的 } 位置（用于在前面插入新字段）。
 */
function findInterfaceClosing(src) {
  const m = src.match(/export\s+interface\s+\w+Props\s*{/);
  if (!m) return -1;
  let depth = 0;
  let inStr = null;
  let i = m.index + m[0].length - 1;
  for (; i < src.length; i++) {
    const c = src[i];
    const prev = src[i - 1];
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
 * 找到 target uvue 中 defineProps({ ... }) 的 } 位置。
 */
function findDefinePropsClosing(src) {
  const m = src.match(/defineProps\s*\(\s*{/);
  if (!m) return -1;
  let depth = 0;
  let inStr = null;
  let i = m.index + m[0].length - 1;
  for (; i < src.length; i++) {
    const c = src[i];
    const prev = src[i - 1];
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
 * 在指定位置（} 之前）插入新行。会智能处理前面是否需要补 ',' 或 '\n'。
 *
 * 上一行末尾如果是 ',' (uvue object) 或 ';' (ts interface) 或 '{' (空容器)，
 * 都不需要再补任何分隔符。
 */
function insertBeforeClosing(src, closingIdx, blockText) {
  let j = closingIdx - 1;
  while (j >= 0 && /\s/.test(src[j])) j--;
  const lastChar = j >= 0 ? src[j] : '{';
  const needComma = lastChar !== ',' && lastChar !== ';' && lastChar !== '{';
  const prefix = needComma ? ',\n' : '\n';
  return src.slice(0, closingIdx) + prefix + blockText + '\n' + src.slice(closingIdx);
}

function syncOne(targetName, opts) {
  const paths = resolveComponentPaths(targetName);
  const missing = checkComponentExists(paths);
  if (missing.length > 0) return { targetName, ok: false, reason: missing.join(', ') };

  const baseline = loadBaseline({
    propsPath: paths.baseline.props,
    typePath: paths.baseline.type,
  });
  const targetTypes = parseTargetTypes(paths.target.types);
  const targetDefineProps = parseTargetUvueDefineProps(paths.target.uvue);

  const toAdd = [];
  const skipped = [];

  for (const [name, prop] of baseline) {
    if (TARGET_PRIVATE_FIELDS.has(name)) continue;
    const skip = shouldSkip(prop);
    if (skip.skip) {
      // 仍然记录 event，方便在结尾打提示
      skipped.push({ prop, reason: skip.reason });
      continue;
    }
    const inTypes = targetTypes.has(name);
    const inUvue = targetDefineProps.has(name);
    if (inTypes && inUvue) continue; // 已存在
    toAdd.push({ prop, missingTypes: !inTypes, missingUvue: !inUvue });
  }

  if (toAdd.length === 0) {
    return { targetName, ok: true, changed: false, toAdd, skipped };
  }

  // 渲染 patch
  const tsLines = [];
  const uvueLines = [];
  for (const item of toAdd) {
    if (item.missingTypes) tsLines.push(...renderTsInterfaceLines(item.prop));
    if (item.missingUvue) uvueLines.push(renderUvuePropLine(item.prop));
  }

  if (opts.apply) {
    if (tsLines.length > 0) {
      const src = fs.readFileSync(paths.target.types, 'utf8');
      const close = findInterfaceClosing(src);
      if (close >= 0) {
        const next = insertBeforeClosing(src, close, tsLines.join('\n'));
        fs.writeFileSync(paths.target.types, next, 'utf8');
      }
    }
    if (uvueLines.length > 0) {
      const src = fs.readFileSync(paths.target.uvue, 'utf8');
      const close = findDefinePropsClosing(src);
      if (close >= 0) {
        const next = insertBeforeClosing(src, close, uvueLines.join('\n'));
        fs.writeFileSync(paths.target.uvue, next, 'utf8');
      }
    }
  }

  return {
    targetName,
    ok: true,
    changed: true,
    toAdd,
    skipped,
    tsLines,
    uvueLines,
    paths,
  };
}

function printResult(r, opts) {
  if (!r.ok) {
    console.error(`[${r.targetName}] ❌ ${r.reason}`);
    return;
  }
  const tag = opts.apply ? '✅ apply' : '🔍 dry-run';
  console.log(`[${r.targetName}] ${tag} | adds: ${r.toAdd.length} | skipped: ${r.skipped.length}`);
  for (const item of r.toAdd) {
    const flags = [];
    if (item.missingTypes) flags.push('types');
    if (item.missingUvue) flags.push('uvue');
    console.log(`  + ${item.prop.name} [${flags.join(',')}]: ${item.prop.typeNames.join('|')}${item.prop.defaultExpr ? ` = ${item.prop.defaultExpr}` : ''}`);
  }
  if (r.skipped.length > 0) {
    console.log(`  跳过 (需手动处理):`);
    for (const s of r.skipped) {
      console.log(`    - ${s.prop.name} (${s.reason})`);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const all = args.includes('--all');
  let targets;
  if (all) {
    targets = listAllTargetComponents();
  } else {
    const positional = args.filter((a) => !a.startsWith('--'));
    if (positional.length === 0) {
      console.error('用法: node cli/sync/sync-props.mjs <comp> [--apply] | --all');
      process.exit(1);
    }
    targets = positional;
  }

  let totalAdds = 0;
  for (const t of targets) {
    const r = syncOne(t, { apply });
    printResult(r, { apply });
    if (r.ok && r.changed) totalAdds += r.toAdd.length;
  }
  console.log(`\n${apply ? '✅ 已写入' : '🔍 dry-run'}：共 ${totalAdds} 处新增字段`);
  if (!apply && totalAdds > 0) {
    console.log('提示：加 --apply 真写文件。');
  }
}

main();
