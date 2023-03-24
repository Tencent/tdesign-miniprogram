/* eslint-disable no-console */
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const config = require('./config.js');

const wechatideConfig = {
  key: 'TDesign',
  label: 'Tdesign',
  components: {},
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

  const tplConfigPath = path.resolve(__dirname, './tpl.json');
  const tplConfigPathJsonFile = fs.readFileSync(tplConfigPath);
  const componentJson = JSON.parse(tplConfigPathJsonFile.toString());

  // 根据生成的组件信息转换整合成配置文件内容
  componentsFolder.forEach((componentName) => {
    const cmpInfoPath = `${wechatideFolder}/${componentName}`;
    const cmpInfo = fs.readFileSync(cmpInfoPath);
    const cmpInfoJson = JSON.parse(cmpInfo.toString());
    const componentFileName = componentName.split('.')[0];
    // 组件key值替换
    const cmpKey = `t-${componentFileName}`;
    const configJson = componentJson[cmpKey];

    // 如果tpl.json文件没有录入的组件信息
    if (!configJson) {
      console.log(`组件${cmpKey}没有录入tpl.json文件，请注意查看组件是否存在`);
      return;
    }

    // 组件的key、icon、tpl、require替换
    cmpInfoJson.key = cmpKey;
    cmpInfoJson.icon = configJson.icon || '';
    cmpInfoJson.tpl = configJson.tpl || undefined;
    cmpInfoJson.require = configJson.require || undefined;

    // 获取组件path，可能在父组件目录下
    if (isExistFile(`${src}/${componentFileName}/${componentFileName}.ts`)) {
      cmpInfoJson.path = `./${componentFileName}/${componentFileName}`;
    } else {
      const srcFolder = fs.readdirSync(src);
      srcFolder.forEach((cmp) => {
        if (isExistFile(`${src}/${cmp}/${componentFileName}.ts`)) {
          cmpInfoJson.path = `./${cmp}/${componentFileName}`;
        }
      });
    }

    wechatideConfig.components[cmpKey] = cmpInfoJson;
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
            components: [`${config.CONFIG_PREFIX}-${subItem.name.replace(/([A-Z])/g, '-$1').toLowerCase()}`],
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
  const base = path.join(__dirname, '../src');
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
