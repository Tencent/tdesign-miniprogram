const path = require('path');

const PACKAGES_ROOT = path.resolve(__dirname, '../../../../');
const PROJECT_ROOT = path.resolve(PACKAGES_ROOT, '../');

// 将 Windows 的 \ 路径分隔符转为 /，确保 glob pattern 跨平台兼容
function toGlobPattern(p) {
  return p.split(path.sep).join('/');
}

const config = {
  targetDir: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp/dist'),
  sourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-components'),
  sourceGlob: toGlobPattern(path.resolve(PACKAGES_ROOT, 'uniapp-components/**/*')),

  chatTargetDir: path.resolve(PACKAGES_ROOT, 'tdesign-uniapp-chat/dist'),
  chatSourceDir: path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat'),
  chatSourceGlob: toGlobPattern(path.resolve(PACKAGES_ROOT, 'uniapp-pro-components/chat/**/*')),

  demoDir: path.resolve(__dirname, '../../src/pages-more'),
};

const DIST_BLACK_LIST = [
  'tsconfig.eslint.json',
  '.eslintrc.js',
];

module.exports = {
  config,
  PACKAGES_ROOT,
  PROJECT_ROOT,
  DIST_BLACK_LIST,
  toGlobPattern,
};
