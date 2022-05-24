/* eslint-disable */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import camelCase from 'camelcase';

// import testCoverage from '../test-coverage';

const componentPath = path.join(__dirname, './component.vue');

const DEAULT_TABS = [
  { tab: 'demo', name: '示例' },
  { tab: 'api', name: 'API' },
  { tab: 'design', name: '指南' },
];

export default function mdToVue(options) {
  const mdSegment = customRender(options);
  const { demoCodesImportsStr, demoCodesDefsStr } = options;

  // let coverage = '';
  // if (mdSegment.isComponent) {
  //   coverage = testCoverage[camelCase(mdSegment.componentName)] || '0%';
  // }

  const sfc = `
    <template><tdesign-doc /></template>
    <script>
      import TdesignDoc from '${componentPath}';
      import { defineComponent } from 'vue';
      ${demoCodesImportsStr}

      export default defineComponent({
        props: { docType: String },
        components: { TdesignDoc },
        provide: { info: ${JSON.stringify(mdSegment)}, demos: { ${demoCodesDefsStr} } },
      });
    </script>
  `;

  return sfc;
}

// 解析 markdown 内容
function customRender({ source, file, md }: any) {
  const { content, data } = matter(source);
  // console.log('data', data);

  // md top data
  const pageData = {
    spline: '',
    toc: true,
    title: '',
    description: '',
    isComponent: false,
    tdDocHeader: true,
    tdDocTabs: DEAULT_TABS,
    apiFlag: /#+\s*API\n/i,
    docClass: '',
    lastUpdated: Math.round(fs.statSync(file).mtimeMs),
    ...data,
  };

  // md filename
  const reg = file.match(/src\/(\w+-?\w+)\/(\w+-?\w+)\.md/);
  const componentName = reg && reg[1];

  // split md
  let [demoMd = '', apiMd = ''] = content.split(pageData.apiFlag);

  // fix table | render error
  apiMd = apiMd.replace(/`[^`]+`/g, (str) => str.replace(/\|/g, '\\|'));

  const mdSegment = {
    ...pageData,
    componentName,
    docMd: '<td-doc-empty></td-doc-empty>',
    demoMd: '<td-doc-empty></td-doc-empty>',
    apiMd: '<td-doc-empty></td-doc-empty>',
    designMd: '<td-doc-empty></td-doc-empty>',
  };

  if (pageData.isComponent) {
    mdSegment.demoMd = md.render.call(md, `${demoMd.replace(/<!--[\s\S]+?-->/g, '')}`).html;
    mdSegment.apiMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${apiMd.replace(/<!--[\s\S]+?-->/g, '')}`).html;
  } else {
    mdSegment.docMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${content.replace(/<!--[\s\S]+?-->/g, '')}`).html;
  }

  // 设计指南内容 不展示 design Tab 则不解析
  if (pageData.isComponent && pageData.tdDocTabs.some((item) => item.tab === 'design')) {
    const designDocPath = path.resolve(__dirname, `../../src/_common/docs/miniprogram/design/${componentName}.md`);

    if (fs.existsSync(designDocPath)) {
      const designMd = fs.readFileSync(designDocPath, 'utf-8');
      mdSegment.designMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${designMd}`).html;
    } else {
      // console.log(`[vite-plugin-tdoc]: 未找到 ${designDocPath} 文件`);
    }
  }

  return mdSegment;
}
