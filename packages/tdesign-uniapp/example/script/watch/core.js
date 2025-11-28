const fs = require('fs');
const path = require('path');
const { processLess } = require('../release/less');


async function copy({
  relativePath, filePath, config,
}) {
  const isDemo = relativePath.split(path.sep)[1] === '_example';
  const isCommon = relativePath.split(path.sep)[0] === 'common';
  let targetPath = path.resolve(config.targetDir, relativePath);
  let targetPathInApp = path.resolve(config.appDir, 'uni_modules/tdesign-uniapp/components', relativePath);
  const rawTargetPath = path.resolve(config.rawTargetDir, relativePath);
  const rawTargetPathInApp = path.resolve(config.rawTargetDirInApp, relativePath);

  if (isCommon) {
    fs.mkdirSync(path.dirname(rawTargetPath), { recursive: true });
    fs.mkdirSync(path.dirname(rawTargetPathInApp), { recursive: true });
    fs.copyFileSync(filePath, rawTargetPath);
    fs.copyFileSync(filePath, rawTargetPathInApp);
  }


  if (isDemo) {
    targetPath = path.resolve(config.demoDir, relativePath.replace(`${path.sep}_example`, ''));
    targetPathInApp = path.resolve(config.appPagesMoreDir, relativePath.replace(`${path.sep}_example`, ''));
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  if (targetPathInApp) {
    fs.mkdirSync(path.dirname(targetPathInApp), { recursive: true });
  }

  let lessResult = false;
  if (!filePath.includes('_example')) {
    lessResult = await processLess(filePath, targetPath, targetPathInApp);
  }

  if (!lessResult) {
    fs.copyFileSync(filePath, targetPath);
    if (targetPathInApp) {
      fs.copyFileSync(filePath, targetPathInApp);
    }
  }

  return {
    targetPath,
    isDemo,
    relativeTargetByCwd: path.relative(process.cwd(), targetPath),
    relativeSourceByCwd: path.relative(process.cwd(), filePath),
  };
}

module.exports = {
  copy,
};
