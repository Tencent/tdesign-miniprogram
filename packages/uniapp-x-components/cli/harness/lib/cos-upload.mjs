/**
 * 截图 → 腾讯云 COS 上传 → 返回公网可访问 URL
 *
 * 设计：
 *  - 直接用 cos-nodejs-sdk-v5（公开 npm，无内网依赖）
 *  - 凭据从 .env 读：COS_SECRET_ID / COS_SECRET_KEY
 *  - bucket 默认 image-1251917893（公有读；与 e2e-knot-proxy 一致）
 *  - region 默认 ap-guangzhou
 *  - key prefix 默认 tdesign-uniapp-x-harness/
 *
 * 用法：
 *  const url = await uploadFile('/path/to/shot.png')
 *  // → https://image-1251917893.cos.ap-guangzhou.myqcloud.com/...
 */
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const DEFAULT_BUCKET = 'image-1251917893';
const DEFAULT_REGION = 'ap-guangzhou';
const DEFAULT_PREFIX = 'tdesign-uniapp-x-harness/';

let _cos = null;

function getClient() {
  if (_cos) return _cos;
  const SecretId = process.env.COS_SECRET_ID;
  const SecretKey = process.env.COS_SECRET_KEY;
  if (!SecretId || !SecretKey) {
    throw new Error(
      '[cos] 缺少 COS 凭据。请在 cli/harness/.env 配置：\n' +
        '  COS_SECRET_ID=xxx\n  COS_SECRET_KEY=xxx\n' +
        '（不配则截图无法上传 CDN，LLM 看不到图）',
    );
  }
  // 动态 require 避免 dotenv 还没 load 时就抛错
  const COSCtor = require('cos-nodejs-sdk-v5');
  _cos = new COSCtor({ SecretId, SecretKey });
  return _cos;
}

function getConfig() {
  return {
    Bucket: process.env.COS_BUCKET || DEFAULT_BUCKET,
    Region: process.env.COS_REGION || DEFAULT_REGION,
    KeyPrefix: (process.env.COS_KEY_PREFIX || DEFAULT_PREFIX).replace(/^\/+/, ''),
  };
}

/**
 * 上传一个本地文件，返回公网 URL
 * @param {string} filePath  本地文件绝对路径
 * @param {object} [opts]
 * @param {string} [opts.tag]  附加在文件名前的语义标签，便于日后翻 COS（如 "baseline-t-input"）
 * @returns {Promise<string>}
 */
export async function uploadFile(filePath, opts = {}) {
  const cos = getClient();
  const cfg = getConfig();
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) throw new Error(`[cos] not a file: ${filePath}`);

  const ext = (path.extname(filePath).replace(/^\./, '') || 'png').toLowerCase();
  const date = new Date().toISOString().slice(0, 10);
  const ts = Date.now();
  const rand = randomUUID().slice(0, 8);
  const safeTag = (opts.tag || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40);
  const filename = safeTag ? `${ts}-${rand}-${safeTag}.${ext}` : `${ts}-${rand}.${ext}`;
  const Key = `${cfg.KeyPrefix}${date}/${filename}`.replace(/\/{2,}/g, '/');

  const buffer = fs.readFileSync(filePath);
  await new Promise((resolve, reject) => {
    cos.putObject(
      {
        Bucket: cfg.Bucket,
        Region: cfg.Region,
        Key,
        Body: buffer,
        ContentType: ext === 'png' ? 'image/png' : 'application/octet-stream',
      },
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      },
    );
  });

  // 公有读桶可直接拼 URL（与 e2e-knot-proxy 默认行为一致）
  const encodedKey = Key.split('/').map(encodeURIComponent).join('/');
  const url = `https://${cfg.Bucket}.cos.${cfg.Region}.myqcloud.com/${encodedKey}`;
  return url;
}

/** 批量上传，按入参顺序返回 URL 数组 */
export async function uploadFiles(items) {
  return Promise.all(
    items.map((it) =>
      typeof it === 'string'
        ? uploadFile(it)
        : uploadFile(it.filePath, { tag: it.tag }),
    ),
  );
}
