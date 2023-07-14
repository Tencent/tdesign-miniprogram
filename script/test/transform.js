// 由于开启 virtualHost=true 之后，selectComponent 无法获取，暂时在单测关闭 virtualHost
const path = require('path');
const babelJest = require('babel-jest');

module.exports = {
  process(sourceText, sourcePath) {
    if (sourcePath.indexOf('instantiationDecorator') > -1) {
      sourceText = sourceText.replace('virtualHost = true', 'virtualHost = false');
    }

    return babelJest.process(sourceText, sourcePath, {
      cwd: path.resolve(__dirname, '../../'),
    });
  },
};
