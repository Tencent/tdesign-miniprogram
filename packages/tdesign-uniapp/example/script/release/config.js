const path = require('path');

const PACKAGES_ROOT = path.resolve(__dirname, '../../../../');

const config = {
  targetDir: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp/dist'),
  sourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-components'),
  sourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-components/**/*'),

  chatTargetDir: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp-chat/dist'),
  chatSourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat'),
  chatSourceGlob: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/**/*'),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),
};

module.exports = {
  config,
  PACKAGES_ROOT,
};
