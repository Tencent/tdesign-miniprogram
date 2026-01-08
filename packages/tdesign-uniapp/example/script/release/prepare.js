const path = require('path');
const glob = require('glob');
const { deleteFolder } = require('t-comm');

const { config } = require('./config');
const { copy } = require('./core.js');

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
    const { relativeTargetByCwd, relativeSourceByCwd } = await copy({
      relativePath,
      filePath: item,
      config: {
        targetDir,
        sourceGlob,
        sourceDir,
      },
    });
    console.log(`[Wrote] done! \nFrom ${relativeSourceByCwd} to ${relativeTargetByCwd}`);
  }

  console.log(`[Wrote] done! Length is ${list.length}!`);
}

main();
