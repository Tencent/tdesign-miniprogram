---
title: Cell 单元格
description: 用于各个类别行的信息展示。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-cell": "tdesign-miniprogram/cell/cell"
}
```

## 代码演示

### 类型

单行单元格

<img src="https://tdesign.gtimg.com/miniprogram/readme/cell-1.png" width="375px" height="50%">

{{ base }}

多行单元格

<img src="https://tdesign.gtimg.com/miniprogram/readme/cell-2.png" width="375px" height="50%">

{{ multiple }}

### 样式

卡片单元格

{{ theme }}

## API
### Cell Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | middle | 内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
description | String / Slot | - | 下方内容描述 | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String / Slot | - | 主图 | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Slot | - | 左侧图标，出现在单元格标题的左侧 | N
note | String / Slot | - | 和标题同行的说明文字 | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Slot | - | 最右侧图标 | N
title | String / Slot | - | 标题 | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | - | 右侧内容

### Cell 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-title | 标题样式类
t-class-description | 下方描述内容样式类
t-class-note | 右侧说明文字样式类
t-class-hover | 悬停样式类
t-class-image | 图片样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-center | 中间（`title`, `description`）内容样式类
t-class-right | 右侧内容样式类
t-class-right-icon | 右侧图标样式类

### CellGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | - | 是否显示组边框 | N
theme | String | default | 单元格风格。可选项：default/card | N
title | String | - | 单元格组标题 | N

### CellGroup 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-title | 标题样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-cell-group-border-color | @border-color | - 
--td-cell-group-title-bg-color | @bg-color-secondarycontainer | - 
--td-cell-group-title-color | @font-gray-3 | - 
--td-cell-group-title-font-size | 28rpx | - 
--td-cell-group-title-line-height | 90rpx | - 
--td-cell-group-title-padding-left | 32rpx | - 
--td-cell-bg-color | @bg-color-container | - 
--td-cell-border-color | @component-stroke | - 
--td-cell-border-width | 1px | - 
--td-cell-border-left-space | @cell-horizontal-padding | - 
--td-cell-border-right-space | 0 | - 
--td-cell-description-color | @font-gray-2 | - 
--td-cell-description-font-size | @font-size-base | - 
--td-cell-description-line-height | 44rpx | - 
--td-cell-height | auto | - 
--td-cell-horizontal-padding | 32rpx | - 
--td-cell-hover-color | @bg-color-secondarycontainer | - 
--td-cell-image-height | 96rpx | - 
--td-cell-image-width | 96rpx | - 
--td-cell-left-icon-color | @brand-color | - 
--td-cell-left-icon-font-size | 48rpx | - 
--td-cell-line-height | 48rpx | - 
--td-cell-note-color | @font-gray-3 | - 
--td-cell-note-font-size | @font-size-m | - 
--td-cell-required-color | @error-color-6 | - 
--td-cell-required-font-size | @font-size-m | - 
--td-cell-right-icon-color | @font-gray-3 | - 
--td-cell-right-icon-font-size | 48rpx | - 
--td-cell-title-color | @font-gray-1 | - 
--td-cell-title-font-size | @font-size-m | - 
--td-cell-vertical-padding | 32rpx | - 
