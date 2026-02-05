const gulp = require('gulp');
const dist = require('./gulpfile.dist');
const example = require('./gulpfile.example');
const wechatide = require('./gulpfile.wechatide');

// TODO: 等 config-provider 正式上线，需要改用子仓库的语言包
/** `gulp copyLocale`
 * 复制 packages/common/js/global-config/mobile/locale 的 ts 文件到 packages/components/locale
 * */
// const copyLocale = () =>
//   gulp.src('packages/common/js/global-config/mobile/locale/*.ts').pipe(gulp.dest('packages/components/locale'));

/** `gulp build`
 * 构建
 * */
// const build = gulp.series(copyLocale, dist.build, example.build('all'));

const build = gulp.series(dist.build, example.build('all'));

/** `gulp watch`
 * 监听
 * */
const watch = gulp.parallel(dist.watch, example.watch);

/** `gulp` or `gulp dev`
 * 构建并监听
 * */
const dev = gulp.series(build, watch);

const { generate } = wechatide;

// `gulp --tasks --gulpfile script/gulpfile.js` list tasks
module.exports = {
  dev,
  build,
  watch,
  default: dev,
  generate,
};
