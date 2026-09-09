import { promises, readFileSync, statSync } from 'fs';
import path from 'path';

import grayMatter from 'gray-matter';

/**
 * 拆分 title：'Button 按钮' -> { title: 'Button', subtitle: '按钮' }
 */
function splitTitle(title) {
  const trimmed = (title || '').trim();
  const match = trimmed.match(/^(.+?)\s+(.+)$/);
  if (match) return { title: match[1].trim(), subtitle: match[2].trim() };
  return { title: trimmed, subtitle: '' };
}

/**
 * 移除站点专用说明块：渲染框架支持情况 / 版本提示 / Tips blockquote / 预览链接。
 * 通过 tag 计数处理嵌套元素，从而整块移除。
 */
function removeSiteBlocks(body) {
  const blockTags = ['div', 'blockquote'];
  let result = body;

  for (const tag of blockTags) {
    const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'g');
    let match;
    while ((match = openRe.exec(result))) {
      const openTag = match[0];
      const isTarget =
        (tag === 'div' &&
          /(background:\s*#ecf2fe|background-color:\s*#ecf2fe|background:\s*#d9e1ff|background-color:\s*#d9e1ff)/.test(
            openTag,
          )) ||
        (tag === 'blockquote' && /background-color:\s*#/.test(openTag)) ||
        /渲染框架支持情况|该组件于|Tips:|预览效果/.test(openTag);

      if (!isTarget) continue;

      let depth = 0;
      const tokenRe = new RegExp(`</?${tag}(?:\\s[^>]*)?>`, 'g');
      tokenRe.lastIndex = match.index;
      let token;
      while ((token = tokenRe.exec(result))) {
        if (token[0].startsWith(`</${tag}`)) {
          depth -= 1;
          if (depth === 0) {
            const end = token.index + token[0].length;
            result = result.slice(0, match.index) + result.slice(end);
            break;
          }
        } else {
          depth += 1;
        }
      }
      openRe.lastIndex = match.index;
    }
  }
  return result;
}

/**
 * 将站点专用的「在开发者工具中预览效果」链接转换为 Markdown 链接。
 */
function convertPreviewLink(body) {
  return body.replace(
    /<a\s+href="(https:\/\/developers\.weixin\.qq\.com\/s\/[^"]+)"[^>]*>[^<]*<\/a>/g,
    (_m, url) => `> [在微信开发者工具中预览效果](${url})`,
  );
}

/**
 * 将站点专用的 Tips blockquote（小程序调试提示）转换为 Markdown 引用块。
 */
function convertTipsBlock(body) {
  return body.replace(/<blockquote\b[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g, (_m, text) =>
    text
      .split(/<br\s*\/?>|\n/)
      .map((line) => line.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean)
      .map((line) => `> ${line}`)
      .join('\n'),
  );
}

/**
 * 将站点顶部的说明块（版本上线提示 / 渲染框架支持情况）转换为 Markdown 引用块。
 */
function convertHeaderNoticeBlocks(body) {
  const openRe = /<div\s+style="background:\s*#(?:ecf2fe|d9e1ff)[^"]*"[^>]*>/g;
  let result = body;
  let match;

  while ((match = openRe.exec(result))) {
    let depth = 0;
    const tokenRe = /<\/?div(?:\s[^>]*)?>/g;
    tokenRe.lastIndex = match.index;
    let token;
    let end = -1;
    while ((token = tokenRe.exec(result))) {
      if (token[0].startsWith('</div')) {
        depth -= 1;
        if (depth === 0) {
          end = token.index + token[0].length;
          break;
        }
      } else {
        depth += 1;
      }
    }
    if (end === -1) break;

    const inner = result.slice(match.index + match[0].length, end);
    const converted = [...inner.matchAll(/<div\b[^>]*>([\s\S]*?)<\/div>/g)]
      .map((m) =>
        m[1]
          .replace(/<[^>]+>/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
      )
      .filter(Boolean)
      .map((line) => `> ${line}`)
      .join('\n');
    result = result.slice(0, match.index) + converted + result.slice(end);
    openRe.lastIndex = match.index;
  }
  return result;
}

/**
 * 清理站点专用 HTML：转换为 Markdown 语义后，移除剩余站点专用 HTML 块。
 */
function cleanSiteHtml(body) {
  const converted = convertHeaderNoticeBlocks(convertTipsBlock(convertPreviewLink(body)));
  return removeSiteBlocks(converted).replace(
    /<a href="https:\/\/developers\.weixin\.qq\.com\/s\/[^"]*"[^>]*>[^<]*<\/a>/g,
    '',
  );
}

