const fs = require('fs');
const path = require('path');

const { config } = require('./config');
const { copy } = require('../release/core');

// 不同步到 vue3-hx 的文件黑名单
const VUE3_HX_BLACK_LIST = [
  'package.json',
  'tsconfig.eslint.json',
];

function isInVue3HxBlackList(relativePath) {
  const fileName = path.basename(relativePath);
  return VUE3_HX_BLACK_LIST.includes(fileName);
}


async function copyComponents({
  relativePath,
  filePath,
  isChat,
}) {
  const {
    relativeTargetByCwd,
    relativeSourceByCwd,
  } = await copy({
    relativePath,
    filePath,
    config: {
      targetDir: config.componentTargetDirInVue3Cli,
      demoDir: config.pagesMoreDirInVue3Cli,
    },
  });

  await copy({
    relativePath,
    filePath,
    config: {
      targetDir: config.componentTargetDirInApp,
      demoDir: config.pagesMoreDirInApp,
    },
  });

  if (checkVue2CliExist()) {
    await copy({
      relativePath,
      filePath,
      config: {
        targetDir: config.componentTargetDirInVue2Cli,
        demoDir: config.pagesMoreDirInVue2Cli,
      },
    });
  }

  if (checkVue2HxExist()) {
    await copy({
      relativePath,
      filePath,
      config: {
        targetDir: isChat
          ? config.componentChatTargetDirInVue2Hx
          : config.componentTargetDirInVue2Hx,
        demoDir: config.pagesMoreDirInVue2Hx,
      },
    });
  }

  if (checkVue3HxExist() && !isInVue3HxBlackList(relativePath)) {
    await copy({
      relativePath,
      filePath,
      config: {
        targetDir: isChat
          ? config.componentChatTargetDirInVue3Hx
          : config.componentTargetDirInVue3Hx,
        demoDir: config.pagesMoreDirInVue3Hx,
      },
    });
  }

  return {
    relativeTargetByCwd,
    relativeSourceByCwd,
  };
}


function checkVue2CliExist() {
  return fs.existsSync(config.vue2CliRoot);
}

function checkVue2HxExist() {
  return fs.existsSync(config.vue2HxRoot);
}

function checkVue3HxExist() {
  return fs.existsSync(config.vue3HxRoot);
}

module.exports = {
  copyComponents,
  checkVue2CliExist,
  checkVue2HxExist,
  checkVue3HxExist,
};
