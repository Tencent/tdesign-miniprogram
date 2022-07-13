import path from 'path';
import fs from 'fs';
import mdToVue from './md-to-vue';

let demoCodesImports: Record<string, string> = {};


export default {
  before({ source, file, md }: any) {
    const resouceDir = path.dirname(file);
    const reg = file.match(/src\/(\w+-?\w+)\/\w+-?\w+\.md/);
    const name = reg && reg[1];
    demoCodesImports = {};

    // 增加渲染规则
    md.renderer.rules.html_block = function (tokens: string, idx: number) {
      const { content } = tokens[idx];
      if (content.startsWith('<img') && content.indexOf('qrcode') === -1) {
        return  '';
      }

      return content;
    };

    // 替换成对应 demo 文件
    source = source.replace(/{{\s+(.+)\s+}}/g, (_: string, demoDirName: string) => {
      const demoPath = path.resolve(resouceDir, `./_example/${demoDirName}`);
      if (!fs.existsSync(demoPath)) {
        console.log('\x1B[36m%s\x1B[0m', `${name} 组件需要实现 _example/${demoDirName} 示例!`);
        return '\n<h3>DEMO (🚧建设中）...</h3>';
      }
      const wxml = fs.readFileSync(path.resolve(demoPath, 'index.wxml'), { encoding: 'utf-8'});
      const js = fs.readFileSync(path.resolve(demoPath, 'index.js'), { encoding: 'utf-8'});
      const css = fs.readFileSync(path.resolve(demoPath, 'index.wxss'), { encoding: 'utf-8'});
      const json = fs.readFileSync(path.resolve(demoPath, 'index.json'), { encoding: 'utf-8'});

      return `
<td-code-block panel="WXML">
  <pre slot="WXML" lang="html">${wxml}</pre>

  <pre slot="JS" lang="javascript">${js}</pre>

  <pre slot="CSS" lang="css">${css}</pre>

  <pre slot="JSON" lang="javascript">${json}</pre>
</td-code-block>`
    });

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
