import { promises, readFileSync, statSync } from 'fs';
import path from 'path';

import { cleanSiteHtml, splitTitle } from './markdown';
import type { ComponentDoc, ComponentMap, GenerateLlmsOptions } from './types';

export type { ComponentDoc, ComponentMap, GenerateLlmsOptions } from './types';
export { cleanSiteHtml, splitTitle } from './markdown';

/**
 * 解析 Markdown 的 frontmatter（--- 包裹的简单 key: value 格式）。
 * 替代 gray-matter，避免引入额外依赖。
 */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const data: Record<string, string> = {};
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { data, content: raw };

  const fm = match[1];
  for (const line of fm.split('\n')) {
    const kv = line.match(/^([a-zA-Z0-9_-]+)\s*:\s*(.*?)\s*$/);
    if (kv) data[kv[1]] = kv[2];
  }
  return { data, content: raw.slice(match[0].length) };
}

/** 判断 demo 目录是否存在（同步）。 */
function isDirectorySync(p: string): boolean {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/** 默认 demo 源码解析器：读取 _example/<demoName> 下的四段代码块（wxml/js/wxss/json）。 */
function readMiniProgramDemoCode(componentDir: string, demoName: string): string {
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
async function parseComponentReadme(
  componentDir: string,
  componentMap: ComponentMap,
  readDemoCode: (componentDir: string, demoName: string) => string,
): Promise<ComponentDoc | null> {
  const readmePath = path.join(componentDir, 'README.md');
  const raw = await promises.readFile(readmePath, 'utf-8');
  const { data, content } = parseFrontmatter(raw);
  const { title: rawTitle, description, spline } = data;

  if (!rawTitle) return null;

  const slug = path.basename(componentDir);
  const { title: enTitle, subtitle } = splitTitle(rawTitle);
  // 组件名：优先取组件 Map 注册的导出名（首项），回退为英文 title
  const component = componentMap[slug]?.[0] || enTitle;

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
function renderLlmsTxt(docs: ComponentDoc[], siteTitle: string, siteDescription: string): string {
  const lines = [
    `# ${siteTitle}`,
    '',
    `> ${siteDescription}`,
    '',
  ];
  docs.forEach((doc) => {
    const titleText = doc.subtitle ? `${doc.title} ${doc.subtitle}` : doc.title;
    lines.push(`- [${titleText}](./llms/${doc.slug}.md)：${doc.description}`);
  });
  return `${lines.join('\n')}\n`;
}

/**
 * 纯 JS 方法：为每个组件生成面向 LLM 的 Markdown 文档。
 *
 * 与 vite 解耦 —— 仅依赖文件系统，不引入额外第三方依赖。
 * 数据源为组件目录下的 README.md（frontmatter + 正文），
 * `{{ demo }}` 占位符替换为 `_example/` 目录下的真实源码块。
 * 产物：`<outputDir>/llms/<slug>.md`（每个组件一份）+ `<outputDir>/llms.txt`（组件索引）。
 *
 * @param options 生成配置。需要显式传入 `componentsRoot` 与 `outputDir`。
 * @returns 生成的组件文档列表。
 */
export default async function generateLlmsDocs(options: GenerateLlmsOptions): Promise<ComponentDoc[]> {
  const {
    componentsRoot,
    outputDir,
    componentMap = {},
    siteTitle = 'TDesign MiniProgram',
    siteDescription = 'TDesign 小程序端组件库的 LLM 友好文档索引。',
    readDemoCode = readMiniProgramDemoCode,
  } = options;

  const llmsDir = path.join(outputDir, 'llms');

  // 组件清单以 componentMap 的 key 为准，再补充不在 Map 中但有 README 的组件目录
  const allDirs = await promises.readdir(componentsRoot);
  const mapKeys = Object.keys(componentMap);
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

      const doc = await parseComponentReadme(componentDir, componentMap, readDemoCode);
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

  return docs;
}
