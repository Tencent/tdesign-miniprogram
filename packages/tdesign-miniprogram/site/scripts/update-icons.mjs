import fs from 'fs';
import { get } from './qrcode/httpRequest.mjs';
import resolveCwd from './utils.mjs';

const VERSION = process.argv[process.argv.indexOf('--version') + 1]; // 在 --version 后面

const iconOnlinePath = `https://tdesign.gtimg.com/icon/${VERSION}/fonts/index.css`;

const commonIconFile = resolveCwd('../../components/common/style/icons.less'); // 组件的 .less 文件
const dataFile = resolveCwd('../../components/icon/_example/data.js'); // 示例的 .js 文件
const iconFile = resolveCwd('../../components/icon/icon.less');
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
  get(iconOnlinePath)
    .then((e) => {
      const regex = new RegExp(`\\.t-icon-(.*):before \\{\\s+content: "(.*)";`, 'g');
      const icons = e.match(regex);

      const iconList = icons.map((icon) => {
        return { [icon.replace(regex, '$1')]: icon.replace(regex, '$2') };
      });

      const iconObject = Object.assign({}, ...iconList);
      const keys = Object.keys(iconObject);

      // 将 keys 数组转换为 JS 格式的字符串
      const iconsJs = `const icons = [\n  ${keys.map((key) => `'${key}',`).join('\n  ')}\n];\nexport default icons;\n`;

      // 将 iconObject 转换为 LESS 格式的字符串
      const commonIconLess = `@icons: {\n  ${Object.entries(iconObject)
        .map(([key, value]) => `${key}: '${value}';`)
        .join('\n  ')}\n};\n`;

      const iconLess = fs.readFileSync(iconFile, 'utf-8');
      const pattern = /https:\/\/tdesign\.gtimg\.com\/icon\/([\d.]+)\//g;
      const newIconLess = iconLess.replaceAll(pattern, `https://tdesign.gtimg.com/icon/${VERSION}/`);

      saveFile(iconFile, newIconLess);
      saveFile(dataFile, iconsJs);
      saveFile(commonIconFile, commonIconLess);
      // Use an explicit path to the prettier config relative to this script's location.
      // Prevents ENOENT when the script is invoked from a different working directory.
    })
    .catch((err) => {
      console.error('Error fetching icon CSS:', err);
    });
};

getIconCss();

// node scripts/update-icons.js --version 0.2.1
