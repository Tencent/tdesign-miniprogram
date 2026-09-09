import { promises, readFileSync, statSync } from 'fs';
import path from 'path';

import grayMatter from 'gray-matter';
import type { ResolvedConfig } from 'vite';

import { MOBILE_COMPONENT_MAP } from '../../../../common/js/components';

interface ComponentDoc {
  /** 文件名，如 button */
  slug: string;
  /** 英文名，如 Button */
  title: string;
  /** 中文名，如 按钮 */
  subtitle: string;
  /** 描述 */
  description: string;
  /** spline 分类 */
  spline: string;
  /** 组件名（如 Button / Layout） */
  component: string;
  /** 生成后的正文内容（不含 frontmatter） */
  body: string;
}

/**
 * 拆分 title：'Button 按钮' -> { title: 'Button', subtitle: '按钮' }
 */
function splitTitle(title: string): { title: string; subtitle: string } {
  const trimmed = (title || '').trim();
  const match = trimmed.match(/^(.+?)\s+(.+)$/);
  if (match) return { title: match[1].trim(), subtitle: match[2].trim() };
  return { title: trimmed, subtitle: '' };
}

/**
 * 移除站点专用说明块：渲染框架支持情况 / 版本提示 / Tips blockquote / 预览链接。
 * 通过 tag 计数处理嵌套元素，从而整块移除。
 */
