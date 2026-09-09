/**
 * Generate LLM-friendly markdown docs for each component
 * (data format aligned with ant.design xxx-cn.md).
 *
 * - Source: README.md of each component under packages/components
 * - Inline demo placeholders as real code blocks from _example dir
 * - Output: one .md per component plus an llms.txt index
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = path.resolve(__dirname, '../../../components');

const DEMO_FILES = [
  ['WXML', 'index.wxml', 'html'],
  ['JS', 'index.js', 'javascript'],
  ['CSS', 'index.wxss', 'css'],
  ['JSON', 'index.json', 'json'],
];

/** inline demo placeholders as code blocks */
function inlineDemos(resourceDir, source, componentName) {
  return source.replace(/{{\s+(.+?)\s+}}/g, (_, demoDirName) => {
    const demoPath = path.resolve(resourceDir, `./_example/${demoDirName}`);
    if (!fs.existsSync(demoPath)) {
      // eslint-disable-next-line no-console
      console.log(`\x1B[33m[llms-md] ${componentName} 缺少 _example/${demoDirName} 示例，已跳过\x1B[0m`);
      return '';
    }
    const blocks = DEMO_FILES.map(([label, file, lang]) => {
      const filePath = path.resolve(demoPath, file);
      if (!fs.existsSync(filePath)) return '';
      const code = fs.readFileSync(filePath, { encoding: 'utf-8' }).trim();
      if (!code) return '';
      return `**${label}**\n\n\`\`\`${lang}\n${code}\n\`\`\``;
    }).filter(Boolean);

    return `**${demoDirName}**\n\n${blocks.join('\n\n')}`;
  });
}

/** 移除站点专用 HTML（截图 img、空锚点等），保留其余内容 */
function cleanHtml(source) {
  return source
    .replace(/<img[^>]*>/g, '')
    .replace(/<a\s+href="https:\/\/developers\.weixin\.qq\.com\/s\/[^"]*"[^>]*>[\s\S]*?<\/a>/g, '')
    .replace(/<blockquote[^>]*>[\s\S]*?<\/blockquote>/g, '')
    .replace(/<div[^>]*>|<\/div>/g, '')
    .replace(/\n{3,}/g, '\n\n');
}

/** 拆分标题：'Button 按钮' -> { title: 'Button', subtitle: '按钮' } */
function splitTitle(title = '') {
  const [name, ...rest] = title.trim().split(/\s+/);
  return { title: name || '', subtitle: rest.join(' ') };
}

/** 读取全部组件 README */
export function readComponentDocs() {
  return fs
    .readdirSync(COMPONENTS_DIR)
    .filter((name) => {
      const readme = path.resolve(COMPONENTS_DIR, name, 'README.md');
      return fs.existsSync(readme) && fs.statSync(path.resolve(COMPONENTS_DIR, name)).isDirectory();
    })
    .sort()
    .map((name) => {
      const readmePath = path.resolve(COMPONENTS_DIR, name, 'README.md');
      const { content, data } = matter(fs.readFileSync(readmePath, 'utf-8'));
      const { title, subtitle } = splitTitle(data.title || name);
      const body = cleanHtml(inlineDemos(path.dirname(readmePath), content, name));
      return {
        name,
        title,
        subtitle,
        description: (data.description || '').trim(),
        spline: data.spline || '',
        body,
      };
    });
}

/** 生成单个组件的 LLM Markdown（对齐 ant.design xxx-cn.md 格式） */
export function renderComponentMd(doc) {
  const frontmatter = [
    '---',
    `title: ${doc.title}`,
    doc.subtitle && `subtitle: ${doc.subtitle}`,
    doc.description && `description: ${doc.description}`,
    doc.spline && `spline: ${doc.spline}`,
    `component: ${doc.name}`,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  return `${frontmatter}\n\n${doc.body.trim()}\n`;
}

/** 生成 llms.txt 组件索引 */
export function renderLlmsTxt(docs) {
  const lines = [
    '# TDesign Miniprogram Components',
    '',
    '> 小程序组件库文档索引，每个组件对应一个 Markdown 文件，可通过 ./llms/<component>.md 获取。',
    '',
    ...docs.map((doc) => {
      const label = doc.subtitle ? `${doc.title} ${doc.subtitle}` : doc.title;
      return `- [${label}](./llms/${doc.name}.md): ${doc.description}`;
    }),
  ];
  return `${lines.join('\n')}\n`;
}

/** 生成全部产物到指定目录 */
export function generateLlmsFiles(outputDir) {
  const docs = readComponentDocs();
  fs.mkdirSync(outputDir, { recursive: true });
  docs.forEach((doc) => {
    fs.writeFileSync(path.resolve(outputDir, `${doc.name}.md`), renderComponentMd(doc));
  });
  fs.writeFileSync(path.resolve(outputDir, '../llms.txt'), renderLlmsTxt(docs));
  // eslint-disable-next-line no-console
  console.log(`\x1B[32m[llms-md] generated ${docs.length} component docs to ${outputDir}\x1B[0m`);
  return docs;
}

// 支持独立执行：node scripts/generate-llms-md.mjs [outputDir]
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  generateLlmsFiles(path.resolve(__dirname, process.argv[2] || '../dist/llms'));
}
