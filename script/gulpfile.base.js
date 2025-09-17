const path = require('path');
const gulp = require('gulp');
const del = require('del');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const gulpTs = require('gulp-typescript');
const merge2 = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const gulpLess = require('gulp-less');
const cssmin = require('gulp-clean-css');
const gulpInsert = require('gulp-insert');
const jsmin = require('gulp-terser');
const jsonmin = require('gulp-jsonminify');
const wxmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const replaceTask = require('gulp-replace-task');
const mpNpm = require('gulp-mp-npm');
const gulpIf = require('gulp-if');

const config = require('./config');

const baseCssPath = path.resolve(__dirname, '../packages/components/common/style/index.wxss');

const isProduction = process.env.NODE_ENV === 'production';

const mpNpmOptions = { fullExtract: ['tdesign-miniprogram/common'] };

// set displayName
const setDisplayName = (tasks, moduleName) => {
  Object.keys(tasks).forEach((key) => {
    if (!tasks[key].displayName) {
      tasks[key].displayName = moduleName ? `${moduleName}:${key}` : key;
    }
  });
};

const isJsonFile = (file) => {
  return file.path.endsWith('.json');
};

// generate config replace task
const generateConfigReplaceTask = (replaceConfig, options = {}) => {
  return replaceTask({
    patterns: Object.entries(replaceConfig).map(([key, value]) => ({
      match: key,
      replacement: options.stringify ? JSON.stringify(value) : value,
    })),
    usePrefix: false,
  });
};

const isProComponent = (dir) => {
  return dir === 'packages/pro-components';
};

const isBaseComponent = (dir) => {
  return dir === 'packages/components';
};

const isComponent = (dir) => {
  return isBaseComponent(dir) || isProComponent(dir);
};

