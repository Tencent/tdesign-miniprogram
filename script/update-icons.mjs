import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数中的版本号
const VERSION = process.argv[process.argv.indexOf('--version') + 1];

if (!VERSION) {
  console.error('Error: --version parameter is required');
  console.error('Usage: node script/update-icons.mjs --version <version>');
  process.exit(1);
}

// 目标目录配置
const targetDirs = [
  {
    name: 'components',
    paths: {
      commonIconFile: 'packages/components/common/style/icons.less',
      dataFile: 'packages/components/icon/_example/data.js',
      iconFile: 'packages/components/icon/icon.less',
    },
  },
  {
    name: 'uniapp-components',
    paths: {
      commonIconFile: 'packages/uniapp-components/common/style/icons.less',
      dataFile: 'packages/uniapp-components/icon/_example/data.js',
      iconFile: 'packages/uniapp-components/icon/icon.less',
    },
  },
];

// 使用 fetch 获取远程 CSS 文件
const fetchCss = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  return res.text();
};

const saveFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(__dirname, '..', filename);
    fs.writeFile(absolutePath, content, (err) => {
      if (err) {
        console.error(`Error writing file: ${filename}`, err);
        reject(err);
      } else {
        console.log(`✓ File saved: ${filename}`);
        resolve();
      }
    });
  });
};

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(__dirname, '..', filename);
    fs.readFile(absolutePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// 处理单个目录的图标更新
const processTargetDir = async (target) => {
  const iconOnlinePath = `https://tdesign.gtimg.com/icon/${VERSION}/fonts/index.css`;

  console.log(`\nProcessing ${target.name}...`);

  try {
    // 获取在线图标 CSS
    const cssContent = await fetchCss(iconOnlinePath);

    // 解析图标数据
    const regex = new RegExp(`\\.t-icon-(.*):before \\{\\s+content: "(.*)";`, 'g');
    const icons = cssContent.match(regex);

    if (!icons) {
      console.error(`Error: No icons found in CSS from ${iconOnlinePath}`);
      return;
    }

    const iconList = icons.map((icon) => {
      return { [icon.replace(regex, '$1')]: icon.replace(regex, '$2') };
    });

    const iconObject = Object.assign({}, ...iconList);
    const keys = Object.keys(iconObject);

    console.log(`Found ${keys.length} icons`);

    // 生成 JS 数据文件
    const iconsJs = `const icons = [\n  ${keys.map((key) => `'${key}',`).join('\n  ')}\n];\nexport default icons;\n`;

    // 生成 LESS 文件
    const commonIconLess = `@icons: {\n  ${Object.entries(iconObject)
      .map(([key, value]) => `${key}: '${value}';`)
      .join('\n  ')}\n};\n`;

    // 更新 icon.less 文件中的版本号
    const iconLessContent = await readFile(target.paths.iconFile);
    const pattern = /https:\/\/tdesign\.gtimg\.com\/icon\/([\d.]+)\//g;
    const newIconLess = iconLessContent.replaceAll(pattern, `https://tdesign.gtimg.com/icon/${VERSION}/`);

    // 保存所有文件
    await Promise.all([
      saveFile(target.paths.iconFile, newIconLess),
      saveFile(target.paths.dataFile, iconsJs),
      saveFile(target.paths.commonIconFile, commonIconLess),
    ]);

    console.log(`✓ ${target.name} updated successfully`);
  } catch (err) {
    console.error(`✗ Error processing ${target.name}:`, err);
  }
};

const updateIcons = async () => {
  console.log(`\n=== Updating icons to version ${VERSION} ===`);

  // 并发处理所有目标目录
  await Promise.all(targetDirs.map(processTargetDir));

  console.log('\n=== Icon update completed ===');
};

updateIcons();

// npm run update:icons -- --version 0.2.1
