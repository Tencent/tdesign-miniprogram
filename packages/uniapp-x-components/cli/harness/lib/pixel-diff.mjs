/**
 * 像素级 diff
 *
 * 用 pixelmatch 计算两图差异比，并把 diff 图也存盘。
 * 如果两图尺寸不一致，按较小尺寸裁剪后再比（保留 baseline 主体，左上对齐）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { PIXEL_THRESHOLD } from '../config.mjs';

/**
 * @param {string} baselineFile
 * @param {string} targetFile
 * @param {string} outDiffFile
 * @returns {Promise<{
 *   diffPixels: number;
 *   totalPixels: number;
 *   diffRatio: number;
 *   width: number;
 *   height: number;
 *   ok: boolean;
 *   error?: string;
 * }>}
 */
export async function diffPair(baselineFile, targetFile, outDiffFile) {
  try {
    if (!fs.existsSync(baselineFile) || !fs.existsSync(targetFile)) {
      return {
        ok: false,
        error: 'missing input files',
        diffPixels: 0,
        totalPixels: 0,
        diffRatio: 1,
        width: 0,
        height: 0,
      };
    }

    const baselinePng = PNG.sync.read(fs.readFileSync(baselineFile));
    const targetPng = PNG.sync.read(fs.readFileSync(targetFile));

    const w = Math.min(baselinePng.width, targetPng.width);
    const h = Math.min(baselinePng.height, targetPng.height);

    const a = cropToSize(baselinePng, w, h);
    const b = cropToSize(targetPng, w, h);
    const diff = new PNG({ width: w, height: h });

    const diffPixels = pixelmatch(a.data, b.data, diff.data, w, h, {
      threshold: PIXEL_THRESHOLD,
      includeAA: false,
    });

    await fs.promises.mkdir(path.dirname(outDiffFile), { recursive: true });
    fs.writeFileSync(outDiffFile, PNG.sync.write(diff));

    const totalPixels = w * h;
    return {
      ok: true,
      diffPixels,
      totalPixels,
      diffRatio: totalPixels === 0 ? 1 : diffPixels / totalPixels,
      width: w,
      height: h,
    };
  } catch (err) {
    return {
      ok: false,
      error: err.message,
      diffPixels: 0,
      totalPixels: 0,
      diffRatio: 1,
      width: 0,
      height: 0,
    };
  }
}

function cropToSize(png, w, h) {
  if (png.width === w && png.height === h) return png;
  const cropped = new PNG({ width: w, height: h });
  PNG.bitblt(png, cropped, 0, 0, w, h, 0, 0);
  return cropped;
}
