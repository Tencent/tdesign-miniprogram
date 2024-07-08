const path = require('path');
const fs = require('fs');
const { get } = require('./qrcode/httpRequest');

const VERSION = process.argv[process.argv.indexOf('--version') + 1]; // 在 --version 后面

const iconOnlinePath = `https://tdesign.gtimg.com/icon/${VERSION}/fonts/index.css`;

const iconFile = path.join(__dirname, '..', 'src/common/style/icons.less'); // 组件的 .less 文件
const dataFile = path.join(__dirname, '..', 'src/icon/_example/data.js'); // 示例的 .js 文件

// 定义一个函数来保存文件
const saveFile = (filename, content) => {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(`Error writing file: ${filename}`, err);
    } else {
      console.log(`File saved: ${filename}`);
    }
  });
};

const getIconCss = () => {
  get(iconOnlinePath).then((e) => {
    const regex = new RegExp(`\\.t-icon-(.*):before \\{\\s+content: "(.*)";`, 'g');
    const icons = e.match(regex);

    const iconList = icons.map((icon) => {
      return { [icon.replace(regex, '$1')]: icon.replace(regex, '$2') };
    });

    const iconObject = Object.assign({}, ...iconList);
    const keys = Object.keys(iconObject);

    // 将 keys 数组转换为 JS 格式的字符串
    const iconsJs = `const icons = [\n  '${keys.join("',\n  '")}'\n]; \nexport default icons;\n`;

    // 将 iconObject 转换为 LESS 格式的字符串
    const iconLess = `@icons: {\n  ${Object.entries(iconObject)
      .map(([key, value]) => `${key}: '${value}';`)
      .join('\n  ')}\n}`;

    saveFile(dataFile, iconsJs);
    saveFile(iconFile, iconLess);
  });
};

getIconCss();

// node script/update-icons.js --version 0.2.1
