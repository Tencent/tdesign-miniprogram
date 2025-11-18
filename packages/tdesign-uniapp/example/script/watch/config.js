const path = require('path');

const config = {
  targetDir: path.resolve(__dirname, '../../src/_tdesign'),
  rawTargetDir: path.resolve(__dirname, '../../src/_tdesign-raw'),
  rawTargetDirInApp: path.resolve(__dirname, '../../../tdesign-app/tdesign-uniapp-raw'),

  sourceDir: path.resolve(__dirname, '../../../components'),
  chatSourceDir: path.resolve(__dirname, '../../../tdesign-uniapp-chat'),

  sourceGlob: path.resolve(__dirname, '../../../components/**/*'),
  chatSourceGlob: path.resolve(__dirname, '../../../tdesign-uniapp-chat/**/*'),
  baseAndChatSourceGlob: path.resolve(__dirname, '../../../../{tdesign-uniapp,tdesign-uniapp-chat}/**/*'),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),

  demoRealDir: path.resolve(__dirname, '../../'),

  demoPagesGlob: path.resolve(__dirname, '../../src/pages/**/*'),
  demoComponentsGlob: path.resolve(__dirname, '../../src/components/**/*'),

  appDir: path.resolve(__dirname, '../../../tdesign-app'),
  appPagesMoreDir: path.resolve(__dirname, '../../../tdesign-app/pages-more'),
  appComponentsDir: path.resolve(__dirname, '../../../tdesign-app/components'),
  appPagesDir: path.resolve(__dirname, '../../../tdesign-app/pages'),
};


module.exports = {
  config,
};
