const fs = require('fs');
const path = require('path');
const { processLess } = require('./less');


async function copy({
  relativePath,
  filePath,
  config,
}) {
  // 兼容 Windows：glob 返回 / 分隔的路径，统一用 / 分割
  const normalizedRelativePath = relativePath.split(path.sep).join('/');
  const isDemo = normalizedRelativePath.split('/')[1] === '_example';

  let targetPath = path.resolve(config.targetDir, relativePath);

  if (isDemo && config.demoDir) {
    targetPath = path.resolve(config.demoDir, relativePath.replace(`${path.sep}_example`, '').replace('/_example', ''));
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
