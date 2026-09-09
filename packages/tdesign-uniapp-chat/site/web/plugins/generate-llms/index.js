import generateLlmsPlugin from '../../../../../tdesign-uniapp/site/web/plugins/generate-llms';

/**
 * uniapp chat 站点专用：生成组件的 LLM Markdown 文档。
 * 组件目录为 uniapp-pro-components/chat。
 */
export default function generateUniappChatLlmsPlugin() {
  return generateLlmsPlugin({
    componentsDir: '../../uniapp-pro-components/chat',
    siteTitle: 'TDesign UniApp Chat',
    siteDescription: 'TDesign UniApp Chat 组件库的 LLM 友好文档索引。',
  });
}
