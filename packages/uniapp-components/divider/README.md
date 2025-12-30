---
title: Divider 分割线
description: 用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。
spline: message
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TDivider from 'tdesign-uniapp/divider/divider.vue';
```

### 基础分割符

分割符主要是由直线和文字组成，通过`slot`传入分割线文案或者其他自定义内容，通过`layout`控制分隔符是垂直还是横向

{{ base }}

### 虚线样式

{{ theme }}

## API

### Divider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
align | String | center | 文本位置（仅在水平分割线有效）。可选项：left/right/center | N
content | String | - | 子元素 | N
dashed | Boolean | false | 是否虚线（仅在水平分割线有效） | N
layout | String | horizontal | 分隔线类型有两种：水平和垂直。可选项：horizontal/vertical | N

### Divider Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容

### Divider External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-divider-border-width | 2rpx | - |
| --td-divider-color | @bg-color-component | - |
| --td-divider-content-color | @text-color-placeholder | - |
| --td-divider-content-font-size | @font-size-s | - |
| --td-divider-content-line-height | 40rpx | - |
| --td-divider-content-line-style | solid | - |
| --td-divider-content-margin | @spacer-1 | - |
| --td-divider-horizontal-margin | 20rpx | - |
| --td-divider-vertical-margin | @spacer | - |