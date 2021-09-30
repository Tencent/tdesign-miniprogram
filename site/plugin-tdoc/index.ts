import fs from 'fs';
import path from 'path';
import type markdownIt from 'markdown-it';

import vitePluginTdoc from 'vite-plugin-tdoc';
import createVuePlugin from '@vitejs/plugin-vue';

import renderDemo from './render-demo';
import transforms from './transforms';

// 解析 markdown 内容
const customRenderInfo = (source: string, id: string) => {
  const mdSegment = {
    title: '',
    description: '',
    docMd: '',
    demoMd: '',
    apiMd: '',
    mobileUrl: '',
    designMd: '### 文档 (🚧建设中）...',
    isComponent: false,
  };
  const titleLocation = source.search(/[\r\n]/);
  const describeLocation = source.split(/[\r\n]#+\s|:::\s/)[0].length || titleLocation;
  const propsRegLocation = source.search(/#+\s*属性配置\n|(#+\s*\S*\s*props\n)/i);

  mdSegment.title = source.slice(2, titleLocation) || '';
  mdSegment.description = source.slice(titleLocation, describeLocation).trim() || '';
  mdSegment.docMd = source.slice(describeLocation, propsRegLocation);
  mdSegment.isComponent = propsRegLocation !== -1;

  // 有 props 说明是组件文档
  if (propsRegLocation !== -1) {
    mdSegment.demoMd = source.slice(describeLocation, propsRegLocation);
    mdSegment.apiMd = source.slice(propsRegLocation);
  }

  // 设计指南内容
  const name = path.basename(id, '.md');
  const designDocPath = path.resolve(__dirname, `../../common/docs/miniporgram/design/${name}.md`);

  if (fs.existsSync(designDocPath)) {
    mdSegment.designMd = fs.readFileSync(designDocPath, 'utf-8');
  }

  // 移动端路由地址
  // const prefix = process.env.NODE_ENV === 'development' ? '/preview.html' : '/miniporgram/preview.html';
  // mdSegment.mobileUrl = `${prefix}#/${name}`;

  return mdSegment;
};

export default function createTDesignPlugin() {

  const vuePlugin = createVuePlugin({
    ssr: false,
    include: [/\.md$/],
    template: { compilerOptions: { isCustomElement: tag => tag.startsWith('td-') } }
  });

  return vitePluginTdoc({
    mdClassPrefix: 'tdesign',
    plugins: [vuePlugin],
    customRenderInfo,
    transforms, // 解析markdown 数据
    markdownItSetup(md: markdownIt) {
      renderDemo(md);
    },
  });
};
