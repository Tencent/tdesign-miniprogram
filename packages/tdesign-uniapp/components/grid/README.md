---
title: Grid 宫格
description: 用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TGrid from 'tdesign-uniapp/grid/grid.vue';
import TGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
```

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
align | String | center | 内容对齐方式。可选项：left/center | N
border | Boolean / Object | false | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | 每一行的列数量；为 0 时等于固定大小 | N
gutter | Number | - | 间隔大小 | N
hover | Boolean | false | 是否开启点击反馈 | N
theme | String | default | 宫格的风格。可选项：default/card | N

### Grid Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### Grid External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### GridItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
badge-props | Object | {} | 透传至 Badge 属性。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
description | String | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String | - | 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽 | N
image-props | Object | {} | 透传至 Image 组件。TS 类型：`ImageProps`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
jump-type | String | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
text | String | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点 | N
url | String | - | 点击后的跳转链接 | N

### GridItem Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击子项后触发

### GridItem Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
description | 自定义 `description` 模块内容
image | 自定义 `image` 模块内容
text | 自定义 `text` 模块内容

### GridItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-description | 描述样式类
t-class-image | 图片样式类
t-class-text | 文本样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-grid-bg-color | @bg-color-container | - |
| --td-grid-card-radius | @radius-large | - |
| --td-grid-item-bg-color | @bg-color-container | - |
| --td-grid-item-description-color | @text-color-placeholder | - |
| --td-grid-item-description-font-size | 24rpx | - |
| --td-grid-item-description-line-height | 40rpx | - |
| --td-grid-item-description-padding-top | 0 | - |
| --td-grid-item-horizontal-text-description-top | 0 | - |
| --td-grid-item-horizontal-text-padding-left | 0 | - |
| --td-grid-item-hover-bg-color | @bg-color-secondarycontainer | - |
| --td-grid-item-image-middle-width | 80rpx | - |
| --td-grid-item-image-small-width | 64rpx | - |
| --td-grid-item-image-width | 96rpx | - |
| --td-grid-item-padding | 32rpx | - |
| --td-grid-item-text-color | @text-color-primary | - |
| --td-grid-item-text-font-size | 28rpx | - |
| --td-grid-item-text-line-height | 44rpx | - |
| --td-grid-item-text-middle-font-size | 24rpx | - |
| --td-grid-item-text-padding-top | 16rpx | - |
| --td-grid-item-text-small-font-size | 24rpx | - |