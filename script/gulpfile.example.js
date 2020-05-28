const gulp = require('gulp');
const changed = require('gulp-changed');
const base = require('./gulpfile.base');
const packageJSON = require('../package.json');

/* config */
const src = 'example';
const dist = '_example';

/* base tasks */
const {
  clear,
  build: baseBuild,
  watch: baseWatch,
} = base(src, dist, 'example');

// 包装 gulp.lastRun, 引入文件 ctime 作为文件变动判断另一标准
// https://github.com/gulpjs/vinyl-fs/issues/226
const since = task => (
  file => (gulp.lastRun(task) > file.stat.ctime ? gulp.lastRun(task) : 0)
);

/** `gulp syncDist`
 * 将 miniprogram_dist 同步至 _example
 * */
const input = 'miniprogram_dist';
const output = `_example/miniprogram_npm/${packageJSON.name}`;
const syncDist = () => gulp.src(`${input}/**`, { base: input, since: since(syncDist) })
  .pipe(changed(output)) // 过滤掉未改变的文件
  .pipe(gulp.dest(output));

/** `gulp watchDist`
 * 监听 miniprogram_dist
 * */
const watchDist = () => gulp.watch(`${input}/**`, syncDist);
watchDist.displayName = 'syncDist:watch';

/** `gulp build`
 * 构建
 * */
const build = gulp.series(
  baseBuild,
  syncDist,
);

/** `gulp watch`
 * 监听
 * */
const watch = gulp.parallel(
  baseWatch,
  watchDist,
);

// `gulp --tasks --gulpfile script/gulpfile.example.js` list tasks
module.exports = {
  clear,
  build,
  watch,
  default: build,
};