function removeSiteBlocks(body: string): string {
  const blockTags = ['div', 'blockquote'];
  let result = body;

  for (const tag of blockTags) {
    const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'g');
    let match: RegExpExecArray | null;
    while ((match = openRe.exec(result))) {
      const openTag = match[0];
      const isTarget =
        (tag === 'div' && /(background:\s*#ecf2fe|background-color:\s*#ecf2fe|background:\s*#d9e1ff|background-color:\s*#d9e1ff)/.test(openTag)) ||
        (tag === 'blockquote' && /background-color:\s*#/.test(openTag)) ||
        /渲染框架支持情况|该组件于|Tips:|预览效果/.test(openTag);

      if (!isTarget) continue;

      let depth = 0;
      const tokenRe = new RegExp(`</?${tag}(?:\\s[^>]*)?>`, 'g');
      tokenRe.lastIndex = match.index;
      let token: RegExpExecArray | null;
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
function convertPreviewLink(body: string): string {
  return body.replace(
    /<a\s+href="(https:\/\/developers\.weixin\.qq\.com\/s\/[^"]+)"[^>]*>[^<]*<\/a>/g,
    (_m, url: string) => `> [在微信开发者工具中预览效果](${url})`,
  );
}

/**
 * 将站点专用的 Tips blockquote（小程序调试提示）转换为 Markdown 引用块。
 */
function convertTipsBlock(body: string): string {
  // 匹配 <blockquote ...> ... <p>Tips: ...</p> ... </blockquote>，提取 <p> 内文本
  return body.replace(
    /<blockquote\b[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g,
    (_m, text: string) =>
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
 *
 * README 源码结构为外层容器 div 嵌套若干内层说明 div：
 *   <div style="background: #ecf2fe; ...">
 *     <div ...>该组件于 0.9.0 版本上线，请留意版本</div>
 *     <div ...>渲染框架支持情况：Skyline、WebView</div>
 *   </div>
 * 故先匹配外层容器，再逐行提取内层 div 文本。
 */
function convertHeaderNoticeBlocks(body: string): string {
  const openRe = /<div\s+style="background:\s*#(?:ecf2fe|d9e1ff)[^"]*"[^>]*>/g;
  let result = body;
  let match: RegExpExecArray | null;

  while ((match = openRe.exec(result))) {
    // 从开标签起，按深度计数找到配对的闭标签，正确处理嵌套 div
    let depth = 0;
    const tokenRe = /<\/?div(?:\s[^>]*)?>/g;
    tokenRe.lastIndex = match.index;
    let token: RegExpExecArray | null;
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
      .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .map((line) => `> ${line}`)
      .join('\n');
    // 整块替换为 Markdown 引用（保留前后空行结构）
    result = result.slice(0, match.index) + converted + result.slice(end);
    openRe.lastIndex = match.index;
  }
  return result;
}

/**
 * 清理站点专用 HTML：转换为 Markdown 语义后，移除剩余站点专用 HTML 块。
 */
function cleanSiteHtml(body: string): string {
  // 先做转换：预览链接 / Tips 提示块 / 渲染框架支持情况 -> Markdown
  const converted = convertHeaderNoticeBlocks(convertTipsBlock(convertPreviewLink(body)));
  // 再移除剩余站点专用 HTML 块（如「该组件于 xx 版本」等），保留代码示例中的真实内容。
  return removeSiteBlocks(converted)
    .replace(/<a href="https:\/\/developers\.weixin\.qq\.com\/s\/[^"]*"[^>]*>[^<]*<\/a>/g, '');
}

/**
 * 判断 demo 目录是否存在（同步）。
 */
function isDirectorySync(p: string): boolean {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/**
 * 读取 demo 目录下的源码，返回四段代码块（wxml/js/wxss/json）。
 */
function readDemoCode(componentDir: string, demoName: string): string {
  const demoDir = path.join(componentDir, '_example', demoName);
  const fileOrder = ['index.wxml', 'index.js', 'index.wxss', 'index.json'];
  const sections: string[] = [];
  for (const file of fileOrder) {
    try {
      const content = readFileSync(path.join(demoDir, file), 'utf-8');
      // 忽略内容为空的文件（如部分示例的 index.wxss），避免生成空代码块
      if (!content.trim()) continue;
      const lang = file.replace('index.', '');
      sections.push('```' + lang, content, '```');
    } catch {
      // 忽略不存在的文件
    }
  }
  return sections.join('\n');
}

/**
 * 将 README 解析为组件文档。
 */
async function parseComponentReadme(componentDir: string): Promise<ComponentDoc | null> {
  const readmePath = path.join(componentDir, 'README.md');
  const raw = await promises.readFile(readmePath, 'utf-8');
  const { data, content } = grayMatter(raw);
  const { title: rawTitle, description, spline } = data;

  if (!rawTitle) return null;

  const slug = path.basename(componentDir);
  const { title: enTitle, subtitle } = splitTitle(rawTitle);
  // 组件名：优先取 MOBILE_COMPONENT_MAP 注册的导出名（首项），回退为英文 title
  const component = MOBILE_COMPONENT_MAP[slug]?.[0] || enTitle;

  const body = cleanSiteHtml(
    content.replace(/\{\{\s*([a-z0-9-]+)\s*\}\}/g, (match, demoName: string) => {
      // 仅当存在对应 _example 目录时才视为 demo 占位符，避免误伤 WXML 模板绑定（如 {{item}}/{{48}}）
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
    component,
    body,
  };
}

/**
 * 渲染单篇组件文档的 Markdown。
 */
function renderComponentMarkdown(doc: ComponentDoc): string {
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
function renderLlmsTxt(docs: ComponentDoc[]): string {
  const lines = [
    '# TDesign MiniProgram',
    '',
    '> TDesign 小程序端组件库的 LLM 友好文档索引。',
    '',
  ];
  docs.forEach((doc) => {
    const titleText = doc.subtitle ? `${doc.title} ${doc.subtitle}` : doc.title;
    lines.push(`- [${titleText}](./llms/${doc.slug}.md)：${doc.description}`);
  });
  return `${lines.join('\n')}\n`;
}

/**
 * vite 插件：在站点构建时，为每个组件生成面向 LLM 的 Markdown 文档。
 */
export default function generateLlmsPlugin() {
  let config: ResolvedConfig;
  return {
    name: 'generate-llms',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle(error?: Error) {
      if (error) return;
      if (!config.env.PROD && config.env.MODE !== 'preview') return;

      // 基于 config.root 推导路径，避免依赖 __dirname 多层回溯
      // site 根目录为 config.root（vite.config.ts 中已设置），组件目录位于其上级两级
      const siteRoot = config.root;
      const componentsRoot = path.resolve(siteRoot, '../../components');
      // 产物输出目录：从 config.build.outDir 推导，避免硬编码 dist
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');
      const llmsDir = path.join(outputDir, 'llms');

      // 组件清单以 MOBILE_COMPONENT_MAP 的 key 为准，再补充不在 Map 中但有 README 的组件目录
      const allDirs = await promises.readdir(componentsRoot);
      const mapKeys = Object.keys(MOBILE_COMPONENT_MAP);
      const componentDirs = [...mapKeys, ...allDirs.filter((dir) => !mapKeys.includes(dir))];
      const docs: ComponentDoc[] = [];

      for (const dir of componentDirs) {
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
      await promises.writeFile(path.join(outputDir, 'llms.txt'), renderLlmsTxt(docs));
    },
  };
}
