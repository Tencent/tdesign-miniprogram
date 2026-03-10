const fs = require('fs');

const { config } = require('./config');
const { copy } = require('../release/core');


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

  if (checkVue3HxExist()) {
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

function checkVue3HxExist() {
  return fs.existsSync(config.vue3HxRoot);
}

module.exports = {
  copyComponents,
  checkVue2CliExist,
  checkVue3HxExist,
};
