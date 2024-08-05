const fs = require('fs');
const path = require('path');

const combine = {
  avatar: ['avatar-group', 'avatar'],
  cell: ['cell-group', 'cell'],
  collapse: ['collapse', 'collapse-panel'],
  'dropdown-menu': ['dropdown-menu', 'dropdown-item'],
  tag: ['tag', 'check-tag'],
  checkbox: ['checkbox-group', 'checkbox'],
  indexes: ['indexes', 'indexes-anchor'],
  picker: ['picker', 'picker-item'],
  radio: ['radio-group', 'radio'],
  'side-bar': ['side-bar', 'side-bar-item'],
  steps: ['steps', 'step-item'],
  swiper: ['swiper', 'swiper-nav'],
  tabs: ['tabs', 'tab-panel'],
  'tab-bar': ['tab-bar', 'tab-bar-item'],
  grid: ['grid', 'grid-item'],
};

function resolveCwd(...args) {
  args.unshift(process.cwd());
  return path.join(...args);
}

const COMPONENT_NAME = process.argv[process.argv.indexOf('--NAME') + 1]; // 在 --NAME 后面

const matchReg = /(?<=var).*?(?=;)/g;

// 使用 v2 文件夹下 _var.less 文件
const lessPath = [];
if (combine[COMPONENT_NAME]) {
  combine[COMPONENT_NAME].forEach((item) => {
    lessPath.push(resolveCwd(`src/${item}/${item}.less`));
  });
} else {
  lessPath.push(resolveCwd(`src/${COMPONENT_NAME}/${COMPONENT_NAME}.less`));
}

// 追加到文件
const cssVariableHeadContent = `\n\n### CSS Variables\n\n组件提供了下列 CSS 变量，可用于自定义样式。\n名称 | 默认值 | 描述 \n-- | -- | --\n`;
const cssVariableHeadContentEn = `\n\n### CSS Variables\n\nThe component provides the following CSS variables, which can be used to customize styles.\nName | Default Value | Description \n-- | -- | --\n`;

fs.appendFileSync(resolveCwd(`src/${COMPONENT_NAME}/README.md`), cssVariableHeadContent);
fs.appendFileSync(resolveCwd(`src/${COMPONENT_NAME}/README.en-US.md`), cssVariableHeadContentEn);

// 读取 less 文件内容
lessPath.forEach((item) => {
  if (fs.existsSync(item)) {
    fs.readFile(item, 'utf8', (err, file) => {
      if (err) {
        console.log('please execute npm run update:css first!', err);
        return;
      }
      const list = file.match(matchReg)?.sort();
      let cssVariableBodyContent = '';
      list?.forEach((item) => {
        cssVariableBodyContent += `${item.slice(1, item.indexOf(','))} | ${item.slice(
          item.indexOf(',') + 2,
          item.length - 1,
        )} | - \n`;
      });
      fs.appendFileSync(resolveCwd(`src/${COMPONENT_NAME}/README.md`), cssVariableBodyContent);
      fs.appendFileSync(resolveCwd(`src/${COMPONENT_NAME}/README.en-US.md`), cssVariableBodyContent);
    });
  }
});
