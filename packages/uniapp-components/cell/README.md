---
title: Cell 单元格
description: 用于各个类别行的信息展示。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TCellGroup from '@tdesign/uniapp/cell-group/cell-group.vue';
```

### 类型

单行单元格

{{ base }}

多行单元格

{{ multiple }}

### 样式

卡片单元格

{{ theme }}

## API

### Cell Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
align | String | middle | 右侧内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean / Object | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
description | String | - | 下方内容描述 | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String | - | 主图 | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | 左侧图标，出现在单元格标题的左侧 | N
note | String | - | 和标题同行的说明文字 | N
note-style | String / Object | - | 说明文字自定义样式 | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Object | - | 最右侧图标 | N
right-icon-style | String / Object | - | 右侧图标自定义样式 | N
title | String | - | 标题 | N
title-style | String / Object | - | 标题自定义样式 | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | `(e: MouseEvent)` | 右侧内容

### Cell Slots

名称 | 描述
-- | --
description | 自定义 `description` 显示内容
image | 自定义 `image` 显示内容
left-icon | 自定义 `left-icon` 显示内容
note | 自定义 `note` 显示内容
right-icon | 自定义 `right-icon` 显示内容
title | 自定义 `title` 显示内容

### Cell External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-center | 中间（`title`, `description`）内容样式类
t-class-description | 下方描述内容样式类
t-class-hover | 悬停样式类
t-class-image | 图片样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-note | 右侧说明文字样式类
t-class-right | 右侧内容样式类
t-class-right-icon | 右侧图标样式类
t-class-title | 标题样式类


### CellGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
bordered | Boolean | false | 是否显示组边框 | N
theme | String | default | 单元格组风格。可选项：default/card | N
title | String | - | 单元格组标题 | N

### CellGroup Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### CellGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-title | 标题样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-cell-group-border-color | @component-stroke | -
--td-cell-group-title-bg-color | @bg-color-secondarycontainer | -
--td-cell-group-title-color | @text-color-placeholder | -
--td-cell-group-title-font-size | 28rpx | -
--td-cell-group-title-line-height | 90rpx | -
--td-cell-group-title-padding-left | 32rpx | -
--td-cell-bg-color | @bg-color-container | -
--td-cell-border-color | @component-stroke | -
--td-cell-border-left-space | @cell-horizontal-padding | -
--td-cell-border-right-space | 0 | -
--td-cell-border-width | 1px | -
--td-cell-description-color | @text-color-secondary | -
--td-cell-description-font | @font-body-medium | -
--td-cell-height | auto | -
--td-cell-horizontal-padding | 32rpx | -
--td-cell-hover-color | @bg-color-secondarycontainer | -
--td-cell-image-height | 96rpx | -
--td-cell-image-width | 96rpx | -
--td-cell-left-icon-color | @brand-color | -
--td-cell-left-icon-size | 48rpx | -
--td-cell-note-color | @text-color-placeholder | -
--td-cell-note-font-size | @font-size-m | -
--td-cell-required-color | @error-color | -
--td-cell-required-font-size | @font-size-m | -
--td-cell-right-icon-color | @text-color-placeholder | -
--td-cell-right-icon-size | 48rpx | -
--td-cell-title-color | @text-color-primary | -
--td-cell-title-font | @font-body-large | -
--td-cell-vertical-padding | 32rpx | -
