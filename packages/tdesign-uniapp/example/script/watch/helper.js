const fs = require('fs');

const { config } = require('./config');
const { copy } = require('../release/core');


async function copyComponents({
  relativePath,
  filePath,
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

    return {
      relativeTargetByCwd,
      relativeSourceByCwd,
    };
  }
}


function checkVue2CliExist() {
  return fs.existsSync(config.vue2CliRoot);
}

module.exports = {
  copyComponents,
  checkVue2CliExist,
};
