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
  "t-avatar-group": "tdesign-miniprogram/avatar-group/avatar-group"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/a86Sfimw7VSO" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 头像类型

图片头像

{{ image-avatar }}

字符头像

{{ character-avatar }}

图标头像

{{ icon-avatar }}

徽标头像

{{ badge-avatar }}


### 组合头像

纯展示

{{ exhibition }}

带操作

{{ action }}

### 头像尺寸

头像 large/medium/small 尺寸

{{ size }}

## API

### Avatar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
badge-props | Object | - | 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
bordered | Boolean | false | 已废弃。是否显示外边框 | N
hide-on-load-failed | Boolean | false | 加载失败时隐藏图片 | N
icon | String / Object | - | 图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 | N
image | String | - | 图片地址 | N
image-props | Object | - | 透传至 Image 组件。TS 类型：`ImageProps`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
shape | String | - | 形状。优先级高于 AvatarGroup.shape 。Avatar 单独存在时，默认值为 circle。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.shape 决定。可选项：circle/round。TS 类型：`ShapeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.size 决定 | N

### Avatar Events

名称 | 参数 | 描述
-- | -- | --
error | - | 图片加载失败时触发

### Avatar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-alt | 替代文本样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-image | 图片样式类


### AvatarGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
cascading | String | 'left-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar-group/type.ts) | N
collapse-avatar | String / Slot | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max | Number | - | 能够同时显示的最多头像数量 | N
shape | String | - | 形状。优先级低于 Avatar.shape。可选项：circle/round。TS 类型：`ShapeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size | N

### AvatarGroup Events

名称 | 参数 | 描述
-- | -- | --
collapsed-item-click | - | 点击头像折叠元素触发

### AvatarGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-image | 图片样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-avatar-group-init-z-index | @avatar-group-init-zIndex) - @i | - 
--td-avatar-group-line-spacing | 4rpx | - 
--td-avatar-group-margin-left-large | -16rpx | - 
--td-avatar-group-margin-left-medium | -16rpx | - 
--td-avatar-group-margin-left-small | -16rpx | - 
--td-avatar-bg-color | @brand-color-light-active | - 
--td-avatar-border-color | #fff | - 
--td-avatar-border-width-large | 6rpx | - 
--td-avatar-border-width-medium | 4rpx | - 
--td-avatar-border-width-small | 2rpx | - 
--td-avatar-circle-border-radius | @radius-circle | - 
--td-avatar-content-color | @brand-color | - 
--td-avatar-icon-large-font-size | 64rpx | - 
--td-avatar-icon-medium-font-size | 48rpx | - 
--td-avatar-icon-small-font-size | 40rpx | - 
--td-avatar-large-width | 128rpx | - 
--td-avatar-margin-left | 0 | - 
--td-avatar-medium-width | 96rpx | - 
--td-avatar-round-border-radius | @radius-default | - 
--td-avatar-small-width | 80rpx | - 
--td-avatar-text-large-font-size | @font-size-xl | - 
--td-avatar-text-medium-font-size | @font-size-m | - 
--td-avatar-text-small-font-size | @font-size-base | -