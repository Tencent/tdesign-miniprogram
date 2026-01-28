const fs = require('fs');
const path = require('path');
const { processLess } = require('./less');


async function copy({
  relativePath,
  filePath,
  config,
}) {
  const isDemo = relativePath.split(path.sep)[1] === '_example';

  let targetPath = path.resolve(config.targetDir, relativePath);

  if (isDemo && config.demoDir) {
    targetPath = path.resolve(config.demoDir, relativePath.replace(`${path.sep}_example`, ''));
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  let lessResult = false;
  if (!isDemo) {
    lessResult = await processLess(filePath, targetPath);
  }

  if (!lessResult) {
    fs.copyFileSync(filePath, targetPath);
  }

  const cwd = path.resolve(__dirname, '../../../../../');

  return {
    targetPath,
    isDemo,
    relativeTargetByCwd: path.relative(cwd, targetPath),
    relativeSourceByCwd: path.relative(cwd, filePath),
  };
}

module.exports = {
  copy,
};