/* return gulpfile base tasks */
module.exports = (src, dist, moduleName) => {
  const tsProject = gulpTs.createProject('tsconfig.json', {
    declaration: isComponent(src),
    removeComments: isProduction,
    importHelpers: true,
    noEmitHelpers: true,
  });

  // options
  const ignore = ['**/__test__/**', '**/_example/**', '**/node_modules/**', '**/package.json'];
  const srcOptions = { base: src, ignore };
  const watchOptions = { events: ['add', 'change'] };
  const gulpErrorPath = 'packages/tdesign-miniprogram/example/utils/gulpError.js';

  // 文件匹配路径
  const globs = {
    wxml: `${src}/**/*.wxml`, // 匹配 wxml 文件
    ts: `${src}/**/*.ts`, // 匹配 ts 文件
    js: `${src}/**/*.js`, // 匹配 js 文件
    wxs: `${src}/**/*.wxs`, // 匹配 wxs 文件
    json: [`${src}/**/*.json`], // 匹配 json 文件
    less: `${src}/**/*.less`, // 匹配 less 文件
    wxss: `${src}/**/*.wxss`, // 匹配 wxss 文件
    md: `${src}/**/*.md`, // 匹配 md 文件
  };

  // 匹配需要拷贝的文件
  globs.copy = [
    `${src}/**`,
    `!${globs.wxml}`,
    `!${globs.ts}`,
    `!${globs.js}`,
    `!${globs.wxs}`,
    `!${globs.json}`,
    `!${globs.less}`,
    `!${globs.wxss}`,
    `!${globs.md}`,
    '!**/_example/**',
  ];

  // 包装 gulp.lastRun, 引入文件 ctime 作为文件变动判断另一标准
  // https://github.com/gulpjs/vinyl-fs/issues/226
  const since = (task) => (file) => gulp.lastRun(task) > file.stat.ctime ? gulp.lastRun(task) : 0;

  /* tasks */
  const tasks = {};

  /** `gulp replacePaths`
   * 统一处理 pro-components 的路径替换，保证组件复制到 example/miniprogram-dist 后，路径正确
   * */
  tasks.replacePaths = () => {
    return gulpIf(
      isProComponent(src),
      replace(/(\.\.\/components\/|tdesign-miniprogram)/g, (match) => {
        return match.includes('components') ? '' : '..';
      }),
    );
  };

  /** `gulp clear`
   * 清理文件
   * */
  tasks.clear = () => del(`${dist}/**`);

  /** `gulp handleError`
   * 输出错误到小程序
   * */
  tasks.handleError = (err) =>
    gulp
      .src(gulpErrorPath, { base: 'packages/tdesign-miniprogram/example' })
      .pipe(replace('gulpErrorPlaceHolder', err))
      .pipe(gulp.dest('_example/'));

  /** `gulp resetError`
   * 重置gulpError
   * */
  tasks.resetError = () =>
    gulp
      .src(gulpErrorPath, { base: 'packages/tdesign-miniprogram/example', allowEmpty: true })
      .pipe(gulp.dest('_example/'));

  /** `gulp copy`
   * 清理
   * */
  tasks.copy = () =>
    gulp
      .src(globs.copy, { ...srcOptions, since: since(tasks.copy) })
      .pipe(changed(dist)) // 过滤掉未改变的文件
      .pipe(gulp.dest(dist));

  /** `gulp wxml`
   * 处理 wxml
   * */
  tasks.wxml = () =>
    gulp
      .src(globs.wxml, { ...srcOptions, since: since(tasks.wxml) })
      .pipe(
        gulpIf(
          isComponent(src) && isProduction,
          wxmlmin({
            removeComments: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
            caseSensitive: true,
          }),
        ),
      )
      .pipe(gulp.dest(dist));

  /** `gulp ts`
   * 处理ts
   * */
  tasks.ts = () => {
    const tsResult = gulp
      .src(globs.ts, srcOptions)
      .pipe(
        plumber({
          errorHandler: (err) => {
            tasks.handleError(err.message);
          },
        }),
      )
      .pipe(generateConfigReplaceTask(config, { stringify: true }))
      .pipe(gulpIf(!isProduction, sourcemaps.init()))
      .pipe(tsProject()); // 编译ts

    return merge2(
      tsResult.js
        .pipe(mpNpm())
        .pipe(tasks.replacePaths())
        .pipe(gulpIf(isComponent(src) && isProduction, jsmin()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist)),
      tsResult.dts.pipe(gulp.dest(dist)), // 直接输出.d.ts文件
    );
  };

  /** `gulp js`
   * 处理js
   * */
  tasks.js = () =>
    gulp
      .src(globs.js, { ...srcOptions, since: since(tasks.js) })
      .pipe(generateConfigReplaceTask(config, { stringify: true }))
      .pipe(mpNpm())
      .pipe(gulpIf(isComponent(src) && isProduction, jsmin()))
      .pipe(gulp.dest(dist));

  /** `gulp wxs`
   * 处理wxs
   * */
  tasks.wxs = () =>
    gulp
      .src(globs.wxs, { ...srcOptions, since: since(tasks.wxs) })
      .pipe(tasks.replacePaths())
      .pipe(generateConfigReplaceTask(config, { stringify: true }))
      .pipe(gulp.dest(dist));

  /** `gulp json`
   * 处理json
   * */
  tasks.json = () =>
    gulp
      .src(globs.json, { ...srcOptions, dot: true, since: since(tasks.json) })
      .pipe(mpNpm(mpNpmOptions))
      .pipe(tasks.replacePaths())
      .pipe(gulpIf(isComponent(src) && isProduction && isJsonFile, jsonmin()))
      .pipe(gulp.dest(dist));

  /** `gulp less`
   * 处理less
   * */
  tasks.less = () =>
    gulp
      .src(globs.less, { ...srcOptions, since: since(tasks.less) })
      .pipe(
        plumber({
          errorHandler: (err) => {
            console.log(err);
            tasks.handleError(err.message);
          },
        }),
      )
      .pipe(generateConfigReplaceTask(config, { stringify: false }))
      .pipe(gulpIf(!isProduction, sourcemaps.init()))
      .pipe(gulpLess()) // 编译less
      .pipe(
        gulpIf(
          isComponent(src) && isProduction,
          cssmin({
            compatibility: 'ie9',
            format: {
              semicolonAfterLastProperty: true,
              breaks: {
                afterAtRule: true,
                afterRuleEnds: true,
                afterBlockBegins: true,
                afterBlockEnds: true,
              },
            },
          }),
        ),
      )
      .pipe(
        gulpIf(
          isComponent(src),
          gulpInsert.transform((contents, file) => {
            if (!file.path.includes(`components${path.sep}common`)) {
              const relativePath = path
                .relative(path.normalize(`${file.path}${path.sep}..`), baseCssPath)
                .replace(/\\/g, '/')
                .replace(/\.\.\/components\//g, '');
              contents = `@import '${relativePath}';${contents}`;
            }
            return contents;
          }),
        ),
      )
      .pipe(rename({ extname: '.wxss' }))
      .pipe(gulpIf(!isProduction, sourcemaps.write('.')))
      .pipe(gulp.dest(dist));

  /** `gulp wxss`
   * 处理wxss
   * */
  tasks.wxss = () => gulp.src(globs.wxss, { ...srcOptions, since: since(tasks.wxss) }).pipe(gulp.dest(dist));

  /** `gulp common`
   * 拷贝common中样式
   */
  tasks.common = () => gulp.src(globs.wxss, { ...srcOptions, since: since(tasks.wxss) }).pipe(gulp.dest(dist));

  // set displayName
  setDisplayName(tasks, moduleName);

  /** `gulp build`
   * 构建
   * */
  tasks.build = gulp.series(
    tasks.clear,
    tasks.resetError,
    gulp.parallel(tasks.copy, tasks.wxml, tasks.ts, tasks.js, tasks.wxs, tasks.json, tasks.less, tasks.wxss),
  );

  /** `gulp watch`
   * 监听
   * */
  tasks.watch = () => {
    gulp.watch(globs.copy, watchOptions, tasks.copy);
    gulp.watch(globs.wxml, watchOptions, tasks.wxml);
    gulp.watch(globs.ts, watchOptions, gulp.series(tasks.resetError, tasks.ts));
    gulp.watch(globs.js, watchOptions, tasks.js);
    gulp.watch(globs.wxs, watchOptions, tasks.wxs);
    gulp.watch(globs.json, watchOptions, tasks.json);
    gulp.watch(globs.less, watchOptions, gulp.series(tasks.resetError, tasks.less));
    gulp.watch(globs.wxss, watchOptions, tasks.wxss);
  };

  // set displayName again
  setDisplayName(tasks, moduleName);

  return tasks;
};
