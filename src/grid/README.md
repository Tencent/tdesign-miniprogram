---
title: Grid 宫格
description: 用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-93%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-94%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-grid": "tdesign-miniprogram/grid/grid",
  "t-grid-item": "tdesign-miniprogram/grid-item/grid-item"
}
```

## 代码演示

### 组件类型
基础宫格

{{ base }}

带说明的宫格

{{ description }}

带边框的宫格

{{ border }}

带徽章的宫格

{{ badge }}

可滑动的宫格

{{ scroll }}

### 组件样式

可传图标的宫格

{{ icon-grid }}

多行宫格

{{ multiple }}

卡片宫格

{{ card }}


## API
### Grid Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | center | 内容对齐方式。可选项：left/center | N
border | Boolean / Object | false | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | 每一行的列数量；为 0 时等于固定大小 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素类名。`['t-class']` | N
gutter | Number | - | 间隔大小 | N
hover | Boolean | false | 是否开启点击反馈 | N
theme | String | default | 宫格的风格。可选项：default/card | N

### GridItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | null | 透传至 Badge 属性。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/grid-item/type.ts) | N
description | String / Slot | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名。`['t-class', 't-class-image', 't-class-text', 't-class-description']` | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String / Slot | - | 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽 | N
image-props | Object | - | 透传至 Image 组件 | N
jump-type | String | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
text | String / Slot | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点 | N
url | String | - | 点击后的跳转链接 | N

### GridItem Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击子项后触发

