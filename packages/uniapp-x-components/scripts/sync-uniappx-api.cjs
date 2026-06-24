/**
 * 批量同步 uniapp -> uniapp-x 的 API 定义和 CSS Token
 *
 * 功能：
 * 1. 从 uniapp-components/{comp}/ 读取 props.ts, type.ts, theme.less
 * 2. 同步到 uniapp-x-components/src/components/{comp}/
 * 3. 确保 API 定义对齐
 *
 * 使用：node scripts/sync-uniappx-api.cjs
 */

const fs = require('fs');
const path = require('path');

const UNIAPP_DIR = path.resolve(__dirname, '../uniapp-components');
const UNIAPPX_DIR = path.resolve(__dirname, '../uniapp-x-components/src/components');

// 需要同步的组件列表（40个骨架组件）
const componentsToSync = [
  'calendar',
  'cascader',
  'color-picker',
  'config-provider',
  'date-time-picker',
  'draggable',
  'dropdown-item',
  'dropdown-menu',
  'form',
  'form-item',
  'guide',
  'locale',
  'message-item',
  'paragraph',
  'picker',
  'picker-item',
  'popover',
  'pull-down-refresh',
  'rate',
  'scroll-view',
  'search',
  'segmented',
  'slider',
  'sticky',
  'stepper',
  'swipe-cell',
  'swiper',
  'swiper-nav',
  'switch',
  'table',
  'text',
  'textarea',
  'title',
  'transition',
  'tree-select',
  'upload',
];

// 需要复制的文件模式
const filesToSync = [
  { src: 'props.ts', dest: 'props.ts' },
  { src: 'type.ts', dest: 'type.ts' },
  { src: 't-{comp}.theme.less', dest: 't-{comp}.theme.less', isTemplate: true },
  { src: 'README.md', dest: 'README.md' },
  { src: 'README.en-US.md', dest: 'README.en-US.md' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

function syncComponent(compName) {
  const srcDir = path.join(UNIAPP_DIR, compName);
  const destDir = path.join(UNIAPPX_DIR, `t-${compName}`);

  if (!fs.existsSync(srcDir)) {
    console.log(`  ⚠️  源目录不存在: uniapp-components/${compName}`);
    skipCount++;
    return;
  }

  if (!fs.existsSync(destDir)) {
    console.log(`  ⚠️  目标目录不存在: uniapp-x-components/src/components/t-${compName}`);
    skipCount++;
    return;
  }

  let compSuccess = 0;

  for (const filePattern of filesToSync) {
    let srcFile = filePattern.src;
    let destFile = filePattern.dest;

    // 处理模板文件名
    if (filePattern.isTemplate) {
      srcFile = srcFile.replace('{comp}', compName);
      destFile = destFile.replace('{comp}', compName);
    }

    const srcPath = path.join(srcDir, srcFile);
    const destPath = path.join(destDir, destFile);

    if (!fs.existsSync(srcPath)) {
      continue; // 源文件不存在，跳过
    }

    try {
      let content = fs.readFileSync(srcPath, 'utf-8');

      // 对 props.ts 进行特殊处理：转为 UTS 兼容格式
      if (srcFile === 'props.ts') {
        content = convertPropsToUTS(content, compName);
      }

      fs.writeFileSync(destPath, content, 'utf-8');
      compSuccess++;
    } catch (err) {
      console.error(`  ❌ 复制失败 ${srcFile}:`, err.message);
      errorCount++;
    }
  }

  if (compSuccess > 0) {
    console.log(`  ✅ ${compName} - 同步了 ${compSuccess} 个文件`);
    successCount++;
  }
}

/**
 * 将 Vue props 定义转换为 UTS 兼容的注释文档
 * （实际 .uvue 文件中的 defineProps 需要手动调整）
 */
function convertPropsToUTS(content, compName) {
  // 这里只做注释文档的提取，实际的 defineProps 需要在 .uvue 中手动编写
  // 返回格式化后的注释，供开发者参考

  const lines = content.split('\n');
  const propComments = [];

  for (const line of lines) {
    // 提取注释和属性名
    if (line.includes('*') && !line.includes('/*') && !line.includes('*/')) {
      const comment = line.replace(/^\s*\*\s*/, '').trim();
      if (comment && !comment.startsWith('该文件')) {
        propComments.push(`// ${comment}`);
      }
    }
  }

  return `// 从 uniapp-components/${compName}/props.ts 同步的 API 定义
// 请根据以下定义在 .uvue 文件中编写 defineProps
//
// ${propComments.join('\n// ')}
`;
}

// 主流程
console.log('🚀 开始同步 uniapp -> uniapp-x API 定义和 CSS Token...\n');

for (const comp of componentsToSync) {
  console.log(`📦 处理 t-${comp}...`);
  syncComponent(comp);
}

console.log('\n📊 同步完成统计:');
console.log(`  ✅ 成功: ${successCount} 个组件`);
console.log(`  ⚠️  跳过: ${skipCount} 个组件`);
console.log(`  ❌ 失败: ${errorCount} 个文件`);
console.log('\n💡 提示: props.ts 已生成参考注释，请在 .uvue 文件中手动编写 defineProps');
