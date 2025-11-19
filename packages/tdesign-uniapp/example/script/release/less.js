const fs = require('fs');
const path = require('path');
const less = require('less');
const postcss = require('postcss');
const rpxTransform = require('postcss-rpx-transform');

const CONFIG = {
  whiteList: [
    path.resolve(process.cwd(), 'packages/tdesign/common/style/theme/index.less'),
    path.resolve(process.cwd(), 'packages/tdesign/common/style/base.less'),
    path.resolve(process.cwd(), 'packages/tdesign/common/style/_variables.less'),
    path.resolve(process.cwd(), 'packages/tdesign/common/style/mixins/'),
    path.resolve(process.cwd(), 'packages/tdesign/common/style/theme/raw/'),
  ],
};

// 配置参数（通常 1rpx=0.5px，设计稿 750px 宽时）
const options = {
  transformType: 'rpx',
  rpxUnit: 0.5,      // 转换比例 1rpx = 0.5px
  rpxPrecision: 6,    // 输出精度
};

// 处理流程
async function processLess(inputFile, rawOutputFile, rawOutputFileInApp) {
  if (!inputFile.endsWith('.less')) return;
  if (CONFIG.whiteList.find(item => inputFile.startsWith(item))) {
    return;
  }

  try {
    let lessCode = fs.readFileSync(inputFile, 'utf8');

    lessCode = lessCode.replace('@import \'tdesign-uniapp/common/style/base.less\'', '@import \'../common/style/base.less\'');

    const cssResult = await less.render(lessCode, {
      // 设置导入路径
      paths: [
        path.join(__dirname, '../../../components/common'),
        path.join(__dirname, '../../../components/common/style'),
        path.join(__dirname, '../../../components/common/style/mixins'),
        path.join(__dirname, '../../../components/common/style/theme'),
      ],
    });

    const postcssResult = await postcss([
      rpxTransform(options),
    ]).process(cssResult.css, { from: undefined });


    const getOutputFile = (rawOutputFile) => {
      const filename = `${path
        .basename(rawOutputFile, path.extname(rawOutputFile))
        .replace(/^_/, '')}.css`;

      const outputFile = path.resolve(path.dirname(rawOutputFile), filename);
      console.log('filename', filename);

      return outputFile;
    };


    const outputFile = getOutputFile(rawOutputFile);
    fs.writeFileSync(outputFile, postcssResult.css);
    console.log(`✅ 转换完成: ${outputFile}`);

    if (rawOutputFileInApp) {
      const outputFile = getOutputFile(rawOutputFileInApp);

      fs.writeFileSync(outputFile, postcssResult.css);
      console.log(`✅ 转换完成: ${outputFile}`);
    }
    return true;
  } catch (err) {
    console.error('❌ 处理失败:', err);
  }
}

module.exports = {
  processLess,
};

// 使用示例
// processLess(path.resolve(process.cwd(), 'packages/tdesign/common/style/mixins/_hairline.less'), 'styles.css');
