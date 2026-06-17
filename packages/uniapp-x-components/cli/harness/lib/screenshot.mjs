/**
 * Playwright 截图模块
 *
 * 同时打开 baseline (uniapp 官方站) 和 target (本地 H5)，
 * 在统一视口下截图各 case 子页，存到 runs/<comp>/<timestamp>/{baseline,target}/<case>.png
 */
import path from 'node:path';
import fs from 'node:fs';
import { chromium } from 'playwright';
import { VIEWPORT } from '../config.mjs';

/**
 * @param {object} options
 * @param {string} options.url            目标 URL
 * @param {string} options.outFile        截图保存路径
 * @param {number} [options.timeout=15000]
 * @returns {Promise<{ ok: boolean; size?: number; error?: string }>}
 */
async function captureOne(browser, { url, outFile, timeout = 15000 }) {
  const ctx = await browser.newContext({
    viewport: { width: VIEWPORT.width, height: VIEWPORT.height },
    deviceScaleFactor: VIEWPORT.deviceScaleFactor,
    isMobile: VIEWPORT.isMobile,
    hasTouch: VIEWPORT.hasTouch,
    userAgent: VIEWPORT.userAgent,
    // 关闭动画，避免抖动
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout });
    // 给 uniapp/uvue 余量等动态渲染（弹窗/输入框就位）
    await page.waitForTimeout(800);
    await fs.promises.mkdir(path.dirname(outFile), { recursive: true });
    await page.screenshot({ path: outFile, fullPage: true });
    const size = (await fs.promises.stat(outFile)).size;
    return { ok: true, size };
  } catch (err) {
    return { ok: false, error: err.message };
  } finally {
    await ctx.close();
  }
}

/**
 * 批量截图：baseline + target 的总览页（单页对比，最稳）
 * 子 case 需要的话用户后续可以展开（uniapp 站的子 case 在总览页内通过锚点访问）
 */
export async function captureComponent({
  component,
  remoteBase,
  localBase,
  outDir,
}) {
  const browser = await chromium.launch({ headless: true });
  try {
    // 只比对总览页
    const cases = [
      {
        name: `${component.name}-overview`,
        baselineUrl: remoteBase + component.baseline.demoPath,
        targetUrl: localBase + component.target.demoPath,
      },
    ];

    const tasks = [];
    for (const c of cases) {
      const baselineFile = path.join(outDir, 'baseline', `${c.name}.png`);
      const targetFile = path.join(outDir, 'target', `${c.name}.png`);

      const [b, t] = await Promise.all([
        captureOne(browser, { url: c.baselineUrl, outFile: baselineFile }),
        captureOne(browser, { url: c.targetUrl, outFile: targetFile }),
      ]);

      tasks.push({
        case: c.name,
        baseline: { url: c.baselineUrl, file: baselineFile, ...b },
        target: { url: c.targetUrl, file: targetFile, ...t },
      });
    }

    return tasks;
  } finally {
    await browser.close();
  }
}

/**
 * 全页截图（fullPage：超过视口的部分也截下来）
 * 用于诊断：当只截视口时差异主要在视口下方
 */
export async function captureFullPage({ url, outFile, timeout = 20000 }) {
  const browser = await chromium.launch({ headless: true });
  try {
    const ctx = await browser.newContext({
      viewport: { width: VIEWPORT.width, height: VIEWPORT.height },
      deviceScaleFactor: VIEWPORT.deviceScaleFactor,
      isMobile: VIEWPORT.isMobile,
      hasTouch: VIEWPORT.hasTouch,
      userAgent: VIEWPORT.userAgent,
      reducedMotion: 'reduce',
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout });
    await page.waitForTimeout(800);
    await fs.promises.mkdir(path.dirname(outFile), { recursive: true });
    await page.screenshot({ path: outFile, fullPage: true });
    await ctx.close();
  } finally {
    await browser.close();
  }
}
