# Icon

一个 uni-app x 兼容的图标组件，支持字体图标与图片链接两种渲染模式。

## 何时使用

- 标识按钮、菜单项等元素的功能
- 与文字配合提升信息密度

## Props

| 名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| name | `string` | - | **必填**。图标名称（字体图标）或图片链接（含 `/`） |
| color | `string` | `''` | 图标颜色，支持任意 CSS color 值 |
| size | `string \| number` | `''` | 图标大小，纯数字默认补 `px`；如 `20`、`'20px'`、`'48rpx'` |
| prefix | `string` | `''` | 自定义图标前缀；为空时回退至 `t-icon` |
| customClass | `string` | `''` | 透传额外类名 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| click | `(event: MouseEvent)` | 点击触发 |

## 用法示例

```vue
<template>
  <!-- 内置 iconfont -->
  <TIcon name="check" />

  <!-- 自定义颜色与尺寸 -->
  <TIcon name="close" color="#0052d9" size="32" />

  <!-- 图片链接（自动识别为图片模式） -->
  <TIcon name="https://tdesign.gtimg.com/site/avatar.jpg" size="48" />

  <!-- 自定义前缀（接入业务 iconfont） -->
  <TIcon prefix="my-icon" name="alert" />
</template>

<script setup lang="ts">
import { TIcon } from '@tdesign/uniapp-x';
</script>
```

## 类名结构（供主题覆盖）

```
.t-icon
  .t-icon--image?    // 图片模式时存在
  .t-icon__glyph     // 字体图标节点
  .t-icon__image     // 图片节点
```

## 跨端说明

- **H5 / 单测**：使用 [`icon.vue`](../../../../uniapp-components/icon/icon.vue)（vue3 SFC）
- **Android / iOS**：使用 [`t-icon.uvue`](./t-icon.uvue)（uts/uvue SFC，行为镜像）
- 两端共享 `t-icon.variants.ts` / `t-icon.types.ts`，确保类名与契约完全一致

> ⚠️ uni-app x（App 端）默认不支持 iconfont 字体，使用字体图标需在外部全局注入 `font-face`，或使用图片链接模式作为兜底。
