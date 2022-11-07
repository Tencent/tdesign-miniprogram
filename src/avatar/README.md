---
title: Avatar 头像
description: 用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-99%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-85%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-avatar": "tdesign-miniprogram/avatar/avatar",
  "t-avatar-group": "tdesign-miniprogram/avatar/avatar-group"
}
```

### 主题定制
CSS 变量名|说明
--|--
--td-avatar-bg-color | 头像背景颜色;
--td-avatar-content-color | 头像内容（文字、图标）颜色;
--td-avatar-group-border-color | 组合头像边框颜色;

## 代码演示

### 基础头像

头像样式可为默认头像、微信头像圆形、方形、自定义文字

<img src="https://tdesign.gtimg.com/miniprogram/readme/avatar-2.png" width="375px" height="50%">

{{ shape }}

### 纯展示 从上往下
<img src="https://tdesign.gtimg.com/miniprogram/readme/avatar-1.png" width="375px" height="50%">

{{ exhibition }}

### 带操作 从下往上

{{ action }}

### 头像大小尺寸及消息提醒

<img src="https://tdesign.gtimg.com/miniprogram/readme/avatar-3.png" width="375px" height="50%">

{{ size }}

## API
### Avatar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
badge-props | Object | - | 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素类名。`['t-class', 't-class-image', 't-class-icon', 't-class-alt', 't-class-content']` | N
hide-on-load-failed | Boolean | false | 加载失败时隐藏图片 | N
icon | String / Slot | - | 图标 | N
image | String | - | 图片地址 | N
image-props | Object | - | 【开发中】透传至 Image 组件 | N
shape | String | circle | 形状。可选项：circle/round。TS 类型：`ShapeEnum ` `type ShapeEnum = 'circle' \| 'round'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等，默认为 large | N

### Avatar Events

名称 | 参数 | 描述
-- | -- | --
error | \- | 图片加载失败时触发

### AvatarGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cascading | String | 'right-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
collapse-avatar | String / Slot | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多` | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素类名。`['t-class', 't-class-image', 't-class-content']` | N
max | Number | - | 能够同时显示的最多头像数量 | N
size | String | medium | 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size | N
