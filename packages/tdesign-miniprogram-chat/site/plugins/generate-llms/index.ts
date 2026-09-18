import { readFile } from 'fs/promises';
import { readFileSync } from 'fs';
import path from 'path';

import generateLlmsDocs, { createComponentDocParser } from '../../../../common/docs/plugins/generate-llms';

/** 小程序 demo 源码解析器：读取 _example/<demoName> 下的四段代码块（wxml/js/wxss/json）。 */
function readDemoCode(componentDir: string, demoName: string): string {
  const demoDir = path.join(componentDir, '_example', demoName);
  const fileOrder = ['index.wxml', 'index.js', 'index.wxss', 'index.json'];
  const sections: string[] = [];
  fileOrder.forEach((file) => {
    try {
      const content = readFileSync(path.join(demoDir, file), 'utf-8');
      // 忽略内容为空的文件（如部分示例的 index.wxss），避免生成空代码块
      if (!content.trim()) return;
      const lang = file.replace('index.', '');
      sections.push(`\`\`\`${lang}`, content, '```');
    } catch {
      // 忽略不存在的文件
    }
  });
  return sections.join('\n');
}

// 组件文档解析器：读组件目录 README.md，demo 占位符由仓库自实现的 readDemoCode 替换，
// 正文清理走默认 cleanSiteHtml（微信站点清理）
const parseComponentDoc = createComponentDocParser({
  readComponentDoc: (componentDir) => readFile(`${componentDir}/README.md`, 'utf-8').catch(() => null),
  readDemoCode,
});

/**
 * vite 插件：chat 站点构建时，基于 CHAT_COMPONENT_MAP 生成组件的 LLM Markdown 文档。
 * 核心逻辑为纯 JS 方法 generateLlmsDocs，此处仅负责 vite 构建钩子分发。
 */
export default function generateChatLlmsPlugin() {
  let config: any;
  return {
    name: 'generate-llms',
    configResolved(resolvedConfig: any) {
      config = resolvedConfig;
    },
    async closeBundle(error?: Error) {
      if (error) return;
      if (!config.env.PROD && config.env.MODE !== 'preview') return;

      const siteRoot = config.root;
      const componentsRoot = path.resolve(siteRoot, '../../pro-components/chat');
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');

      await generateLlmsDocs({
        componentsRoot,
        outputDir,
        platform: 'chat',
        parseComponentDoc,
        siteTitle: 'TDesign MiniProgram Chat',
        siteDescription: 'TDesign Chat 智能对话组件库，为 AI 应用提供专业级聊天界面解决方案,适合在微信小程序项目中使用。',
        siteBaseUrl: config.base,
      });
    },
  };
}
