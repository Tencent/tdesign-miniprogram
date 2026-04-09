---
title: Tag 标签
description: 用于表明主体的类目，属性或状态。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TTag from '@tdesign/uniapp/tag/tag.vue';
import TCheckTag from '@tdesign/uniapp/check-tag/check-tag.vue';
```

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
closable | Boolean / Object | false | 标签是否可关闭 | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object | - | 标签中的图标，可自定义图标呈现 | N
max-width | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large | N
theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### Tag Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: { e: MouseEvent })` | 点击时触发
close | `(context: { e: MouseEvent })` | 如果关闭按钮存在，点击关闭按钮时触发

### Tag Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
closable | 标签可关闭内容区域
icon | 标签中的图标

### Tag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### CheckTag Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
checked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态。支持语法糖 `v-model:checked` | N
default-checked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N
closable | Boolean | false | 标签是否可关闭 | N
content | String / Number / Array | - | 组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：`string \| number \| string[]` | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object | - | 标签图标 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### CheckTag Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { checked: boolean })` | 状态切换时触发
click | \- | 点击标签时触发
close | \- | 如果关闭按钮存在，点击关闭按钮时触发

### CheckTag Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义内容区域
icon | 标签区域

### CheckTag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-tag-close-icon-color | @text-color-placeholder | -
--td-tag-danger-color | @error-color | -
--td-tag-danger-light-color | @error-color-1 | -
--td-tag-default-color | @bg-color-component | -
--td-tag-default-font-color | @text-color-primary | -
--td-tag-default-light-color | @bg-color-secondarycontainer | -
--td-tag-disabled-background-color | @bg-color-component-disabled | -
--td-tag-disabled-border-color | @component-border | -
--td-tag-disabled-color | @text-color-disabled | -
--td-tag-extra-large-font | @font-body-medium | -
--td-tag-extra-large-icon-size | 32rpx | -
--td-tag-extra-large-padding | 16rpx 30rpx | -
--td-tag-large-font | @font-body-medium | -
--td-tag-large-icon-size | 32rpx | -
--td-tag-large-padding | 4rpx 14rpx | -
--td-tag-mark-border-radius | @tag-round-border-radius | -
--td-tag-medium-font | @font-body-small | -
--td-tag-medium-icon-size | 28rpx | -
--td-tag-medium-padding | 2rpx 14rpx | -
--td-tag-outline-bg-color | @bg-color-container | -
--td-tag-primary-color | @brand-color | -
--td-tag-primary-light-color | @brand-color-light | -
--td-tag-round-border-radius | 999px | -
--td-tag-small-font | @font-body-extraSmall | -
--td-tag-small-icon-size | 24rpx | -
--td-tag-small-padding | 2rpx 10rpx | -
--td-tag-square-border-radius | 8rpx | -
--td-tag-success-color | @success-color | -
--td-tag-success-light-color | @success-color-1 | -
--td-tag-warning-color | @warning-color | -
--td-tag-warning-light-color | @warning-color-1 | -
