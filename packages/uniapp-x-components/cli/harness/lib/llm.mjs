/**
 * LLM 调用封装：openai SDK + Knot proxy
 *
 * - chat: 普通文本对话
 * - chatWithImages: 多模态，本地 PNG 文件路径自动转 base64 data URL（proxy 会上传 COS）
 * - parseFilePatches: 把 LLM 返回的"全文件替换"格式（推荐 prompt 中要求该格式）解析为 patch 列表
 *
 * 我们不要求 LLM 输出 unified diff，因为 LLM 写 unified diff 容易出错且难以应用。
 * 改为要求 LLM 输出每个被改动的文件的"完整新内容"，包在固定格式 fence 里：
 *
 *   <<<FILE path="t-input.theme.less">>>
 *   ...完整文件内容...
 *   <<<END>>>
 *
 * 这样我们直接 fs.writeFile，最稳。
 */
import fs from 'node:fs';
import OpenAI from 'openai';
export function makeClient({ baseUrl, apiKey = 'any', model }) {
  const client = new OpenAI({
    baseURL: baseUrl,
    apiKey,
  });
  return {
    raw: client,
    model,
    async chat(messages, { temperature = 0 } = {}) {
      const r = await client.chat.completions.create({
        model,
        temperature,
        messages,
      });
      return r.choices?.[0]?.message?.content ?? '';
    },
  };
}

/**
 * 多模态 message 中的图片字段：直接传 COS URL（不再 base64）
 *
 * 这样的好处：
 *  1. prompt 体积小（不再带 base64）
 *  2. prompt.md 落盘后用 markdown 即可预览图片
 *  3. LLM 看到的是同一张图，没有差异
 */
export function imageUrl(url) {
  return {
    type: 'image_url',
    image_url: { url },
  };
}

/**
 * 解析 LLM 输出里的 FILE/END 块，返回 [{ path, content }]
 */
export function parseFilePatches(text) {
  const out = [];
  const re = /<<<FILE\s+path=["']([^"']+)["']>>>\n([\s\S]*?)\n<<<END>>>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ path: m[1].trim(), content: m[2] });
  }
  return out;
}
