import { MOBILE_COMPONENT_MAP } from '../../../../common/js/components';
import generateLlmsPlugin from '../../../../common-docs/plugins/generate-llms';

/**
 * 站点专用：基于 MOBILE_COMPONENT_MAP 生成组件的 LLM Markdown 文档。
 */
export default function generateMobileLlmsPlugin() {
  return generateLlmsPlugin({
    componentMap: MOBILE_COMPONENT_MAP,
    componentsDir: '../../components',
    siteTitle: 'TDesign MiniProgram',
    siteDescription: 'TDesign 小程序端组件库的 LLM 友好文档索引。',
  });
}
