import fs from 'fs';
import path from 'path';

// 查找所有包含 import { tv } from '../../utils/class-composer' 的 .variants.ts 文件
const rootDir = '/Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-x-components/src/components';

function findVariantFiles(dir) {
  const files = [];

  function walk(currentDir) {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);

      if (item.isDirectory()) {
        walk(fullPath);
      } else if (item.name.endsWith('.variants.ts')) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

const variantFiles = findVariantFiles(rootDir);

console.log(`Found ${variantFiles.length} variant files`);

let modifiedCount = 0;

for (const filePath of variantFiles) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // 检查是否包含 tv 导入
  if (!content.includes("import { tv } from '../../utils/class-composer'")) {
    continue;
  }

  console.log(`Processing: ${filePath}`);

  // 1. 替换导入语句
  content = content.replace(
    /import \{ tv \} from '\.\.\/\.\.\/utils\/class-composer';/g,
    "import { cva } from '../../utils/cva';",
  );

  // 2. 替换 tv({ base: 'xxx', ... }) 为 cva('xxx', { ... })
  // 匹配模式: export const xxxVariants = tv({
  //           base: 'xxx',
  const tvCallRegex = /(export const \w+Variants = )tv\(\{\n\s*base: '([^']+)',/;
  const match = content.match(tvCallRegex);

  if (match) {
    const [fullMatch, prefix, baseClass] = match;
    const replacement = `${prefix}cva('${baseClass}', {`;
    content = content.replace(fullMatch, replacement);
    console.log(`  - Replaced tv() with cva('${baseClass}', ...)`);
  } else {
    console.log(`  - WARNING: Could not find tv({ base: '...' }) pattern`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  modifiedCount++;
}

console.log(`\nDone! Modified ${modifiedCount} files.`);
