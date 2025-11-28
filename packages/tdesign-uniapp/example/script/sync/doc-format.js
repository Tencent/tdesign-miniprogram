// 格式化文档，去掉多余空格
const glob = require('glob');
const path = require('path');

const { writeFileSync, readFileSync  } = require('t-comm');

const config = {
  target: path.resolve(__dirname, '../../../tdesign'),
  source: path.resolve(__dirname, '../../../../../tdesign-miniprogram/packages/components'),
};

function cpLess(file) {
  const content = readFileSync(file);
  const reg = /([\s\S]+?)(##\s+API[\s\S]+)/;

  const newContent = content.replace(reg, (_, a, b) => {
    const result = a + b.replace(/[^\S\r\n]+/g, ' ');
    return result;
  });

  console.log('==', file, newContent === content);

  writeFileSync(file, newContent);
}

function main() {
  const list = glob.sync(`${config.target}/*/README.en-US.md`);
  list.slice(0, 100).forEach(cpLess);
  console.log('[less] Wrote!');
}

main();
