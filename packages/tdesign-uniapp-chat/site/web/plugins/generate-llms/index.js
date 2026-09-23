import { readFile } from 'fs/promises';
import { readFileSync } from 'fs';
import path from 'path';

import generateLlmsDocs, { createComponentDocParser } from '../../../../../common/docs/plugins/generate-llms';

/** uniapp chat demo 源码解析器：读取 _example/<demoName>/index.vue 单文件组件（与站点 tdoc 插件一致）。 */
function readDemoCode(componentDir, demoName) {
  try {
    const content = readFileSync(path.join(componentDir, '_example', demoName, 'index.vue'), 'utf-8');
    // 忽略内容为空的文件，避免生成空代码块
    const code = content.trim();
    if (!code) return '';
    return ['```vue', code, '```'].join('\n');
  } catch {
    // 忽略不存在的文件
    return '';
  }
}

/**
 * vite 插件：uniapp chat 站点构建时，基于 CHAT_COMPONENT_MAP 生成组件的 LLM Markdown 文档。
 * 核心逻辑为纯 JS 方法 generateLlmsDocs，此处仅负责 vite 构建钩子分发。
 */
export default function generateChatLlmsPlugin() {
  let config;
  return {
    name: 'generate-llms',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle(error) {
      if (error) return;
      if (!config.env.PROD && config.env.MODE !== 'preview') return;

      const siteRoot = config.root;
      const componentsRoot = path.resolve(siteRoot, '../../uniapp-pro-components/chat');
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');

      const parseComponentDoc = createComponentDocParser({
        // 与小程序一致：读组件目录 README.md
        readComponentDoc: (componentDir) => readFile(`${componentDir}/README.md`, 'utf-8').catch(() => null),
        readDemoCode,
        // uniapp 文档无微信站点专用链接，传空跳过 cleanSiteHtml
        transformers: [],
      });

      await generateLlmsDocs({
        componentsRoot,
        outputDir,
        platform: 'chat',
        parseComponentDoc,
        siteTitle: 'TDesign Uniapp Chat',
        siteDescription:
          'TDesign Chat 智能对话组件库，为 AI 应用提供专业级聊天界面解决方案,适合在 Uniapp 技术栈项目中使用。',
        siteBaseUrl: config.base,
      });
    },
  };
}
