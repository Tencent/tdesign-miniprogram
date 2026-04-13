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

// 基础 exports（base 和 chat 共用）
const COMMON_EXPORTS = {
  '.': {
    types: './types/index.d.ts',
    default: './index.js',
  },
  './*': './*',
  './global': {
    types: './global.d.ts',
  },
};

// 仅 base 包需要的额外 exports（函数式调用、mixins、theme 等）
const BASE_EXTRA_EXPORTS = {
  './mixins/page-scroll': {
    types: './mixins/page-scroll.d.ts',
    import: './mixins/page-scroll.js',
    default: './mixins/page-scroll.js',
  },
  './dialog': {
    types: './dialog/index.d.ts',
    import: './dialog/index.js',
    default: './dialog/index.js',
  },
  './message': {
    types: './message/index.d.ts',
    import: './message/index.js',
    default: './message/index.js',
  },
  './toast': {
    types: './toast/index.d.ts',
    import: './toast/index.js',
    default: './toast/index.js',
  },
  './action-sheet': {
    types: './action-sheet/index.d.ts',
    import: './action-sheet/index.js',
    default: './action-sheet/index.js',
  },
  './theme.css': {
    types: './theme.css.d.ts',
    default: './theme.css',
  },
  './theme.less': {
    types: './theme.less.d.ts',
    default: './theme.less',
  },
};

function getOtherExports(isChat) {
  return isChat
    ? { ...COMMON_EXPORTS }
    : { ...COMMON_EXPORTS, ...BASE_EXTRA_EXPORTS };
}

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

  changePkgExports(fileNames, pkgJsonPath, isChat, label);
  genDTS({ list: fileNames, dtsDir, isChat, label });
  genIndexContent(fileNames, indexPath, isChat, label);
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


function changePkgExports(fileNames, pkgJsonPath, isChat, label) {
  const otherExports = getOtherExports(isChat);
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
    ...otherExports,
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

// 函数式调用和 mixins 的额外类型导出（追加到 types/index.d.ts 末尾）
const EXTRA_INDEX_EXPORTS = [
  '',
  '// mixins',
  'export { handlePageScroll } from \'../mixins/page-scroll\';',
  '',
  '// 函数式调用',
  'export { default as DialogPlugin } from \'../dialog/index\';',
  'export { default as Dialog } from \'../dialog/index\';',
  'export { default as MessagePlugin } from \'../message/index\';',
  'export { default as Message } from \'../message/index\';',
  'export { default as Toast, showToast, hideToast } from \'../toast/index\';',
  'export { default as ToastPlugin } from \'../toast/index\';',
  'export type { ToastOptionsType } from \'../toast/index\';',
  'export { default as ActionSheetPlugin, ActionSheetTheme } from \'../action-sheet/index\';',
  'export { default as ActionSheet } from \'../action-sheet/index\';',
  'export type { ActionSheetShowOption } from \'../action-sheet/show\';',
];

function genIndexContent(fileNames, indexPath, isChat, label) {
  const content = Array.from(new Set(fileNames))
    .filter(item => !CONFIG.filterTypes.includes(item))
    .map(item => `export * from '../${item}/type';`);

  // 仅 base 包追加函数式调用和 mixins 的额外导出
  const fullContent = isChat ? content : [...content, ...EXTRA_INDEX_EXPORTS];
  writeFileSync(indexPath, `${fullContent.join('\n')}\n`);

  const extraCount = isChat ? 0 : EXTRA_INDEX_EXPORTS.filter(l => l.startsWith('export')).length;
  console.log(`[types][${label}] 生成 index.d.ts: ${content.length} 条组件 export + ${extraCount} 条额外 export`);
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
