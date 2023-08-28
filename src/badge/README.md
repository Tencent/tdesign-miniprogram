---
title: Badge 徽标
description: 用于告知用户，该区域的状态变化或者待处理任务的数量。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-badge": "tdesign-miniprogram/badge/badge"
}
```

## 代码演示

### 组件类型

{{ base }}

### 组件样式

{{ theme }}

### 组件尺寸

{{ size }}

## API
### Badge Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String | - | 颜色 | N
content | String | - | 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 | N
count | String / Number / Slot | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
dot | Boolean | false | 是否为红点 | N
max-count | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string \| number>` | N
shape | String | circle | 形状。可选项：circle/square/bubble/ribbon | N
show-zero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：medium/large | N

### Badge 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-count | 计数样式类
t-class-content | 内容样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-badge-basic-height | 32rpx | - 
--td-badge-basic-padding | 8rpx | - 
--td-badge-basic-width | 32rpx | - 
--td-badge-bg-color | @error-color | - 
--td-badge-border-radius | 4rpx | - 
--td-badge-bubble-border-radius | 20rpx 20rpx 20rpx 1px | - 
--td-badge-dot-size | 16rpx | - 
--td-badge-font-size | @font-size-xs | - 
--td-badge-font-weight | 600 | - 
--td-badge-large-font-size | @font-size-s | - 
--td-badge-large-height | 40rpx | - 
--td-badge-large-padding | 10rpx | - 
--td-badge-text-color | @font-white-1 | - 
