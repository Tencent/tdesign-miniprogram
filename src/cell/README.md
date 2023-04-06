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
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、标题类名、下方描述内容类名、右侧说明文字类名、激活态类名、图片类名、左侧内容、左侧图标类名、右侧内容、右侧图标类名 等。`['t-class', 't-class-title', 't-class-description', 't-class-note', 't-class-hover', 't-class-image', 't-class-left', 't-class-left-icon', 't-class-right', 't-class-right-icon']` | N
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

### CellGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | - | 是否显示组边框 | N
external-classes | Array | - | 组件类名。`['t-class']` | N
theme | String | default | 单元格风格。可选项：default/card | N
title | String | - | 单元格组标题 | N
