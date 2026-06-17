/**
 * patch 应用器
 *
 * 接收 LLM 解析出的 [{ path, content }]，校验：
 *  1. path 必须在白名单 FIX_ALLOWED_FILES 内
 *  2. 落地到 component.target.sourceDir 下
 *  3. 写入前先备份原文件到 runs/<...>/before/<path>
 */
import fs from 'node:fs';
import path from 'node:path';
import { FIX_ALLOWED_FILES } from '../config.mjs';

export function applyPatches({ component, patches, backupDir }) {
  const allowed = new Set(FIX_ALLOWED_FILES(component.name));
  const targetDir = component.target.sourceDir;

  const applied = [];
  const rejected = [];

  for (const p of patches) {
    const rel = p.path;
    if (!allowed.has(rel)) {
      rejected.push({ path: rel, reason: `not in whitelist: ${[...allowed].join(', ')}` });
      continue;
    }
    const abs = path.join(targetDir, rel);
    if (!abs.startsWith(targetDir)) {
      rejected.push({ path: rel, reason: 'path escape' });
      continue;
    }

    // 备份
    if (fs.existsSync(abs)) {
      const bk = path.join(backupDir, rel);
      fs.mkdirSync(path.dirname(bk), { recursive: true });
      fs.copyFileSync(abs, bk);
    }

    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, p.content, 'utf8');
    applied.push({ path: rel, abs, bytes: p.content.length });
  }

  return { applied, rejected };
}
