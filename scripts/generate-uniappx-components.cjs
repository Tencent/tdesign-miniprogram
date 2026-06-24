/**
 * 批量生成 UniApp X 组件脚本
 * 从 uniapp-components 转换为 uniapp-x-components
 *
 * 使用方式：
 *   node scripts/generate-uniappx-components.cjs [componentName]
 *   不传 componentName 则批量生成所有缺失组件
 */

const fs = require('fs');
const path = require('path');

const UNIAPP_DIR = path.resolve(__dirname, '../packages/uniapp-components');
const UNIAPPX_DIR = path.resolve(__dirname, '../packages/uniapp-x-components/src/components');

// 需要在 uniapp-x 中创建的组件列表（按优先级排序）
const PRIORITY_COMPONENTS = [
  // 高优先级（基础交互组件）
  'checkbox',
  'checkbox-group',
  'radio',
  'radio-group',
  'textarea',
  'form',
  'form-item',
  'picker',
  'picker-item',
  'date-time-picker',
  'stepper',
  'switch',
  'slider',
  'rate',
  'search',
  'upload',
  // 中优先级
  'calendar',
  'cascader',
  'dropdown-menu',
  'dropdown-item',
  'swipe-cell',
  'swiper',
  'swiper-nav',
  'sticky',
  'pull-down-refresh',
  'table',
  'color-picker',
  'guide',
  'popover',
  'segmented',
  'tree-select',
  'transition',
  'locale',
  'config-provider',
  // 低优先级
  'message-item',
  'paragraph',
  'text',
  'title',
  'draggable',
  'scroll-view',
];

function toPascalCase(str) {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function generateComponent(componentName) {
  const targetDir = path.join(UNIAPPX_DIR, `t-${componentName}`);

  // 检查是否已存在
  if (fs.existsSync(targetDir)) {
    console.log(`⏭️  t-${componentName} 已存在，跳过`);
    return false;
  }

  // 读取源组件信息
  const sourceDir = path.join(UNIAPP_DIR, componentName);
  if (!fs.existsSync(sourceDir)) {
    console.log(`❌  uniapp-components 中找不到 ${componentName}`);
    return false;
  }

  // 创建目录
  fs.mkdirSync(targetDir, { recursive: true });

  // 1. 生成 index.ts
  const indexContent = `export { default as ${toPascalCase(componentName)} } from './${componentName}';
export * from './${componentName}';
`;
  fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent);

  // 2. 生成 _example 目录和示例
  const exampleDir = path.join(targetDir, '_example');
  fs.mkdirSync(exampleDir, { recursive: true });

  const pascalName = toPascalCase(componentName);
  const exampleContent = `<template>
  <view class="demo-page">
    <t-navbar title="${pascalName} 组件示例" />
    <view class="demo-section">
      <view class="demo-title">基础用法</view>
      <view class="demo-content">
        <t-${componentName} />
      </view>
    </view>
  </view>
</template>

<script setup lang="uts">
import { ref } from 'vue';
</script>

<style lang="less">
.demo-page {
  padding: 32rpx;
}
.demo-section {
  margin-bottom: 48rpx;
}
.demo-title {
  font-size: 28rpx;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 16rpx;
}
.demo-content {
  background: #fff;
  border-radius: 12rpx;
  padding: 24rpx;
}
</style>
`;
  fs.writeFileSync(path.join(exampleDir, `${componentName}.uvue`), exampleContent);

  // 3. 生成基础 .uvue 文件（模版）
  const uvueContent = generateUvueTemplate(componentName, pascalName);
  fs.writeFileSync(path.join(targetDir, `t-${componentName}.uvue`), uvueContent);

  // 4. 生成 types.ts
  const typesContent = generateTypesFile(componentName, pascalName);
  fs.writeFileSync(path.join(targetDir, `t-${componentName}.types.ts`), typesContent);

  // 5. 生成 variants.ts
  const variantsContent = generateVariantsFile(componentName, pascalName);
  fs.writeFileSync(path.join(targetDir, `t-${componentName}.variants.ts`), variantsContent);

  // 6. 生成 theme.less
  const themeContent = generateThemeFile(componentName);
  fs.writeFileSync(path.join(targetDir, `t-${componentName}.theme.less`), themeContent);

  console.log(`✅  t-${componentName} 组件骨架已生成`);
  return true;
}

function generateUvueTemplate(componentName, pascalName) {
  return `<template>
  <view :class="rootClass">
    <slot />
  </view>
</template>

<script setup lang="uts">
/**
 * ${pascalName} - uni-app x 实现
 * 
 * TODO: 根据 uniapp-components/${componentName} 完善实现
 */
import { computed } from 'vue';
import { ${componentName}Variants } from './t-${componentName}.variants';

const props = defineProps({
  customClass: { type: String, default: '' },
});

const rootClass = computed(() => 
  ${componentName}Variants({ class: props.customClass })
);
</script>

<style lang="less">
@import './t-${componentName}.theme.less';
</style>
`;
}

function generateTypesFile(componentName, pascalName) {
  const typeName = toPascalCase(componentName);
  return `/**
 * ${typeName} 组件类型定义
 * 
 * TODO: 根据 uniapp-components/${componentName}/type.ts 完善类型
 */

export type ${typeName}Theme = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type ${typeName}Size = 'small' | 'medium' | 'large';
`;
}

function generateVariantsFile(componentName, pascalName) {
  return `import { tv } from '../../utils/class-composer';
import type { ${toPascalCase(componentName)}Theme, ${toPascalCase(componentName)}Size } from './t-${componentName}.types';

export const ${componentName}Variants = tv({
  base: 't-${componentName}',
  variants: {
    theme: {
      default: 't-${componentName}--default',
      primary: 't-${componentName}--primary',
      success: 't-${componentName}--success',
      warning: 't-${componentName}--warning',
      error: 't-${componentName}--error',
    },
    size: {
      small: 't-${componentName}--small',
      medium: 't-${componentName}--medium',
      large: 't-${componentName}--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
`;
}

function generateThemeFile(componentName) {
  return `// ${componentName} 主题变量
.t-${componentName} {
  // TODO: 根据 uniapp-components/${componentName} 的样式完善
}
`;
}

// 主函数
function main() {
  const targetComponent = process.argv[2];

  if (targetComponent) {
    // 生成单个组件
    console.log(`🚀 生成组件: t-${targetComponent}`);
    generateComponent(targetComponent);
  } else {
    // 批量生成
    console.log(`🚀 批量生成 ${PRIORITY_COMPONENTS.length} 个组件...`);
    let generated = 0;
    let skipped = 0;

    for (const comp of PRIORITY_COMPONENTS) {
      const result = generateComponent(comp);
      if (result) {
        generated++;
      } else {
        skipped++;
      }
    }

    console.log(`\n📊 完成统计:`);
    console.log(`   生成: ${generated} 个`);
    console.log(`   跳过: ${skipped} 个`);
  }

  console.log('\n⚠️  注意：生成的组件仅为骨架，需要根据 uniapp-components 中的实现完善逻辑！');
}

main();
