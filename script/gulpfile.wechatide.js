/* eslint-disable no-console */
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const config = require('./config.js');

const wechatideConfig = {
  components: [],
  common: {
    properties: {},
    events: {},
  },
  menu: [],
};

const menuConfig = [
  { key: 'basic', label: '基础' },
  { key: 'nav', label: '导航' },
  { key: 'input', label: '输入' },
  { key: 'data', label: '数据展示' },
  { key: 'info', label: '消息提醒' },
];

const wechatideFolder = path.join(__dirname, '../_wechatide');

function isExistFile(path) {
  return fs.existsSync(path);
}

// 生成配置文件内容
gulp.task('wechatide:components', (cb) => {
  const componentsFolder = fs.readdirSync(wechatideFolder);
  const src = path.resolve(__dirname, '../src');

  // 根据生成的组件信息转换整合成配置文件内容
  componentsFolder.forEach((componentName) => {
    const cmpInfoPath = `${wechatideFolder}/${componentName}`;
    const cmpInfo = fs.readFileSync(cmpInfoPath);
    const cmpInfoJson = JSON.parse(cmpInfo.toString());
    // 组件key值替换
    const cmpKey = componentName.split('.')[0];
    cmpInfoJson.key = `t-${cmpKey}`;

    let componentJsonFilePath = `${src}/${cmpKey}/${cmpKey}.json`;
    // 获取存放在父组件目录中的子组件json文件地址
    const srcFolder = fs.readdirSync(src);
    srcFolder.forEach((cmp) => {
      if (isExistFile(`${src}/${cmp}/${cmpKey}.json`)) {
        componentJsonFilePath = `${src}/${cmp}/${cmpKey}.json`;
      }
    });

    // 获取到组件依赖组件并录入json
    if (isExistFile(componentJsonFilePath)) {
      const componentJsonFile = fs.readFileSync(componentJsonFilePath);
      const componentJson = JSON.parse(componentJsonFile.toString());
      // usingComponents为空时忽略
      if (componentJson.usingComponents && Object.keys(componentJson.usingComponents).length > 0) {
        cmpInfoJson.require = componentJson.usingComponents;
      }
    }

    wechatideConfig.components.push(cmpInfoJson);
  });

  cb();
});

// 预留添加 menu 内容
gulp.task('wechatide:menu', (cb) => {
  const menuFilePath = path.resolve(__dirname, '../site/site.config.mjs');
  (async () => {
    await import(menuFilePath).then((data) => {
      data.default.docs.forEach((item) => {
        if (item.type !== 'component') return;
        const menuFirst = { key: '', label: '', submenu: [] };
        const { key } = menuConfig.find((i) => i.label === item.title);
        menuFirst.key = `menu-${key}`;
        menuFirst.label = item.title;
        menuFirst.submenu = item.children.map((subItem) => {
          return {
            key: `subMenu-${subItem.name}`,
            label: subItem.title,
            components: [
              `${config.CONFIG_PREFIX}-${subItem.name.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
            ],
          };
        });
        wechatideConfig.menu.push(menuFirst);
      });
      cb();
    });
  })();
});

// 预留添加 common 内容
// gulp.task('wechatide:common', (cb) => {
//   cb();
// });

// 生成配置文件
gulp.task('wechatide:generate', (cb) => {
  const base = path.join(__dirname, '../');
  const data = JSON.stringify(wechatideConfig, null, 2);
  fs.writeFileSync(`${base}/.wechatide.ib.json`, data);
  cb();
});

// 文件生成调用入口
const generate = gulp.series(
  gulp.parallel('wechatide:components', 'wechatide:menu'),
  // gulp.parallel('wechatide:common', 'wechatide:components', 'wechatide:menu'),
  'wechatide:generate',
);

module.exports = {
  generate,
  default: generate,
};
