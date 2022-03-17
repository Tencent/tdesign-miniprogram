/* eslint-disable global-require */
/* eslint-disable no-console */
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const replace = require('gulp-replace');

const wechatideConfig = {
  components: [],
  common: {
    properties: {},
    events: {},
  },
  menu: [],
};

const wechatideFolder = path.join(__dirname, '../_wechatide');
// 预处理，将miniprogram_npm中的props.js的es module转换commonjs导出存在_wechatide中，方便后续用require引入
gulp.task('wechatide:pre', (cb) => {
  gulp
    .src(['miniprogram_dist/**/props.js'])
    .pipe(replace('export default props', 'module.exports = props'))
    .pipe(gulp.dest(wechatideFolder));

  cb();
});

function isExistFile(path) {
  return fs.existsSync(path);
}

gulp.task('wechatide:components', (cb) => {
  // 读取miniprogram_dist而不读取src是因为miniprogram_dist中ts文件已经转化成js文件。
  const base = path.join(__dirname, '../miniprogram_dist');
  const src = path.join(__dirname, '../src');

  const componentsFolder = fs.readdirSync(src);

  componentsFolder.forEach((componentName) => {
    // 获取组件key的值
    const component = {
      key: `t-${componentName}`,
      icon: '',
      label: '',
      properties: [],
      require: {},
    };

    // 处理props.js 获取properties
    const componentPropsFilePath = `${wechatideFolder}/${componentName}/props.js`;
    if (isExistFile(componentPropsFilePath)) {
      // eslint-disable-next-line global-require
      const componentProps = require(componentPropsFilePath);
      Object.keys(componentProps).forEach((key) => {
        const property = {};
        property.key = key;
        property.defaultValue = componentProps[key].value;
        component.properties.push(property);
      });
    }

    // 处理组件json文件
    const componentJsonFilePath = `${base}/${componentName}/${componentName}.json`;
    if (isExistFile(componentJsonFilePath)) {
      const componentJsonFile = fs.readFileSync(componentJsonFilePath);
      const componentJson = JSON.parse(componentJsonFile.toString());
      // console.log(componentJson.usingComponents);
      component.require = componentJson.usingComponents;
    }

    wechatideConfig.components.push(component);
    // console.log(component);
  });

  cb();
});

gulp.task('wechatide:menu', (cb) => {
  cb();
});

gulp.task('wechatide:common', (cb) => {
  cb();
});

gulp.task('wechatide:generate', (cb) => {
  const base = path.join(__dirname, '../');
  const data = JSON.stringify(wechatideConfig, null, 4);
  fs.writeFileSync(`${base}/.wechatide.ib.json`, data);
  cb();
});

const generate = gulp.series(
  'wechatide:pre',
  gulp.parallel('wechatide:common', 'wechatide:components', 'wechatide:menu'),
  'wechatide:generate',
);

module.exports = {
  generate,
  default: generate,
};
