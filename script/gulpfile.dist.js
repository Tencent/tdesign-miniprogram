const gulp = require('gulp');
const base = require('./gulpfile.base');

/* config */
const src = 'src';
const dist = 'miniprogram_dist';

/* base tasks */
const { clear, build: baseBuild, watch: baseWatch } = base(src, dist, 'dist');
const { build: buildAssets } = base(src, 'tdesign-miniprogram', 'assets');

/** `gulp build`
 * 构建
 * */
const build = gulp.parallel(baseBuild);

/** `gulp watch`
 * 监听
 * */
const watch = gulp.parallel(baseWatch);

// `gulp --tasks --gulpfile script/gulpfile.dist.js` list tasks
module.exports = {
  clear,
  build,
  buildAssets,
  watch,
  default: build,
};
