/**
 * Props 审计：对比 uniapp 版 props.ts 与 uniapp-x 版 .types.ts，
 * 找出缺失/多余/默认值不一致的字段
 *
 * 规则：
 *  - 只看 baseline props.ts 里以 `xxx: { ... }` 形式声明的顶层 key
 *  - 排除以 `on` 开头的（事件，单独处理）
 *  - 在 uvue types.ts 里以 `xxx?: ...` 形式声明
 *  - 不深入比类型，只比"有/没有"和"默认值"
 */
import fs from 'node:fs';
import path from 'node:path';

/** 从 uniapp props.ts 抽出 props 列表 */
export function extractBaselineProps(propsFilePath) {
  const text = fs.readFileSync(propsFilePath, 'utf8');
  const result = {};

  // 形式 1：`xxx: { type: ..., default: ... }` 多行块
  const propBlockRe = /^\s{2}(\w+):\s*\{([\s\S]*?)\n\s{2}\},?$/gm;
  let m;
  while ((m = propBlockRe.exec(text)) !== null) {
    const name = m[1];
    if (name.startsWith('on') && /^on[A-Z]/.test(name)) continue;
    const block = m[2];

    const defMatch = block.match(/default:\s*([^,\n]+)/);
    let defVal = defMatch ? defMatch[1].trim() : undefined;
    if (defVal) {
      defVal = defVal.replace(/\s+as\s+[\w\[\]'"\s]+$/, '').trim();
    }

    const typeMatch = block.match(/type:\s*([^,\n]+)/);
    const typeVal = typeMatch ? typeMatch[1].trim() : undefined;

    result[name] = { default: defVal, type: typeVal };
  }

  // 形式 2：`xxx: Boolean,` / `xxx: Number,` / `xxx: String,` 单行简写
  // 注意：与形式 1 的 key 不能重复（重复时形式 1 已经登记，跳过）
  const oneLineRe = /^\s{2}(\w+):\s*(Boolean|Number|String|Array|Object|Function)\s*,?\s*$/gm;
  while ((m = oneLineRe.exec(text)) !== null) {
    const name = m[1];
    if (name.startsWith('on') && /^on[A-Z]/.test(name)) continue;
    if (name in result) continue;
    result[name] = { default: undefined, type: m[2] };
  }
  return result;
}

/** 从 uniapp-x .types.ts 抽出 props 列表（以 interface InputProps 为锚） */
export function extractTargetProps(typesFilePath) {
  const text = fs.readFileSync(typesFilePath, 'utf8');
  const result = {};

  // 找到 export interface XxxProps {
  const ifaceMatch = text.match(/export\s+interface\s+\w*Props\s*\{([\s\S]*?)\n\}/);
  if (!ifaceMatch) return result;

  const body = ifaceMatch[1];
  // 按行扫，每行形如 `  xxx?: Type;` 或 `xxx: Type;`
  const lineRe = /^\s+(\w+)\??:\s*([^;]+);/gm;
  let m;
  while ((m = lineRe.exec(body)) !== null) {
    const name = m[1];
    result[name] = { type: m[2].trim() };
  }
  return result;
}

/** 对比两边的 props，输出 missing / extra / unsync */
export function diffProps(baseline, target) {
  const missing = []; // baseline 有，target 没有
  const extra = []; // target 有，baseline 没有

  for (const k of Object.keys(baseline)) {
    if (!(k in target)) missing.push({ name: k, ...baseline[k] });
  }
  for (const k of Object.keys(target)) {
    // value/modelValue 是 v-model 等价对，不视为多余
    if (k === 'modelValue' && 'value' in baseline) continue;
    if (k === 'customClass') continue; // uvue 端常加，baseline 没有但合理
    if (!(k in baseline)) extra.push({ name: k, ...target[k] });
  }

  return {
    missing,
    extra,
    baselineCount: Object.keys(baseline).length,
    targetCount: Object.keys(target).length,
  };
}

/** 一站式 audit：传组件 manifest 即可 */
export function auditComponent(component) {
  const baselineProps = extractBaselineProps(
    path.join(component.baseline.sourceDir, component.baseline.propsFile),
  );
  const targetProps = extractTargetProps(
    path.join(component.target.sourceDir, component.target.typesFile),
  );
  const diff = diffProps(baselineProps, targetProps);
  return { baselineProps, targetProps, ...diff };
}
