const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { deleteFolder } = require('t-comm');

const { config, DIST_BLACK_LIST } = require('./config');
const { copy } = require('./core.js');
const { generateDts } = require('./typescript');

// 在 dist 根目录生成快捷样式入口，方便用户直接引用
// 例如：@import '@tdesign/uniapp/theme.css'
const STYLE_SHORTCUTS = [
  {
    // css 直接复制
    source: 'common/style/theme/index.css',
    target: 'theme.css',
    type: 'copy',
  },
  {
    // less 使用 @import 引用，保留源码级使用能力
    target: 'theme.less',
    type: 'import',
    importPath: './common/style/theme/index.less',
  },
  {
    // 纯浅色模式 css（不含深色模式，不随系统主题切换）
    source: 'common/style/theme/index-light.css',
    target: 'theme-light.css',
    type: 'copy',
  },
  {
    // 纯浅色模式 less
    target: 'theme-light.less',
    type: 'import',
    importPath: './common/style/theme/index-light.less',
  },
];

function generateStyleShortcuts(targetDir) {
  for (const item of STYLE_SHORTCUTS) {
    const targetPath = path.resolve(targetDir, item.target);

    if (item.type === 'copy') {
      const sourcePath = path.resolve(targetDir, item.source);
      if (!fs.existsSync(sourcePath)) {
        console.warn(`⚠️  Style shortcut source not found: ${sourcePath}`);
        continue;
      }
      fs.copyFileSync(sourcePath, targetPath);
    } else if (item.type === 'import') {
      fs.writeFileSync(targetPath, `@import '${item.importPath}';\n`);
    }

    console.log(`[Style Shortcut] ${item.target} -> ${targetPath}`);

    // 生成对应的 .d.ts 声明文件，避免 TypeScript 导入时报类型错误
    const dtsPath = `${targetPath}.d.ts`;
    fs.writeFileSync(dtsPath, 'declare const styles: string;\nexport default styles;\n');
    console.log(`[Style Shortcut] ${item.target}.d.ts -> ${dtsPath}`);
  }
}

async function main() {
  const {
    targetDir,
    sourceGlob,
    sourceDir,

    chatTargetDir,
    chatSourceDir,
    chatSourceGlob,
  } = config;

  await prepareOne({
    targetDir,
    sourceGlob,
    sourceDir,
  });
  generateStyleShortcuts(targetDir);

  await prepareOne({
    targetDir: chatTargetDir,
    sourceGlob: chatSourceGlob,
    sourceDir: chatSourceDir,
  });
}

async function prepareOne({ targetDir, sourceGlob, sourceDir }) {
  deleteFolder(targetDir);
  const list = glob.sync(sourceGlob, {
    cwd: sourceDir,
    ignore: ['**/{node_modules,_example}/**/*', 'package.json'],
    nodir: true,
    dot: true,
  });

  for (const item of list) {
    const relativePath = path.relative(sourceDir, item);
    const isBlack = DIST_BLACK_LIST.some(black => relativePath.endsWith(black));
    if (isBlack) {
      continue;
    }
    const { relativeTargetByCwd, relativeSourceByCwd } = await copy({
      relativePath,
      filePath: item,
      config: {
        targetDir,
      },
    });
    console.log(`[Wrote] done! \nFrom ${relativeSourceByCwd} to ${relativeTargetByCwd}`);
  }

  console.log(`[Wrote] done! Length is ${list.length}!`);

  // 批量生成 .d.ts 声明文件
  generateDts(sourceDir, targetDir);
}

if (require.main === module) {
  main();
}

module.exports = {
  generateStyleShortcuts,
};
