import { CHAT_COMPONENT_MAP } from '../../../../common/js/components';
import generateLlmsPlugin from '../../../../tdesign-miniprogram/site/plugins/generate-llms';

/**
 * chat 站点专用：基于 CHAT_COMPONENT_MAP 生成组件的 LLM Markdown 文档。
 */
export default function generateChatLlmsPlugin() {
  return generateLlmsPlugin({
    componentMap: CHAT_COMPONENT_MAP,
    componentsDir: '../../pro-components/chat',
    siteTitle: 'TDesign MiniProgram Chat',
    siteDescription: 'TDesign 小程序 AI Chat 组件库的 LLM 友好文档索引。',
  });
}
