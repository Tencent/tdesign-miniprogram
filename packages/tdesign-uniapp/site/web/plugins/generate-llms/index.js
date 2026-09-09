import { readFileSync } from 'fs';
import path from 'path';

import generateLlmsDocs from '../../../../../common-docs/plugins/generate-llms/index.ts';

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
 * vite 插件：uniapp 站点构建时，为每个组件生成 LLM Markdown 文档。
 * 核心逻辑为纯 JS 方法 generateLlmsDocs。
 * 通过 options 覆盖 componentsDir / siteTitle / siteDescription / readDemoCode 可供 uniapp-chat 等站点复用。
 */
export default function generateUniappLlmsPlugin(options = {}) {
  const {
    componentMap = {},
    componentsDir = '../../uniapp-components',
    siteTitle = 'TDesign UniApp',
    siteDescription = 'TDesign UniApp 端组件库的 LLM 友好文档索引。',
  } = options;
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
      const componentsRoot = path.resolve(siteRoot, componentsDir);
      const outputDir = config.build.outDir || path.join(siteRoot, 'dist');

      await generateLlmsDocs({
        componentsRoot,
        outputDir,
        componentMap,
        siteTitle,
        siteDescription,
        readDemoCode: readVueDemoCode,
      });
    },
  };
}
