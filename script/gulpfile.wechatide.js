/* eslint-disable global-require */
/* eslint-disable no-console */
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

const wechatideConfig = {
  components: [],
  common: {
    properties: {},
    events: {},
  },
  menu: [],
};

const wechatideFolder = path.join(__dirname, '../_wechatide');

function isExistFile(path) {
  return fs.existsSync(path);
}

gulp.task('wechatide:components', (cb) => {
  const componentsFolder = fs.readdirSync(wechatideFolder);
  const src = path.resolve(__dirname, '../src');

  componentsFolder.forEach((componentName) => {
    const cmpInfoPath = `${wechatideFolder}/${componentName}`;
    const cmpInfo = fs.readFileSync(cmpInfoPath);
    const cmpInfoJson = JSON.parse(cmpInfo.toString());
    // 组件key值替换
    const cmpKey = componentName.split('.')[0];
    cmpInfoJson.key = `t-${cmpKey}`;

    const componentJsonFilePath = `${src}/${cmpKey}/${cmpKey}.json`;
    if (isExistFile(componentJsonFilePath)) {
      const componentJsonFile = fs.readFileSync(componentJsonFilePath);
      const componentJson = JSON.parse(componentJsonFile.toString());
      // console.log(componentJson.usingComponents);
      cmpInfoJson.require = componentJson.usingComponents;
    }

    wechatideConfig.components.push(cmpInfoJson);
  });

  cb();
});

gulp.task('wechatide:dep', (cb) => {});

gulp.task('wechatide:menu', (cb) => {
  cb();
});

gulp.task('wechatide:common', (cb) => {
  cb();
});

gulp.task('wechatide:generate', (cb) => {
  const base = path.join(__dirname, '../');
  const data = JSON.stringify(wechatideConfig, null, 2);
  fs.writeFileSync(`${base}/.wechatide.ib.json`, data);
  cb();
});

const generate = gulp.series(
  gulp.parallel('wechatide:common', 'wechatide:components', 'wechatide:menu'),
  'wechatide:generate',
);

module.exports = {
  generate,
  default: generate,
};
