import fs from 'fs';
import path from 'path';

import mdToVue from './md-to-vue';

let demoCodesImports = {};

export default mode => ({
  before({ source, file }) {
    const resourceDir = path.dirname(file);
    const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/);
    const fileName = reg && reg[0];
    const componentName = reg && reg[1];
    const localeName = reg && reg[2];
    demoCodesImports = {};

    // 统一换成 common 文档内容
    if (fileName && source.includes(':: BASE_DOC ::')) {
      const localeDocPath = path.resolve(__dirname, `../../../../src/_common/docs/mobile/api/${fileName}`);
      const defaultDocPath = path.resolve(__dirname, `../../../../src/_common/docs/mobile/api/${componentName}.md`);
      let baseDoc = '';
      if (fs.existsSync(localeDocPath)) {
        // 优先载入语言版本
        baseDoc = fs.readFileSync(localeDocPath, 'utf-8');
      } else if (fs.existsSync(defaultDocPath)) {
        // 回退中文默认版本
        baseDoc = fs.readFileSync(defaultDocPath, 'utf-8');
      } else {
        console.error(`未找到 ${defaultDocPath} 文件`);
      }

      source = source.replace(':: BASE_DOC ::', baseDoc);
    }

    // 替换成对应 demo 文件
    source = source.replace(/\{\{\s+(.+)\s+\}\}/g, (demoStr, demoFileName) => {
      const defaultDemoPath = path.resolve(resourceDir, `./_example/${demoFileName}/index.vue`);
      const localeDemoPath = path.resolve(resourceDir, `../_example/${demoFileName}.${localeName}.vue`);
      // const demoPath = path.resolve(resourceDir, `./demos/${demoFileName}.vue`);
      // localeDemo 优先级最高
      if (fs.existsSync(localeDemoPath)) return `\n::: demo demos/${demoFileName}.${localeName} ${componentName}\n:::\n`;

      if (!fs.existsSync(defaultDemoPath)) {
        console.log('\x1B[36m%s\x1B[0m', `${componentName} 组件需要实现 demos/${demoFileName}.vue 示例!`);
        return '\n<h3>DEMO (🚧建设中）...</h3>';
      }

      return `\n::: demo _example/${demoFileName} ${componentName}\n:::\n`;
    });

    source.replace(/:::\s*demo\s+([\\/.\w-]+)/g, (demoStr, relativeDemoPath) => {
      const demoPathOnlyLetters = relativeDemoPath.replace(/[^a-zA-Z\d]/g, '');
      const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
      demoCodesImports[demoCodeDefName] = `import ${demoCodeDefName} from './${relativeDemoPath}/index.vue?raw';`;
    });

    return source;
  },
  render({ source, file, md }) {
    const demoCodesDefsStr = Object.keys(demoCodesImports)
      .map(key => demoCodesImports[key])
      .join(';\n');

    const demoCodeInstallStr = Object.keys(demoCodesImports).join(',');

    const sfc = mdToVue({
      md,
      file,
      source,
      demoCodesDefsStr,
      demoCodeInstallStr,
      mode,
    });

    return sfc;
  },
});
