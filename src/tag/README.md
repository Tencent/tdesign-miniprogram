---
title: Tag 标签
description: 用于表明主体的类目，属性或状态。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tag": "tdesign-miniprogram/tag/tag",
  "t-check-tag": "tdesign-miniprogram/check-tag/check-tag"
}
```

## 代码演示

### 组件类型

{{ type }}

可关闭的标签

{{ closable }}

可点击的标签

{{ checkable }}

### 组件状态

展示型标签

{{ theme }}

### 组件尺寸

{{ size }}


## API
### Tag Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
closable | Boolean / Object / Slot | false | 标签是否可关闭。 | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object / Slot | - | 标签中的图标，可自定义图标呈现 | N
max-width | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large。TS 类型：`SizeEnum` | N
theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### Tag Events

名称 | 参数 | 描述
-- | -- | --
click | - | 点击时触发
close | - | 如果关闭按钮存在，点击关闭按钮时触发

### Tag 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类

### CheckTag Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
checked | Boolean | undefined | 标签选中的状态，默认风格（theme=default）才有选中态 | N
default-checked | Boolean | undefined | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N
closable | Boolean | false | 已废弃。标签是否可关闭 | N
content | String / Number / Array / Slot | - | 组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：`string \| number \| string[]` | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object / Slot | - | 标签图标 | N
shape | String | square | 已废弃。标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
variant | String | dark | `0.26.0`。标签风格变体。可选项：dark/light/outline/light-outline | N

### CheckTag Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 状态切换时触发
click | - | 点击标签时触发

### CheckTag 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-tag-close-icon-color | @font-gray-3 | - 
--td-tag-danger-color | @error-color | - 
--td-tag-danger-light-color | @error-color-1 | - 
--td-tag-default-color | @bg-color-component | - 
--td-tag-default-font-color | @font-gray-1 | - 
--td-tag-default-light-color | @bg-color-secondarycontainer | - 
--td-tag-disabled-background-color | @bg-color-component-disabled | - 
--td-tag-disabled-border-color | @component-border | - 
--td-tag-disabled-color | @font-gray-4 | - 
--td-tag-extra-large-font-size | @font-size-base | - 
--td-tag-extra-large-height | 80rpx | - 
--td-tag-extra-large-icon-size | 32rpx | - 
--td-tag-extra-large-padding | 32rpx - 1px | - 
--td-tag-large-font-size | @font-size-base | - 
--td-tag-large-height | 56rpx | - 
--td-tag-large-icon-size | 32rpx | - 
--td-tag-large-padding | 16rpx - 1px | - 
--td-tag-mark-border-radius | @tag-round-border-radius | - 
--td-tag-medium-font-size | @font-size-s | - 
--td-tag-medium-height | 48rpx | - 
--td-tag-medium-icon-size | 28rpx | - 
--td-tag-medium-padding | 16rpx - 1px | - 
--td-tag-outline-bg-color | @bg-color-container | - 
--td-tag-primary-color | @brand-color | - 
--td-tag-primary-light-color | @brand-color-light | - 
--td-tag-round-border-radius | 999px | - 
--td-tag-small-font-size | @font-size | - 
--td-tag-small-height | 40rpx | - 
--td-tag-small-icon-size | 24rpx | - 
--td-tag-small-padding | 12rpx - 1px | - 
--td-tag-square-border-radius | 8rpx | - 
--td-tag-success-color | @success-color | - 
--td-tag-success-light-color | @success-color-1 | - 
--td-tag-warning-color | @warning-color | - 
