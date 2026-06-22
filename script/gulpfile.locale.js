const gulp = require('gulp');

/** `gulp copyLocale`
 * 复制 packages/common/js/global-config/mobile/locale 的 ts 文件到 packages/components/locale
 * */
const copyLocale = () =>
  gulp.src('packages/common/js/global-config/mobile/locale/*.ts').pipe(gulp.dest('packages/components/locale'));
gulp.src('packages/common/js/global-config/mobile/locale/*.ts').pipe(gulp.dest('packages/uniapp-components/locale'));

module.exports = { copyLocale };
