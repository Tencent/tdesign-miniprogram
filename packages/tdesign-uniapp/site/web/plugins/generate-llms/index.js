import { readFileSync } from 'fs';
import path from 'path';

import generateLlmsPlugin from '../../../../../common-docs/plugins/generate-llms/index.ts';

/**
 * uniapp 站点专用：读取 demo 目录下的 index.vue 源码，输出 Vue SFC 代码块。
 */
function readVueDemoCode(componentDir, demoName) {
  const demoDir = path.join(componentDir, '_example', demoName);
  const content = readFileSync(path.join(demoDir, 'index.vue'), 'utf-8');
  if (!content.trim()) return '';
  return ['```vue', content, '```'].join('\n');
}

/**
 * uniapp 站点专用：生成组件的 LLM Markdown 文档。
 * 通过 options 覆盖 componentsDir / siteTitle / siteDescription 可供 uniapp-chat 等站点复用。
 */
export default function generateUniappLlmsPlugin(options = {}) {
  return generateLlmsPlugin({
    componentsDir: '../../uniapp-components',
    siteTitle: 'TDesign UniApp',
    siteDescription: 'TDesign UniApp 端组件库的 LLM 友好文档索引。',
    readDemoCode: readVueDemoCode,
    ...options,
  });
}
