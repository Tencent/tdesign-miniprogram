#!/usr/bin/env node
/**
 * audit-props: 对比 baseline ↔ target 的 props 差异，输出 markdown 报告，不改文件。
 *
 * 用法：
 *   node cli/sync/audit-props.mjs t-input
 *   node cli/sync/audit-props.mjs --all
 *
 * 输出：
 *   stdout 打印简表
 *   cli/sync/.reports/<comp>-props.md 写一份完整 markdown
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

const REPORTS_DIR = path.resolve(UNIAPP_X_ROOT, 'cli/sync/.reports');

/** target 私有字段（不参与 baseline 对齐）*/
const TARGET_PRIVATE_FIELDS = new Set([
  'modelValue',  // vue v-model 标准字段，baseline 用 value
  'customClass', // target 自有透传字段
]);

/** baseline 中要忽略的字段（暂不计入 missing）*/
const BASELINE_IGNORED = new Set([]);

function auditOne(targetName) {
  const paths = resolveComponentPaths(targetName);
  const missingFiles = checkComponentExists(paths);
  if (missingFiles.length > 0) {
    return {
      targetName,
      ok: false,
      reason: `缺少必要文件:\n  - ${missingFiles.join('\n  - ')}`,
    };
  }

  const baseline = loadBaseline({
    propsPath: paths.baseline.props,
    typePath: paths.baseline.type,
  });
  const targetTypes = parseTargetTypes(paths.target.types);
  const targetDefineProps = parseTargetUvueDefineProps(paths.target.uvue);

  const missingInTypes = []; // baseline 有，target types.ts 没有
  const extraInTypes = []; // target types.ts 有，baseline 没有（可能是 target 私有字段）
  const missingInUvue = []; // baseline 有，target uvue defineProps 没有
  const eventMissing = []; // baseline 中 onXxx event，target 是否暴露了对应 emit（这里只列出，需手动确认）

  for (const [name, prop] of baseline) {
    if (BASELINE_IGNORED.has(name)) continue;
    if (prop.category === 'event') {
      // event 是 onBlur → blur，target 通常用 emit('blur') 暴露，audit 中只列出
      eventMissing.push(prop);
      continue;
    }
    if (!targetTypes.has(name)) {
      missingInTypes.push(prop);
    }
    if (!targetDefineProps.has(name)) {
      missingInUvue.push(prop);
    }
  }
  for (const [name] of targetTypes) {
    if (TARGET_PRIVATE_FIELDS.has(name)) continue;
    if (!baseline.has(name)) extraInTypes.push(name);
  }

  return {
    targetName,
    ok: true,
    baselinePropCount: [...baseline.values()].filter((p) => p.category === 'prop').length,
    baselineEventCount: [...baseline.values()].filter((p) => p.category === 'event').length,
    targetTypesCount: targetTypes.size,
    targetUvueCount: targetDefineProps.size,
    missingInTypes,
    extraInTypes,
    missingInUvue,
    eventMissing,
    paths,
  };
}

function formatPropLine(p) {
  const types = p.typeNames.join(' | ');
  const def = p.defaultExpr != null ? ` = ${p.defaultExpr}` : '';
  const desc = p.description ? ` — ${p.description.slice(0, 60)}${p.description.length > 60 ? '…' : ''}` : '';
  return `\`${p.name}\`: ${types}${def}${desc}`;
}

function renderMarkdown(audit) {
  const lines = [];
  lines.push(`# Props Audit: ${audit.targetName}`);
  lines.push('');
  lines.push(`> baseline = \`packages/uniapp-components/${audit.paths.baselineName}\`  `);
  lines.push(`> target = \`packages/uniapp-x-components/src/components/${audit.targetName}\``);
  lines.push('');
  lines.push('## 概览');
  lines.push('');
  lines.push(`- baseline props 数量：${audit.baselinePropCount}`);
  lines.push(`- baseline events 数量：${audit.baselineEventCount}`);
  lines.push(`- target types.ts 字段数：${audit.targetTypesCount}`);
  lines.push(`- target uvue defineProps 字段数：${audit.targetUvueCount}`);
  lines.push('');

  lines.push('## ❌ baseline 有，target types.ts 缺失');
  lines.push('');
  if (audit.missingInTypes.length === 0) lines.push('（无）');
  else {
    for (const p of audit.missingInTypes) lines.push(`- ${formatPropLine(p)}`);
  }
  lines.push('');

  lines.push('## ❌ baseline 有，target uvue defineProps 缺失');
  lines.push('');
  if (audit.missingInUvue.length === 0) lines.push('（无）');
  else {
    for (const p of audit.missingInUvue) lines.push(`- ${formatPropLine(p)}`);
  }
  lines.push('');

  lines.push('## ⚠️ target 有，baseline 没有的字段（可能是 target 私有/自创）');
  lines.push('');
  if (audit.extraInTypes.length === 0) lines.push('（无）');
  else {
    for (const name of audit.extraInTypes) lines.push(`- \`${name}\``);
  }
  lines.push('');

  lines.push('## 🔔 baseline 事件（请手动核对 target 是否 emit）');
  lines.push('');
  for (const p of audit.eventMissing) {
    const eventName = p.name.replace(/^on/, '').replace(/^[A-Z]/, (c) => c.toLowerCase());
    lines.push(`- baseline \`${p.name}\` ↔ target 应 emit \`${eventName}\`${p.description ? ` — ${p.description.slice(0, 80)}` : ''}`);
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
    console.error('用法: node cli/sync/audit-props.mjs <comp> | --all');
    process.exit(1);
  } else {
    targets = args.filter((a) => !a.startsWith('--'));
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  let totalMissing = 0;
  for (const t of targets) {
    const audit = auditOne(t);
    if (!audit.ok) {
      console.error(`[${t}] ${audit.reason}`);
      continue;
    }
    const md = renderMarkdown(audit);
    const out = path.join(REPORTS_DIR, `${t}-props.md`);
    fs.writeFileSync(out, md, 'utf8');
    const miss = audit.missingInTypes.length + audit.missingInUvue.length;
    totalMissing += miss;
    console.log(
      `[${t}] baseline ${audit.baselinePropCount}p+${audit.baselineEventCount}e | ` +
      `types ${audit.targetTypesCount} | uvue ${audit.targetUvueCount} | ` +
      `missingTypes ${audit.missingInTypes.length} | missingUvue ${audit.missingInUvue.length} | ` +
      `extra ${audit.extraInTypes.length}  →  ${path.relative(UNIAPP_X_ROOT, out)}`,
    );
  }
  if (totalMissing > 0) {
    console.log(`\n共发现 ${totalMissing} 处 props 缺失，详见 .reports/*.md`);
  } else {
    console.log('\n✅ 全部组件 props 已对齐');
  }
}

main();
