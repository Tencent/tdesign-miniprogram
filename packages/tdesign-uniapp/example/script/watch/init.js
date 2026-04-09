const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { deleteFolder } = require('t-comm');

const { config } = require('./config');
const { copyComponents, checkVue2CliExist, checkVue3HxExist } = require('./helper');


async function copyOneProject({
  globMode,
  sourceDir,
  isChat,
}) {
  const list = glob.sync(globMode, {
    ignore: '**/node_modules/**/*',
    nodir: true,
  }).filter(item => !item.includes('node_modules'));

  for (const item of list) {
    const relativePath = path.relative(sourceDir, item);
    await copyComponents({
      relativePath,
      filePath: item,
      isChat,
    });
  }

  console.log(`[Wrote] done! Length is ${list.length}!`);
}

function clearTargetDir() {
  deleteFolder(config.componentTargetDirInVue3Cli);
  deleteFolder(config.componentTargetDirInApp);

  deleteFolder(config.pagesMoreDirInVue3Cli);
  deleteFolder(config.pagesMoreDirInApp);

  if (checkVue2CliExist()) {
    deleteFolder(config.componentTargetDirInVue2Cli);
    deleteFolder(config.pagesMoreDirInVue2Cli);
  }

  if (checkVue3HxExist()) {
    deleteFolder(config.componentTargetDirInVue3Hx);
    deleteFolder(config.pagesMoreDirInVue3Hx);
  }
}


async function main() {
  await clearTargetDir();

  await copyInfra({
    infraDir: config.infraDirInApp,
  });

  if (checkVue2CliExist()) {
    await copyInfra({
      infraDir: config.infraDirInVue2Cli,
    });
  }

  if (checkVue3HxExist()) {
    await copyInfra({
      infraDir: config.infraDirInVue3Hx,
    });
  }

  await copyOneProject({
    globMode: config.sourceGlob,
    sourceDir: config.sourceDir,
    isChat: false,
  });

  await copyOneProject({
    globMode: config.chatSourceGlob,
    sourceDir: config.chatSourceDir,
    isChat: true,
  });
}


async function copyInfra({
  infraDir,
}) {
  const list = glob.sync([config.demoPagesGlob], {
    ignore: '**/node_modules/**/*',
    nodir: true,
  });

  for (const item of list) {
    const relativePath = path.relative(path.resolve(config.vue3CliRoot, 'src'), item);

    const targetPath = path.resolve(infraDir, relativePath);

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(item, targetPath);
  }

  console.log(`[Wrote] done! Length of App Files is ${list.length}!`);
}


main();
