import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取版本号
const getPackageVersion = () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../packages/tdesign-miniprogram/package.json'), 'utf8'),
  );
  return packageJson.version;
};

// 工具函数：同步复制文件
const copyFiles = (fromPath, toPath) => {
  try {
    fs.cpSync(fromPath, toPath, { recursive: true });
    // eslint-disable-next-line no-console
    console.log('文件已成功复制:', fromPath, '->', toPath);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('复制文件时出错:', err);
    throw err;
  }
};

// 工具函数：删除指定文件
const removeFiles = (targetPath, filterFiles, saveFileTypes) => {
  const files = fs.readdirSync(targetPath);

  files.forEach((file) => {
    const filePath = path.join(targetPath, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      if (filterFiles.includes(file)) {
        fs.rmSync(filePath, { recursive: true });
      }
    } else {
      const fileExtension = file.slice(file.lastIndexOf('.') + 1);
      if (!saveFileTypes.includes(fileExtension)) {
        fs.unlinkSync(filePath);
      }
    }
  });
};

// 工具函数：替换文件内容
const replaceFileContent = (targetPath, componentName, version) => {
  const specialFileContent = [
    {
      file: 'app.json',
      replaceContent: [['pages/button/button', `pages/${componentName}/${componentName}`]],
    },
    {
      file: 'project.private.config.json',
      replaceContent: [['tdesign-button-demo', `tdesign-${componentName}-demo`]],
    },
    {
      file: 'package.json',
      replaceContent: [
        ['tdesign-button-demo', `tdesign-${componentName}-demo`],
        ['tdesign-miniprogram-version', version],
      ],
    },
  ];

  specialFileContent.forEach((item) => {
    const filePath = path.join(targetPath, item.file);
    let data = fs.readFileSync(filePath, 'utf8');
    item.replaceContent.forEach(([oldContent, newContent]) => {
      data = data.replaceAll(oldContent, newContent);
    });
    fs.writeFileSync(filePath, data, 'utf8');
  });
};

// 主函数：生成 Demo 代码片段
const generateDemoSnippets = (componentName) => {
  if (!componentName) {
    // eslint-disable-next-line no-console
    console.error('错误：请提供组件名称');
    process.exit(1);
  }

  const VERSION = getPackageVersion();
  const filterFiles = ['skyline']; // 需要过滤的示例文件夹
  const saveFileTypes = ['js', 'json', 'wxml', 'wxss', 'wxs']; // 需要保存的文件类型

  const baseDemoPath = path.resolve(__dirname, './templates');
  const snippetsTargetPath = path.resolve(__dirname, './__snippets__/');
  const snippetsOriginPath = path.join(path.resolve(__dirname, '../_example/pages'), componentName);

  if (!fs.existsSync(snippetsOriginPath)) {
    // eslint-disable-next-line no-console
    console.log('示例代码路径不存在:', snippetsOriginPath);
    return;
  }

  const targetPath = path.join(snippetsTargetPath, `tdesign-${componentName}-demo`);

  // 检查目标路径是否存在，存在则先移除
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }

  // 1. 复制基础模板到目标路径
  copyFiles(baseDemoPath, targetPath);

  // 2. 复制示例代码到目标路径
  const cpDemoCodePath = path.join(targetPath, `pages/${componentName}`);
  copyFiles(snippetsOriginPath, cpDemoCodePath);

  // 3. 清理不需要的文件
  removeFiles(cpDemoCodePath, filterFiles, saveFileTypes);

  // 4. 替换模板内容
  replaceFileContent(targetPath, componentName, VERSION);

  // eslint-disable-next-line no-console
  console.log(`Demo 片段生成完成: ${componentName}`);
};

/**
 * @description 命令行执行: node generate-demo-snippet.mjs button
 */
const COMPONENT_NAME = process.argv[2];
generateDemoSnippets(COMPONENT_NAME);
