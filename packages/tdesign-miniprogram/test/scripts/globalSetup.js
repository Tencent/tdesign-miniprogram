const path = require('path');
const fs = require('fs');

/**
 * 清理 uniapp 构建产物目录，避免 wcc 编译器扫描 packages/ 时
 * 误编译 uniapp dist 中不兼容的 wxml 文件导致测试失败
 */
function cleanUniappDist() {
  const distDirs = [
    path.resolve(__dirname, '../../../tdesign-uniapp/example/dist'),
    path.resolve(__dirname, '../../../tdesign-uniapp-chat/example/dist'),
  ];

  distDirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
}

module.exports = async () => {
  process.env.TZ = 'Asia/Shanghai';
  cleanUniappDist();
};
