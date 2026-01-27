const path = require('path');
const { PACKAGES_ROOT } = require('../release/config');

const VUE3_CLI_ROOT = path.resolve(__dirname, '../..');
const APP_ROOT = path.resolve(__dirname, '../../../app');
const VUE2_CLI_ROOT = path.resolve(PACKAGES_ROOT, '../../tdesign-uniapp-vue2-cli-demo');


const config = {
  vue3CliRoot: VUE3_CLI_ROOT,
  appRoot: APP_ROOT,
  vue2CliRoot: VUE2_CLI_ROOT,

  componentTargetDirInVue3Cli: path.resolve(VUE3_CLI_ROOT, 'src/_tdesign'),
  componentTargetDirInApp: path.resolve(APP_ROOT, 'uni_modules/tdesign-uniapp/components'),
  componentTargetDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src/_tdesign'),

  pagesMoreDirInVue3Cli: path.resolve(VUE3_CLI_ROOT, 'src/pages-more'),
  pagesMoreDirInApp: path.resolve(APP_ROOT, 'pages-more'),
  pagesMoreDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src/pages-more'),

  infraDirInApp: APP_ROOT,
  infraDirInVue2Cli: path.resolve(VUE2_CLI_ROOT, 'src'),

  sourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-components'),
  chatSourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat'),

  sourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-components/**/*'),
  chatSourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/**/*'),
  baseAndChatSourceGlob: path.resolve(PACKAGES_ROOT, '{uniapp-components,uniapp-pro-components}/**/*'),

  demoPagesGlob: path.resolve(VUE3_CLI_ROOT, 'src/{pages,components,mixins,style}/**/*'),
};


module.exports = {
  config,
};
