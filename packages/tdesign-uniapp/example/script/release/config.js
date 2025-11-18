const path = require('path');

const config = {
  targetDir: path.resolve(__dirname, '../../../../npm_dist'),
  sourceDir: path.resolve(__dirname, '../../../tdesign'),
  sourceGlob: path.resolve(__dirname, '../../../tdesign/**/*'),

  chatTargetDir: path.resolve(__dirname, '../../../../npm_dist_chat'),
  chatSourceDir: path.resolve(__dirname, '../../../tdesign-uniapp-chat'),
  chatSourceGlob: path.resolve(__dirname, '../../../tdesign-uniapp-chat/**/*'),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),
};


module.exports = {
  config,
};
