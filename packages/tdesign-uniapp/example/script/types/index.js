const glob = require('glob');
const path = require('path');
const fs = require('fs');
const { writeFileSync } = require('t-comm');
const { toPascal } = require('../utils/utils');
const { PACKAGES_ROOT, toGlobPattern } = require('../release/config');


// 基于 __dirname 推算项目根目录（脚本位于 packages/tdesign-uniapp/example/script/types/）
const PROJECT_ROOT = path.resolve(__dirname, '../../../../../');


const CONFIG = {
  pkgJsonPath: path.resolve(PACKAGES_ROOT, 'uniapp-components/package.json'),
  chatPkgJsonPath: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/package.json'),

  dtsDir: path.resolve(PACKAGES_ROOT, 'uniapp-components/types'),
  chatDtsDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/types'),

  indexPath: path.resolve(PACKAGES_ROOT, 'uniapp-components/types/index.d.ts'),
  chatIndexPath: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/types/index.d.ts'),

  globalDTSPath: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp/global.d.ts'),
  chatGlobalDTSPath: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp-chat/global.d.ts'),
  filterTypes: ['form-item'],
};

const OTHER_EXPORTS = {
  '.': {
    types: './types/index.d.ts',
    default: './index.js',
  },
  './*': './*',
  './global': {
    types: './global.d.ts',
  },
};

const getDTSTemplate = isChat => `import type { TransformEventHandlers, ExtractNonOnProps } from '${isChat ? '@tdesign/uniapp' : '..'}/common/common';
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


function checkFileExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    console.error(`[types] 错误: ${label} 不存在: ${filePath}`);
    process.exit(1);
  }
}

async function genOnProject({
  pkgGlob,
  pkgJsonPath,
  dtsDir,
  indexPath,
  globalDTSPath,
  isChat,
}) {
  const label = isChat ? 'chat' : 'base';
  console.log(`[types][${label}] 开始生成, glob: ${pkgGlob}`);

  checkFileExists(pkgJsonPath, 'package.json');
  checkFileExists(path.dirname(globalDTSPath), 'global.d.ts 所在目录');

  const list = glob.sync(pkgGlob);
  if (list.length === 0) {
    console.error(`[types][${label}] 错误: glob "${pkgGlob}" 未匹配到任何 .vue 文件`);
    console.error(`[types][${label}] 当前 cwd: ${process.cwd()}`);
    process.exit(1);
  }

  const filtered = list.filter((item) => {
    const typeFile = path.resolve(item, '../type.ts');
    return fs.existsSync(typeFile);
  });

  if (filtered.length === 0) {
    console.error(`[types][${label}] 错误: 匹配到 ${list.length} 个 .vue 文件, 但没有组件包含 type.ts`);
    process.exit(1);
  }

  const fileNames = filtered.map(item => item.split(path.sep)[item.split(path.sep).length - 2]);
  fileNames.sort();

  console.log(`[types][${label}] 找到 ${fileNames.length} 个组件: ${fileNames.join(', ')}`);

  changePkgExports(fileNames, pkgJsonPath, label);
  genDTS({ list: fileNames, dtsDir, isChat, label });
  genIndexContent(fileNames, indexPath, label);
  getGlobalDTS(fileNames, globalDTSPath, isChat, label);

  console.log(`[types][${label}] 生成完毕 ✅`);
}

async function main() {
  console.log(`[types] PACKAGES_ROOT: ${PACKAGES_ROOT}`);

  await genOnProject({
    pkgGlob: toGlobPattern(path.resolve(PROJECT_ROOT, 'packages/uniapp-components/*/*.vue')),
    pkgJsonPath: CONFIG.pkgJsonPath,
    dtsDir: CONFIG.dtsDir,
    indexPath: CONFIG.indexPath,
    globalDTSPath: CONFIG.globalDTSPath,
    isChat: false,
  });

  await genOnProject({
    pkgGlob: toGlobPattern(path.resolve(PROJECT_ROOT, 'packages/uniapp-pro-components/chat/*/*.vue')),
    pkgJsonPath: CONFIG.chatPkgJsonPath,
    dtsDir: CONFIG.chatDtsDir,
    indexPath: CONFIG.chatIndexPath,
    globalDTSPath: CONFIG.chatGlobalDTSPath,
    isChat: true,
  });
}


function changePkgExports(fileNames, pkgJsonPath, label) {
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
  console.log(`[types][${label}] 更新 package.json exports: ${Object.keys(exportsType).length} 条`);
}


function genDTS({ list, dtsDir, isChat, label }) {
  if (!fs.existsSync(dtsDir)) {
    fs.mkdirSync(dtsDir, { recursive: true });
    console.log(`[types][${label}] 创建目录: ${dtsDir}`);
  }
  list.forEach((item) => {
    const fileName = path.resolve(dtsDir, `${item}.d.ts`);
    const content = getDTSTemplate(isChat)
      .replaceAll('{{Component}}', toPascal(item))
      .replaceAll('{{component}}', item);
    writeFileSync(fileName, content);
  });
  console.log(`[types][${label}] 生成 ${list.length} 个 .d.ts 文件到 ${dtsDir}`);
}

function genIndexContent(fileNames, indexPath, label) {
  const content = Array.from(new Set(fileNames))
    .filter(item => !CONFIG.filterTypes.includes(item))
    .map(item => `export * from '../${item}/type';`);
  writeFileSync(indexPath, `${content.join('\n')}\n`);
  console.log(`[types][${label}] 生成 index.d.ts: ${content.length} 条 export`);
}

function getGlobalDTS(fileNames, globalDTSPath, isChat, label) {
  const pkgName = isChat ? '@tdesign/uniapp-chat' : '@tdesign/uniapp';
  const content = Array.from(new Set(fileNames))
    .map(item => `T${toPascal(item)}: typeof import('${pkgName}/${item}/${item}.vue').default;`);

  const result = GLOBAL_DTS_TEMPLATE.replace('{{CONTENT}}', content.join('\n    '));
  writeFileSync(globalDTSPath, result);
  console.log(`[types][${label}] 生成 global.d.ts: ${content.length} 个组件 -> ${globalDTSPath}`);
}


main();
