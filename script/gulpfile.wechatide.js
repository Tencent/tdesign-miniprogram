/* eslint-disable global-require */
/* eslint-disable no-console */
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const replace = require('gulp-replace');
const { start } = require('repl');
const axios = require('axios');
const del = require('del');

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

const clear = async () => {
  await del(wechatideFolder);
};

function isExistFile(path) {
  return fs.existsSync(path);
}

// 将获取到的数据写入_wechatide文件
function outputToFile(outputPath, res) {
  return new Promise((resolve, reject) => {
    const outputFilePath = path.resolve(__dirname, outputPath);
    if (!isExistFile(wechatideFolder)) {
      fs.mkdir(wechatideFolder, { recursive: true }, (error) => {
        if (error) {
          reject();
        }
        fs.writeFile(outputFilePath, JSON.stringify(res.data, null, 2), (err) => {
          if (err) {
            reject();
            return console.error(err);
          }
          console.log(`${outputPath} has been created`);
          resolve();
        });
      });
    }
  });
}

// 获取下载数据
function download() {
  return new Promise((resolve, reject) => {
    const url = [9, 134, 52, 96].join('.');
    Promise.all([
      // 请求 map
      axios.request({
        method: 'get',
        url: `http://${url}/cmp/map`,
        // url: 'http://radosgw.open.oa.com/bkicon-default-9/tdesign-web-0.0.2/fonts/iconcool.json',
      }),
      axios.request({
        method: 'get',
        url: `http://${url}/cmp/api?page=1&page_size=3000`,
      }),
    ]).then(
      ([mapRes, apiRes]) => {
        console.log('请求数据成功');
        Promise.all([
          outputToFile(`${wechatideFolder}/map.json`, mapRes),
          outputToFile(`${wechatideFolder}/api.json`, apiRes),
        ]).then(
          () => {
            console.log('\n数据写入成功\n');
            resolve();
          },
          () => {
            console.log('数据写入失败');
            reject();
          },
        );
      },
      () => {
        console.log('数据下载失败');
        reject();
      },
    );
  });
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

    // 读取md文件获取组件label属性
    const componentMdFilePath = `${src}/${componentName}/README.md`;
    if (isExistFile(componentMdFilePath)) {
      const componentMdFile = fs.readFileSync(componentMdFilePath);
      const componentMd = componentMdFile.toString('utf-8');
      const patternInfo = /(?<=(\-{3}\n))[\s\S]*?(?=\-{3})/;
      const componentInfo = componentMd.match(patternInfo)[0];
      const patterLabel = /[\u4e00-\u9fa5]+/;
      const label = componentInfo.match(patterLabel)[0];
      // console.log('🚀 ~ label', label);
      component.label = label;
    }

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

gulp.task('wechatide:download', async (cb) => {
  await clear();
  download();
  cb();
});

gulp.task('wechatide:create', (cb) => {
  const dataMapFilePath = `${wechatideFolder}/map.json`;
  const dataApiFilePath = `${wechatideFolder}/api.json`;
  const map = require(dataMapFilePath);
  console.log('🚀 ~ map', map);
  const { data } = require(dataApiFilePath);
  console.log('🚀 ~ data', data);
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
  'wechatide:create',
  // 'wechatide:pre',
  // gulp.parallel('wechatide:common', 'wechatide:components', 'wechatide:menu'),
  // 'wechatide:generate',
);

module.exports = {
  generate,
  default: generate,
};
