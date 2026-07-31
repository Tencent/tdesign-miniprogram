const gulp = require('gulp');
const replace = require('gulp-replace');

const SRC = 'packages/common/js/global-config/mobile/locale/*.ts';

/** 复制到小程序组件库 locale，保持原始 import 路径 */
const copyToComponents = () => gulp.src(SRC).pipe(gulp.dest('packages/components/locale'));

/**
 * 复制到 uniapp 组件库 locale，
 * 将顶部 dayjs 语言包 import 路径替换为 `../npm/dayjs/esm/`
 * 例如：import 'dayjs/locale/ko';  =>  import '../npm/dayjs/esm/locale/ko';
 */
const copyToUniapp = () =>
  gulp
    .src(SRC)
    .pipe(replace(/(['"])dayjs\/locale\//g, '$1../npm/dayjs/esm/locale/'))
    .pipe(gulp.dest('packages/uniapp-components/locale'));

const copyLocale = gulp.parallel(copyToComponents, copyToUniapp);

module.exports = { copyLocale };
