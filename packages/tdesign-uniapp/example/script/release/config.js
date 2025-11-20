const path = require('path');

const config = {
  targetDir: path.resolve(__dirname, '../../../npm_dist'),
  sourceDir: path.resolve(__dirname, '../../../components'),
  sourceGlob: path.resolve(__dirname, '../../../components/**/*'),

  chatTargetDir: path.resolve(__dirname, '../../../../tdesign-uniapp-chat/npm_dist'),
  chatSourceDir: path.resolve(__dirname, '../../../../tdesign-uniapp-chat/components'),
  chatSourceGlob: path.resolve(__dirname, '../../../../tdesign-uniapp-chat/components/**/*'),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),
};


module.exports = {
  config,
};
