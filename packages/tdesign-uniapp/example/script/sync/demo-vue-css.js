// demo 中 css 纳入 vue
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const { writeFileSync, readFileSync  } = require('t-comm');

const config = {
  target: path.resolve(__dirname, '../../../tdesign'),
  source: path.resolve(__dirname, '../../../../../tdesign-miniprogram/packages/components'),
};

function parseOne(file) {
  const filename = path.basename(file, path.extname(file));
  const vuePath = path.resolve(path.dirname(file), `${filename}.vue`);
  const content = readFileSync(vuePath);

  if (content.includes('@import \'./index.css\';')) {
    const sassContent = readFileSync(file);
    const newVueContent = content.replace('@import \'./index.css\';\n', sassContent);
    writeFileSync(vuePath, newVueContent);

    if (!sassContent.trim()) {
      fs.unlinkSync(file);
    }
  }
}

function main() {
  const list = glob.sync(`${config.target}/*/_example/*/*.css`, {
    ignore: '**/node_modules/**/*',
    nodir: true,
  });

  list.slice(0, 1000).forEach(parseOne);
  console.log('[Parsed] Wrote!');
}

main();
