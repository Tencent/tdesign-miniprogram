import path from 'path';

import generateLlmsDocs from '../../../../../common/docs/plugins/generate-llms';

/**
 * vite 插件：chat 站点构建时，基于 CHAT_COMPONENT_MAP 生成组件的 LLM Markdown 文档。
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
      const componentsRoot = path.resolve(siteRoot, '../../pro-components/chat');
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');

      await generateLlmsDocs({
        componentsRoot,
        outputDir,
        platform: 'chat',
        siteTitle: 'TDesign Uniapp Chat',
        siteDescription: 'TDesign Uniapp AI Chat 组件库的 LLM 友好文档索引。',
      });
    },
  };
}
