#!/usr/bin/env node
/**
 * harness CLI
 *
 * 用法：
 *   node run.mjs audit <comp>           # 仅审计 props + 视觉 diff，不改代码
 *   node run.mjs fix   <comp> [--rounds 3] [--dry-run]
 *                                         # 闭环：截图 → diff → LLM → patch → 截图
 *   node run.mjs screenshot <comp>      # 仅截图（双端）
 *   node run.mjs --help
 *
 * 例：
 *   node run.mjs audit t-input
 *   node run.mjs fix t-input --rounds 3
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { config as loadEnv } from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
loadEnv({ path: path.join(__dirname, '.env') });

import {
  COMPONENTS,
  RUNS_DIR,
  VISUAL_BUDGET,
  DEFAULT_MAX_ROUNDS,
  FIX_ALLOWED_FILES,
} from './config.mjs';
import { auditComponent } from './lib/audit-props.mjs';
import { captureComponent } from './lib/screenshot.mjs';
import { diffPair } from './lib/pixel-diff.mjs';
import { startKnotProxy } from './lib/knot-proxy.mjs';
import { makeClient, imageUrl, parseFilePatches } from './lib/llm.mjs';
import { applyPatches } from './lib/patch-apply.mjs';
import { uploadFile } from './lib/cos-upload.mjs';

// ----------- arg parse -----------
function parseArgs(argv) {
  const args = { positional: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') args.flags.help = true;
    else if (a === '--dry-run') args.flags.dryRun = true;
    else if (a === '--rounds') args.flags.rounds = Number(argv[++i]);
    else if (a === '--max-cases') args.flags.maxCases = Number(argv[++i]);
    else if (a.startsWith('--')) args.flags[a.slice(2)] = argv[++i] ?? true;
    else args.positional.push(a);
  }
  return args;
}

function printHelp() {
  console.log(`harness — TDesign UniApp X 视觉对齐 CLI

Usage:
  node run.mjs audit <comp>
  node run.mjs screenshot <comp>
  node run.mjs fix <comp> [--rounds 3] [--dry-run] [--max-cases N]

Components: ${Object.keys(COMPONENTS).join(', ')}

Env (in cli/harness/.env):
  KNOT_AGENT_ID / KNOT_API_TOKEN / KNOT_API_USER / KNOT_MODEL
  LOCAL_H5_BASE / REMOTE_BASELINE_BASE
`);
}

// ----------- helpers -----------
function ts() {
  const d = new Date();
  return d.toISOString().replace(/[:T]/g, '-').replace(/\..+/, '');
}
function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}
function tryRead(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return '';
  }
}

function getComponent(name) {
  const c = COMPONENTS[name];
  if (!c) throw new Error(`unknown component: ${name}; available: ${Object.keys(COMPONENTS).join(', ')}`);
  return c;
}

// ----------- audit -----------
async function cmdAudit(compName) {
  const component = getComponent(compName);
  console.log(`\n[audit] ${component.name}\n`);

  const audit = auditComponent(component);
  console.log(`📋 props:  baseline=${audit.baselineCount}  target=${audit.targetCount}`);
  console.log(`   missing (${audit.missing.length}): ${audit.missing.map((p) => p.name).join(', ') || '-'}`);
  console.log(`   extra   (${audit.extra.length}): ${audit.extra.map((p) => p.name).join(', ') || '-'}`);

  // 视觉对比
  const runDir = path.join(RUNS_DIR, component.name, ts());
  ensureDir(runDir);
  const remoteBase = process.env.REMOTE_BASELINE_BASE;
  const localBase = process.env.LOCAL_H5_BASE;
  if (!remoteBase || !localBase) {
    console.warn('⚠️  跳过截图：未设置 REMOTE_BASELINE_BASE / LOCAL_H5_BASE');
    return audit;
  }

  console.log(`\n📸 截图（baseline=${remoteBase} / target=${localBase}）...`);
  const shots = await captureComponent({ component, remoteBase, localBase, outDir: runDir });

  const diffs = [];
  for (const s of shots) {
    if (!s.baseline.ok || !s.target.ok) {
      console.log(`   ❌ [${s.case}] capture failed: baseline=${s.baseline.error || 'ok'} target=${s.target.error || 'ok'}`);
      continue;
    }
    const diffFile = path.join(runDir, 'diff', `${s.case}.png`);
    const r = await diffPair(s.baseline.file, s.target.file, diffFile);
    diffs.push({ case: s.case, ...r, diffFile });
    console.log(`   ${r.diffRatio < VISUAL_BUDGET ? '✅' : '⚠️ '} [${s.case}] diffRatio=${(r.diffRatio * 100).toFixed(2)}% (${r.diffPixels}/${r.totalPixels})`);
  }

  // 报告落盘
  const report = { component: component.name, when: new Date().toISOString(), audit, diffs };
  fs.writeFileSync(path.join(runDir, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\n📄 report: ${path.join(runDir, 'report.json')}`);
  return { runDir, report };
}

// ----------- screenshot only -----------
async function cmdScreenshot(compName) {
  const component = getComponent(compName);
  const runDir = path.join(RUNS_DIR, component.name, ts());
  ensureDir(runDir);
  const remoteBase = process.env.REMOTE_BASELINE_BASE;
  const localBase = process.env.LOCAL_H5_BASE;
  if (!remoteBase || !localBase) throw new Error('请在 .env 设置 LOCAL_H5_BASE 和 REMOTE_BASELINE_BASE');
  console.log(`📸 ${component.name}: baseline=${remoteBase} target=${localBase}`);
  const shots = await captureComponent({ component, remoteBase, localBase, outDir: runDir });
  for (const s of shots) {
    console.log(
      `   ${s.baseline.ok && s.target.ok ? '✅' : '❌'} ${s.case}  baseline=${s.baseline.ok ? 'ok' : s.baseline.error} target=${s.target.ok ? 'ok' : s.target.error}`,
    );
  }
  console.log(`\n📁 ${runDir}`);
}

// ----------- fix -----------
async function cmdFix(compName, { rounds = DEFAULT_MAX_ROUNDS, dryRun = false, maxCases } = {}) {
  const component = getComponent(compName);
  const runDir = path.join(RUNS_DIR, component.name, ts());
  ensureDir(runDir);

  const remoteBase = process.env.REMOTE_BASELINE_BASE;
  const localBase = process.env.LOCAL_H5_BASE;
  if (!remoteBase || !localBase) throw new Error('请在 .env 设置 LOCAL_H5_BASE 和 REMOTE_BASELINE_BASE');

  // 1. 启 knot proxy
  const port = Number(process.env.KNOT_PROXY_PORT) || 3939;
  const proxy = await startKnotProxy({
    env: {
      KNOT_AGENT_ID: process.env.KNOT_AGENT_ID,
      KNOT_API_TOKEN: process.env.KNOT_API_TOKEN,
      KNOT_API_USER: process.env.KNOT_API_USER,
      KNOT_MODEL: process.env.KNOT_MODEL,
      COS_SECRET_ID: process.env.COS_SECRET_ID,
      COS_SECRET_KEY: process.env.COS_SECRET_KEY,
    },
    port,
    verbose: false,
  });
  const llm = makeClient({ baseUrl: proxy.baseUrl, model: process.env.KNOT_MODEL || 'kimi-k2.6' });

  // 2. 读 prompts
  const sysPrompt = fs.readFileSync(path.join(__dirname, 'prompts/system.md'), 'utf8');
  const fixTpl = fs.readFileSync(path.join(__dirname, 'prompts/visual-fix.md'), 'utf8');

  let bestRatio = 1;
  for (let round = 1; round <= rounds; round++) {
    console.log(`\n========== Round ${round}/${rounds} ==========`);
    const roundDir = path.join(runDir, `round-${round}`);
    ensureDir(roundDir);

    // a. audit + 截图 + diff
    const audit = auditComponent(component);
    console.log(`📋 props missing=${audit.missing.length} extra=${audit.extra.length}`);

    const shots = await captureComponent({ component, remoteBase, localBase, outDir: roundDir });
    let casesToConsider = shots.filter((s) => s.baseline.ok && s.target.ok);
    if (maxCases) casesToConsider = casesToConsider.slice(0, maxCases);

    const diffs = [];
    for (const s of casesToConsider) {
      const diffFile = path.join(roundDir, 'diff', `${s.case}.png`);
      const r = await diffPair(s.baseline.file, s.target.file, diffFile);
      diffs.push({ ...s, diff: { ...r, diffFile } });
    }
    diffs.sort((a, b) => b.diff.diffRatio - a.diff.diffRatio);
    const worst = diffs[0];
    console.log(`📐 worst case: [${worst.case}] diffRatio=${(worst.diff.diffRatio * 100).toFixed(2)}%`);
    bestRatio = Math.min(bestRatio, worst.diff.diffRatio);

    if (worst.diff.diffRatio < VISUAL_BUDGET && audit.missing.length === 0) {
      console.log(`🎉 视觉与 API 都已对齐，提前结束`);
      break;
    }

    // b. 准备 prompt 输入（用最差 case 喂图）
    const targetDir = component.target.sourceDir;
    const baselineDir = component.baseline.sourceDir;
    const compName = component.name;
    const baselinePropsFile = component.baseline.propsFile;

    // 关键：先把 3 张图上传到 COS，拿到 URL 后再嵌进 prompt（保证 prompt.md 直接可预览）
    console.log(`☁️  上传 3 张截图到 COS...`);
    const [baselineUrl, targetUrl, diffUrl] = await Promise.all([
      uploadFile(worst.baseline.file, { tag: `${compName}-baseline-r${round}` }),
      uploadFile(worst.target.file, { tag: `${compName}-target-r${round}` }),
      uploadFile(worst.diff.diffFile, { tag: `${compName}-diff-r${round}` }),
    ]);
    console.log(`   baseline: ${baselineUrl}`);
    console.log(`   target  : ${targetUrl}`);
    console.log(`   diff    : ${diffUrl}`);

    const filled = fixTpl
      .replace(/{{COMP_NAME}}/g, compName)
      .replace(/{{BASELINE_COUNT}}/g, String(audit.baselineCount))
      .replace(/{{TARGET_COUNT}}/g, String(audit.targetCount))
      .replace(/{{MISSING_PROPS_JSON}}/g, JSON.stringify(audit.missing, null, 2))
      .replace(/{{EXTRA_PROPS_JSON}}/g, JSON.stringify(audit.extra, null, 2))
      .replace(/{{DIFF_RATIO}}/g, (worst.diff.diffRatio * 100).toFixed(2) + '%')
      .replace(/{{TARGET_TYPES}}/g, tryRead(path.join(targetDir, component.target.typesFile)))
      .replace(/{{TARGET_VARIANTS}}/g, tryRead(path.join(targetDir, component.target.variantsFile)))
      .replace(/{{TARGET_UVUE}}/g, tryRead(path.join(targetDir, component.target.uvueFile)))
      .replace(/{{TARGET_THEME}}/g, tryRead(path.join(targetDir, component.target.themeFile)))
      .replace(/{{BASELINE_PROPS_FILE}}/g, baselinePropsFile)
      .replace(/{{BASELINE_PROPS}}/g, tryRead(path.join(baselineDir, baselinePropsFile)))
      .replace(/{{BASELINE_IMG_URL}}/g, baselineUrl)
      .replace(/{{TARGET_IMG_URL}}/g, targetUrl)
      .replace(/{{DIFF_IMG_URL}}/g, diffUrl);

    const messages = [
      { role: 'system', content: sysPrompt },
      {
        role: 'user',
        content: [
          { type: 'text', text: filled },
          imageUrl(baselineUrl),
          imageUrl(targetUrl),
          imageUrl(diffUrl),
        ],
      },
    ];

    // 落盘 prompt（含 markdown 图片，可在编辑器直接预览）
    fs.writeFileSync(path.join(roundDir, 'prompt.md'), filled);
    fs.writeFileSync(
      path.join(roundDir, 'image-urls.json'),
      JSON.stringify({ baselineUrl, targetUrl, diffUrl }, null, 2),
    );

    // c. 调 LLM
    console.log(`🤖 LLM round ${round}...`);
    let reply;
    try {
      reply = await llm.chat(messages);
    } catch (err) {
      console.error('LLM 失败:', err.message);
      break;
    }
    fs.writeFileSync(path.join(roundDir, 'response.txt'), reply || '');

    const patches = parseFilePatches(reply);
    console.log(`📦 解析到 ${patches.length} 个文件 patch: ${patches.map((p) => p.path).join(', ')}`);
    if (patches.length === 0) {
      console.warn('⚠️  LLM 未输出可解析的 FILE 块，跳过本轮');
      continue;
    }

    if (dryRun) {
      console.log('🚫 dry-run，不写入');
      break;
    }

    const result = applyPatches({
      component,
      patches,
      backupDir: path.join(roundDir, 'before'),
    });
    console.log(`✍️  applied ${result.applied.length}, rejected ${result.rejected.length}`);
    if (result.rejected.length) console.log('   rejected:', result.rejected);

    // 等用户的 HBuilderX h5 自动重编译（HMR），保险起见睡 3s
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log(`\n🏁 best diffRatio: ${(bestRatio * 100).toFixed(2)}%`);
  console.log(`📁 ${runDir}`);
}

// ----------- main -----------
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.flags.help || args.positional.length === 0) {
    printHelp();
    return;
  }
  const cmd = args.positional[0];
  const compName = args.positional[1];

  if (cmd === 'audit') return cmdAudit(compName);
  if (cmd === 'screenshot') return cmdScreenshot(compName);
  if (cmd === 'fix')
    return cmdFix(compName, {
      rounds: args.flags.rounds || DEFAULT_MAX_ROUNDS,
      dryRun: !!args.flags.dryRun,
      maxCases: args.flags.maxCases,
    });

  printHelp();
  process.exit(1);
}

main().catch((err) => {
  console.error('💥', err);
  process.exit(1);
});
