const gulp = require('gulp');
const base = require('./gulpfile.base');

/* config */
const componentsPath = 'packages/components';
const proComponentsPath = 'packages/pro-components';
const dist = 'packages/tdesign-miniprogram/miniprogram_dist';

/* base tasks */
const componentsTasks = base(componentsPath, dist, 'dist');
const proComponentsTasks = base(proComponentsPath, dist, 'dist');
const { build: buildAssets } = base(componentsPath, 'tdesign-miniprogram', 'assets');

/** `gulp clear`
 * 清理文件
 * */
const clear = gulp.parallel(componentsTasks.clear, proComponentsTasks.clear);

/** `gulp build`
 * 构建
 * */
const build = gulp.parallel(componentsTasks.build, proComponentsTasks.build);

/** `gulp watch`
 * 监听
 * */
const watch = gulp.parallel(componentsTasks.watch, proComponentsTasks.watch);

// `gulp --tasks --gulpfile script/gulpfile.dist.js` list tasks
module.exports = {
  clear,
  build,
  buildAssets,
  watch,
  default: build,
};
