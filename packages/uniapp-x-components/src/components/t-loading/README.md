# Loading

一个 uni-app x 兼容的加载组件，支持 3 种主题动画 × 2 种排版方向，可作为内联占位或全屏遮罩使用。

## 何时使用

- 数据加载、操作处理过程中给予用户反馈
- 减缓等待焦虑感

## Props

| 名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| theme | `'circular' \| 'spinner' \| 'dots'` | `'circular'` | 加载动画类型 |
| layout | `'horizontal' \| 'vertical'` | `'horizontal'` | 指示符与文本的排版 |
| text | `string` | `''` | 加载提示文案 |
| size | `string \| number` | `'20px'` | 指示符尺寸；纯数字默认补 `px` |
| duration | `number` | `800` | 动画一周耗时（毫秒） |
| loading | `boolean` | `true` | 是否处于加载状态 |
| delay | `number` | `0` | 延迟显示时间（毫秒），防止快速请求闪烁 |
| pause | `boolean` | `false` | 是否暂停动画 |
| reverse | `boolean` | `false` | 是否反向旋转 |
| inheritColor | `boolean` | `false` | 是否继承父元素颜色 |
| indicator | `boolean` | `true` | 是否显示指示符 |
| fullscreen | `boolean` | `false` | 是否全屏遮罩 |
| customClass | `string` | `''` | 透传额外类名 |

## Slots

| 名称 | 说明 |
|---|---|
| default | 自定义文本节点（与 `text` 二选一） |
| indicator | 自定义指示符 |

## 用法示例

```vue
<template>
  <!-- 默认环形 -->
  <TLoading text="加载中..." />

  <!-- 12 条 spinner -->
  <TLoading theme="spinner" size="32" />

  <!-- 三点 -->
  <TLoading theme="dots" size="40" />

  <!-- 纵向排版 -->
  <TLoading layout="vertical" text="加载中..." />

  <!-- 全屏遮罩 -->
  <TLoading v-if="submitting" fullscreen text="提交中..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TLoading } from '@tdesign/uniapp-x';

const submitting = ref(false);
</script>
```

## 类名结构（供主题覆盖）

```
.t-loading
  .t-loading--{horizontal|vertical}
  .t-loading--fullscreen?
  .t-loading--inherit-color?

  .t-loading__spinner
    .t-loading__spinner--{circular|spinner|dots}
    .t-loading__spinner--reverse?
    .t-loading__dot.t-loading__dot-{0..11}
      .t-loading__dot-bar
    .t-loading__dots-wrapper
      .t-loading__dots-item.t-loading__dots-item-{0..2}

  .t-loading__text
    .t-loading__text--{horizontal|vertical}
```

## CSS Variables

| 名称 | 默认值 | 描述 |
|---|---|---|
| `--td-loading-color` | `#0052d9` | 指示符颜色 |
| `--td-loading-text-color` | `rgba(0, 0, 0, 0.9)` | 文案颜色 |
| `--td-loading-text-font-size` | `14px` | 文案字号 |
| `--td-loading-z-index` | `3500` | 全屏遮罩层级 |
| `--td-loading-full-bg-color` | `rgba(255, 255, 255, 0.6)` | 全屏遮罩背景色 |

## 跨端说明

- **H5 / 单测**：使用 [`loading.vue`](../../../../uniapp-components/loading/loading.vue)（vue3 SFC）
- **Android / iOS**：使用 [`t-loading.uvue`](./t-loading.uvue)（uts/uvue SFC，行为镜像）
- 两端共享 `t-loading.variants.ts` / `t-loading.types.ts`，确保类名与契约完全一致

> ⚠️ uni-app x 不支持 `conic-gradient` / `mask`，circular 主题改用 border 旋转实现。
