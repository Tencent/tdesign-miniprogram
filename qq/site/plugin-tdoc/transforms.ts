import mdToVue from './md-to-vue';

let demoImports: Record<string, string> = {};
let demoCodesImports: Record<string, string> = {};

const compLists = ['badge', 'cell', 'empty',
'checkbox', 'date-time-picker', 'input', 'picker', 'radio', 'rate', 'search', 'stepper', 'switch', 'textarea', 'upload',
'indexes', 'navbar', 'tab-bar', 'tabs',
'dialog', 'popup', 'swipe-cell']

export default {
  before({ source, file, md }: any) {
    const reg = file.match(/src\/(\w+-?\w+)\/\w+-?\w+\.md/);
    const name = reg && reg[1];
    demoImports = {};
    demoCodesImports = {};

    // 增加渲染规则
    md.renderer.rules.html_block = function (tokens, idx) {
      const { content } = tokens[idx];
      // const hit = compLists.indexOf(name as string) > -1;
      
      if (content.startsWith('<img') && content.indexOf('qrcode') === -1) {
        return  '';
        // return `<div class="td-doc__image-wrapper ${hit ? 'td-doc__image-wrapper--gray' : ''}">
        //   ${content}
        // </div>`
      }

      return content;
    };

    return source;
  },
  render({ source, file, md }: { source: string, file: string, md: any }) {
    const demoCodesDefsStr = Object.keys(demoCodesImports).map((key) => demoCodesImports[key]).join(';\n');
    const demoCodesInstallStr = Object.keys(demoCodesImports).join(',');

    const sfc = mdToVue({
      md,
      file,
      source,
      demoCodesDefsStr,
      demoCodesInstallStr,
    });

    return sfc;
  },
};
