// 拷贝组件文档
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const { writeFileSync, readFileSync  } = require('t-comm');

const config = {
  target: path.resolve(__dirname, '../../../tdesign'),
  source: path.resolve(__dirname, '../../../../../tdesign-miniprogram/packages/components'),
};

function cpFile(file) {
  const list = file.split(path.sep);
  const componentName = list[list.length - 2];

  const filename = path.basename(file);
  const targetPath = path.resolve(config.target, componentName, filename);

  if (fs.existsSync(path.dirname(targetPath))) {
    writeFileSync(targetPath, readFileSync(file));
  }
}

function main() {
  const list = glob.sync(`${config.source}/*/*.md`);
  list.forEach(cpFile);
  console.log('[less] Wrote!');
}

main();
