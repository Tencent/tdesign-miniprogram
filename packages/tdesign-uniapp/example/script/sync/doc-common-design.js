// 拷贝组件设计指南

const glob = require('glob');
const path = require('path');

const { writeFileSync, readFileSync  } = require('t-comm');

const config = {
  target: path.resolve(__dirname, '../../../site/docs/design'),
  source: path.resolve(__dirname, '../../../../../tdesign-miniprogram/packages/common/docs/mobile/design'),
};

function cpFile(file) {
  const filename = path.basename(file);
  const targetPath = path.resolve(config.target, filename);

  writeFileSync(targetPath, readFileSync(file));
}

function main() {
  const list = glob.sync(`${config.source}/*.md`);
  list.forEach(cpFile);
  console.log('[less] Wrote!');
}

main();
