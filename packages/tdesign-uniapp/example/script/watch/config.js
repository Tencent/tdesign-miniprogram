const path = require('path');
const { PACKAGES_ROOT, toGlobPattern } = require('../release/config');

const VUE3_CLI_ROOT = path.resolve(__dirname, '../..');
const APP_ROOT = path.resolve(__dirname, '../../../app');
const VUE2_CLI_ROOT = path.resolve(PACKAGES_ROOT, '../../tdesign-uniapp-starter-vue2-cli');
const VUE2_HX_ROOT = path.resolve(PACKAGES_ROOT, '../../tdesign-uniapp-starter-vue2-hx');
const VUE3_HX_ROOT = path.resolve(PACKAGES_ROOT, '../../tdesign-uniapp-starter-vue3-hx');


const config = {
  vue3CliRoot: VUE3_CLI_ROOT,
  appRoot: APP_ROOT,
  vue2CliRoot: VUE2_CLI_ROOT,
  vue2HxRoot: VUE2_HX_ROOT,
  vue3HxRoot: VUE3_HX_ROOT,

  componentTargetDirInVue3Cli: path.resolve(VUE3_CLI_ROOT, 'src/_tdesign'),
  componentTargetDirInApp: path.resolve(APP_ROOT, 'uni_modules/tdesign-uniapp/components'),
  componentTargetDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src/_tdesign'),
  componentTargetDirInVue2Hx: path.resolve(VUE2_HX_ROOT, 'uni_modules/tdesign-uniapp/components'),
  componentChatTargetDirInVue2Hx: path.resolve(VUE2_HX_ROOT, 'uni_modules/tdesign-uniapp-chat/components'),
  componentTargetDirInVue3Hx: path.resolve(VUE3_HX_ROOT, 'uni_modules/tdesign-uniapp/components'),
  componentChatTargetDirInVue3Hx: path.resolve(VUE3_HX_ROOT, 'uni_modules/tdesign-uniapp-chat/components'),

  pagesMoreDirInVue3Cli: path.resolve(VUE3_CLI_ROOT, 'src/pages-more'),
  pagesMoreDirInApp: path.resolve(APP_ROOT, 'pages-more'),
  pagesMoreDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src/pages-more'),
  pagesMoreDirInVue2Hx: path.resolve(VUE2_HX_ROOT, 'pages-more'),
  pagesMoreDirInVue3Hx: path.resolve(VUE3_HX_ROOT, 'pages-more'),

  infraDirInApp: APP_ROOT,
  infraDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src'),
  infraDirInVue2Hx: VUE2_HX_ROOT,
  infraDirInVue3Hx: VUE3_HX_ROOT,

  sourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-components'),
  chatSourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat'),

  sourceGlob: toGlobPattern(path.resolve(PACKAGES_ROOT, 'uniapp-components/**/*')),
  chatSourceGlob: toGlobPattern(path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/**/*')),
  baseAndChatSourceGlob: toGlobPattern(path.resolve(PACKAGES_ROOT, '{uniapp-components,uniapp-pro-components}/**/*')),

  demoPagesGlob: toGlobPattern(path.resolve(VUE3_CLI_ROOT, 'src/{pages,components,mixins,style}/**/*')),
};


module.exports = {
  config,
};
