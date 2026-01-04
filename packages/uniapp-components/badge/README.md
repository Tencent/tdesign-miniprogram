---
title: Badge 徽标
description: 用于告知用户，该区域的状态变化或者待处理任务的数量。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TBadge from 'tdesign-uniapp/badge/badge.vue';
```

### 组件类型

{{ base }}

### 组件样式

{{ theme }}

### 组件尺寸

{{ size }}

## FAQ

### 如何处理由 ribbon 徽标溢出导致页面出现横向滚动？
角标溢出问题建议从父容器组件处理。如 <a href="https://github.com/Tencent/tdesign-miniprogram/issues/3063" title="如 #3063 " target="_blank" rel="noopener noreferrer"> #3063 </a>，可以给父容器 `cell` 组件添加 `overflow: hidden`，处理溢出造成页面出现横向滚动的问题。

## API

### Badge Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
color | String | - | 颜色 | N
content | String | - | 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 | N
count | String / Number | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染 | N
dot | Boolean | false | 是否为红点 | N
max-count | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string \| number>` | N
shape | String | circle | 形状。可选项：circle/square/bubble/ribbon | N
show-zero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：medium/large | N

### Badge Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
count | 徽标右上角内容

### Badge External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-count | 计数样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-badge-basic-height | 32rpx | - |
| --td-badge-basic-padding | 8rpx | - |
| --td-badge-basic-width | 32rpx | - |
| --td-badge-bg-color | @error-color | - |
| --td-badge-border-radius | 4rpx | - |
| --td-badge-bubble-border-radius | 20rpx 20rpx 20rpx 1px | - |
| --td-badge-content-text-color | @text-color-primary | - |
| --td-badge-dot-size | 16rpx | - |
| --td-badge-font-size | @font-size-xs | - |
| --td-badge-font-weight | 600 | - |
| --td-badge-large-font-size | @font-size-s | - |
| --td-badge-large-height | 40rpx | - |
| --td-badge-large-padding | 10rpx | - |
| --td-badge-text-color | @text-color-anti | - |