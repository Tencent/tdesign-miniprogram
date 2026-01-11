const path = require('path');
const gulp = require('gulp');
const del = require('del');
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const gulpLess = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const base = require('./gulpfile.base');

const EXAMPLE_TYPE = process.env.TYPE || 'all';
const SKIP_SKYLINE = process.env.SKIP_SKYLINE || false;

const PACKAGE_NAME = 'tdesign-miniprogram';

/* config */
const src = 'packages/tdesign-miniprogram/example';
const dist = '_example';

/* base tasks */
const { clear, build: baseBuild, watch: baseWatch, handleError, resetError } = base(src, dist, 'example');

// src component examples
const baseExamplePaths = ['packages/components/**/_example/**/*.*'];
const chatExamplePaths = ['packages/pro-components/chat/**/_example/**/*.*'];
const skylineFilter = SKIP_SKYLINE ? ['!**/skyline/**/*.*'] : [];

const srcExampleInput = {
  base: [...baseExamplePaths, ...skylineFilter],
  chat: [...chatExamplePaths, ...skylineFilter],
  all: [...baseExamplePaths, ...chatExamplePaths, ...skylineFilter],
};

const srcExampleOutput = 'packages/tdesign-miniprogram/example/pages';

const copySrcExample = (type = 'all') => {
  return gulp
    .src(srcExampleInput[type])
    .pipe(changed(srcExampleOutput))
    .pipe(
      rename((path) => {
        const { dirname, extname } = path;
        const [, realDir] = dirname.split('_example');
        const reg = /^([\w-]+)/.exec(dirname);
        const component = reg ? reg[1] : '';

        path.dirname = component + (extname ? realDir : '');
      }),
    )
    .pipe(gulp.dest(srcExampleOutput));
};

const cleanSrcExample = () => del([`${srcExampleOutput}/**`, `!${srcExampleOutput}/{home,gulp-error}/**`]);

const watchSrcExample = (type = 'all') => {
  return gulp.watch(srcExampleInput[type], () => copySrcExample(type));
};

// 包装 gulp.lastRun, 引入文件 ctime 作为文件变动判断另一标准
// https://github.com/gulpjs/vinyl-fs/issues/226
const since = (task) => (file) => gulp.lastRun(task) > file.stat.ctime ? gulp.lastRun(task) : 0;

/** `gulp syncDist`
 * 将 packages/tdesign-miniprogram/miniprogram_dist 同步至 _example/miniprogram_npm
 * */
const input = 'packages/tdesign-miniprogram/miniprogram_dist';
const output = `_example/miniprogram_npm/${PACKAGE_NAME}`;
const syncDist = () =>
  gulp
    .src(`${input}/**`, { base: input, since: since(syncDist) })
    .pipe(changed(output)) // 过滤掉未改变的文件
    .pipe(gulp.dest(output));

/** `gulp watchDist`
 * 监听 packages/tdesign-miniprogram/miniprogram_dist
 * */
const watchDist = () => gulp.watch(`${input}/**`, syncDist);
watchDist.displayName = 'syncDist:watch';

/** `gulp build`
 * 构建
 * */
const build = (type = 'all') => {
  return gulp.series(cleanSrcExample, () => copySrcExample(type), baseBuild, syncDist);
};

/** `gulp task`
 * 编译app.less
 * */
const commonLess = () =>
  gulp
    .src(path.join(__dirname, '..', `packages/components/common/index.less`))
    .pipe(
      plumber({
        errorHandler: (err) => {
          console.error(err);
          handleError(err.message);
        },
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(gulpLess()) // 编译less
    .pipe(rename({ extname: '.wxss' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${output}/common/`));
/** `gulp watch`
 * 监听common中less更新
 * */

const watchCommonLess = () => {
  gulp.watch(
    'common/style/miniprogram/components/**',
    { events: ['add', 'change'] },
    gulp.series(resetError, commonLess),
  );
};
/** `gulp watch`
 * 监听
 * */
const watch = (type = 'all') => {
  return gulp.parallel(baseWatch, () => watchSrcExample(type), watchCommonLess, watchDist);
};

// `gulp --tasks --gulpfile script/gulpfile.example.js` list tasks
module.exports = {
  clear,
  build,
  watch,
  default: build(EXAMPLE_TYPE),
};
