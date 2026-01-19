const path = require('path');

const PACKAGES_ROOT = path.resolve(__dirname, '../../../../');

const config = {
  targetDir: path.resolve(__dirname, '../../src/_tdesign'),
  rawTargetDirInApp: path.resolve(__dirname, '../../../app/tdesign-uniapp-raw'),

  sourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-components'),
  chatSourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat'),

  sourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-components/**/*'),
  chatSourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/**/*'),
  baseAndChatSourceGlob: path.resolve(PACKAGES_ROOT, '{uniapp-components,uniapp-pro-components}/**/*'),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),

  demoRealDir: path.resolve(__dirname, '../../'),

  demoPagesGlob: path.resolve(__dirname, '../../src/pages/**/*'),
  demoComponentsGlob: path.resolve(__dirname, '../../src/components/**/*'),

  appDir: path.resolve(__dirname, '../../../app'),
  appPagesMoreDir: path.resolve(__dirname, '../../../app/pages-more'),
  appComponentsDir: path.resolve(__dirname, '../../../app/components'),
  appPagesDir: path.resolve(__dirname, '../../../app/pages'),
};


module.exports = {
  config,
};