/**
 * 判断 demo 目录是否存在（同步）。
 */
function isDirectorySync(p) {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/**
 * 读取 demo 目录下的 index.vue 源码，输出 Vue SFC 代码块。
 */
function readDemoCode(componentDir, demoName) {
  const demoDir = path.join(componentDir, '_example', demoName);
  const files = readFileSync(path.join(demoDir, 'index.vue'), 'utf-8');
  if (!files.trim()) return '';
  return ['```vue', files, '```'].join('\n');
}

/**
 * 将 README 解析为组件文档。
 */
async function parseComponentReadme(componentDir) {
  const readmePath = path.join(componentDir, 'README.md');
  const raw = await promises.readFile(readmePath, 'utf-8');
  const { data, content } = grayMatter(raw);
  const { title: rawTitle, description, spline } = data;

  if (!rawTitle) return null;

  const slug = path.basename(componentDir);
  const { title: enTitle, subtitle } = splitTitle(rawTitle);

  const body = cleanSiteHtml(
    content.replace(/\{\{\s*([a-z0-9-]+)\s*\}\}/g, (match, demoName) => {
      // 仅当存在 _example/<name> 目录时才视为 demo 占位符，避免误伤模板绑定（如 {{ index }} / {{ visible }}）
      if (!isDirectorySync(path.join(componentDir, '_example', demoName))) return match;
      return readDemoCode(componentDir, demoName);
    }),
  );

  return {
    slug,
    title: enTitle,
    subtitle,
    description: description || '',
    spline: spline || '',
    component: enTitle,
    body,
  };
}

/**
 * 渲染单篇组件文档的 Markdown。
 */
function renderComponentMarkdown(doc) {
  const fm = [
    '---',
    `title: ${doc.title}`,
    `subtitle: ${doc.subtitle}`,
    `description: ${doc.description}`,
    `spline: ${doc.spline}`,
    `component: ${doc.component}`,
    '---',
    '',
  ].join('\n');
  return `${fm}${doc.body.trim()}\n`;
}

/**
 * 渲染 llms.txt 索引。
 */
function renderLlmsTxt(docs, siteTitle, siteDescription) {
  const lines = [`# ${siteTitle}`, '', `> ${siteDescription}`, ''];
  docs.forEach((doc) => {
    const titleText = doc.subtitle ? `${doc.title} ${doc.subtitle}` : doc.title;
    lines.push(`- [${titleText}](./llms/${doc.slug}.md)：${doc.description}`);
  });
  return `${lines.join('\n')}\n`;
}

/**
 * vite 插件：在站点构建时，为每个组件生成面向 LLM 的 Markdown 文档。
 */
export default function generateLlmsPlugin(options = {}) {
  const {
    componentsDir = '../../uniapp-components',
    siteTitle = 'TDesign UniApp',
    siteDescription = 'TDesign UniApp 端组件库的 LLM 友好文档索引。',
  } = options;
  let config;
  return {
    name: 'generate-llms',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle(error) {
      if (error) return;
      if (!config.env.PROD && config.env.MODE !== 'preview') return;

      // site 根目录为 config.root（vite.config.ts 中已设置），组件目录相对其解析
      const siteRoot = config.root;
      const componentsRoot = path.resolve(siteRoot, componentsDir);
      // 产物输出目录：从 config.build.outDir 推导，避免硬编码 dist
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');
      const llmsDir = path.join(outputDir, 'llms');

      const allDirs = await promises.readdir(componentsRoot);
      const docs = [];

      for (const dir of allDirs) {
        const componentDir = path.join(componentsRoot, dir);
        try {
          const stat = await promises.stat(componentDir).catch(() => null);
          if (!stat || !stat.isDirectory()) continue;

          const hasReadme = await promises
            .access(path.join(componentDir, 'README.md'))
            .then(() => true)
            .catch(() => false);
          if (!hasReadme) continue;

          const doc = await parseComponentReadme(componentDir);
          if (doc) docs.push(doc);
        } catch (err) {
          // 单个组件解析失败仅告警，不中断整体生成
          console.warn(`[generate-llms] 解析组件 ${dir} 失败，已跳过：`, err);
        }
      }

      docs.sort((a, b) => a.slug.localeCompare(b.slug));

      await promises.mkdir(llmsDir, { recursive: true });

      for (const doc of docs) {
        await promises.writeFile(path.join(llmsDir, `${doc.slug}.md`), renderComponentMarkdown(doc));
      }
      await promises.writeFile(path.join(outputDir, 'llms.txt'), renderLlmsTxt(docs, siteTitle, siteDescription));
    },
  };
}
