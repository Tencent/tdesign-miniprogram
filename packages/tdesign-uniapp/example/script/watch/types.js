const glob = require('glob');
const path = require('path');
const fs = require('fs');
const { writeFileSync } = require('t-comm');
const { toPascal } = require('../utils/utils');

const PACKAGES_ROOT = path.resolve(__dirname, '../../../../');

const CONFIG = {
  pkgJsonPath: path.resolve(PACKAGES_ROOT, 'uniapp-components/package.json'),
  chatPkgJsonPath: path.resolve(__dirname, 'uniapp-pro-components/chat/package.json'),

  dtsDir: path.resolve(PACKAGES_ROOT, 'uniapp-components/types'),
  chatDtsDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/types'),

  indexPath: path.resolve(PACKAGES_ROOT, 'uniapp-components/types/index.d.ts'),
  chatIndexPath: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/types/index.d.ts'),

  globalDTSPath: path.resolve(PACKAGES_ROOT, 'uniapp-components/global.d.ts'),
  chatGlobalDTSPath: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/global.d.ts'),
  filterTypes: ['form-item'],
};

const OTHER_EXPORTS = {
  './*': './*',
};

const getDTSTemplate = isChat => `import type { TransformEventHandlers, ExtractNonOnProps } from '${isChat ? 'tdesign-uniapp' : '..'}/common/common';
import type { Td{{Component}}Props } from '../{{component}}/type';

export type {{Component}}Props = ExtractNonOnProps<Td{{Component}}Props>;
export type {{Component}}Emits = TransformEventHandlers<Td{{Component}}Props, true>;
declare const {{Component}}Component: import('vue').DefineComponent<{{Component}}Props, {}, {}, {}, {}, {}, {}, {{Component}}Emits, any>;
export default {{Component}}Component;
`;

const GLOBAL_DTS_TEMPLATE = `declare module 'vue' {
  export interface GlobalComponents {
    {{CONTENT}}
  }
}

export {};
`;

async function genOnProject({
  pkgGlob,
  pkgJsonPath,
  dtsDir,
  indexPath,
  globalDTSPath,
  isChat,
}) {
  const list = glob.sync(pkgGlob);
  const filtered = list.filter((item) => {
    const typeFile = path.resolve(item, '../type.ts');
    return fs.existsSync(typeFile);
  });

  const fileNames = filtered.map(item => item.split(path.sep)[item.split(path.sep).length - 2]);
  fileNames.sort();

  changePkgExports(fileNames, pkgJsonPath);
  genDTS({ list: fileNames, dtsDir, isChat });
  genIndexContent(fileNames, indexPath);
  getGlobalDTS(fileNames, globalDTSPath);
}

async function main() {
  await genOnProject({
    pkgGlob: 'packages/tdesign/*/*.vue',
    pkgJsonPath: CONFIG.pkgJsonPath,
    dtsDir: CONFIG.dtsDir,
    indexPath: CONFIG.indexPath,
    globalDTSPath: CONFIG.globalDTSPath,
    isChat: false,
  });

  await genOnProject({
    pkgGlob: 'packages/tdesign-uniapp-chat/*/*.vue',
    pkgJsonPath: CONFIG.chatPkgJsonPath,
    dtsDir: CONFIG.chatDtsDir,
    indexPath: CONFIG.chatIndexPath,
    globalDTSPath: CONFIG.chatGlobalDTSPath,
    isChat: true,
  });
}


function changePkgExports(fileNames, pkgJsonPath) {
  const exportsType = fileNames.reduce((acc, item) => {
    const key = `./${item}/${item}.vue`;
    return {
      ...acc,
      [key]: {
        types: `./types/${item}.d.ts`,
        import: key,
        default: key,
      },
    };
  }, {
    ...OTHER_EXPORTS,
  });

  const pkgJson = require(pkgJsonPath);
  pkgJson.exports = exportsType;
  writeFileSync(pkgJsonPath, `${JSON.stringify(pkgJson, null, 2)}\n`);
}


function genDTS({ list, dtsDir, isChat }) {
  list.forEach((item) => {
    const fileName = path.resolve(dtsDir, `${item}.d.ts`);
    const content = getDTSTemplate(isChat)
      .replaceAll('{{Component}}', toPascal(item))
      .replaceAll('{{component}}', item);
    writeFileSync(fileName, content);
  });
}

function genIndexContent(fileNames, indexPath) {
  const content = Array.from(new Set(fileNames))
    .filter(item => !CONFIG.filterTypes.includes(item))
    .map(item => `export * from '../${item}/type';`);
  writeFileSync(indexPath, `${content.join('\n')}\n`);
}

function getGlobalDTS(fileNames, globalDTSPath) {
  const content = Array.from(new Set(fileNames))
    .map(item => `T${toPascal(item)}: typeof import('tdesign-uniapp/${item}/${item}.vue').default;`);

  const result = GLOBAL_DTS_TEMPLATE.replace('{{CONTENT}}', content.join('\n    '));
  writeFileSync(globalDTSPath, result);
}


main();
