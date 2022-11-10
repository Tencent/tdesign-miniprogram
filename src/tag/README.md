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
  "t-check-tag": "tdesign-miniprogram/tag/check-tag"
}
```

## 代码演示

### 类型
#### 展示型标签

{{ theme }}

#### 带图标标签

{{ iconDemo }}

#### 圆角标签

{{ shape }}

#### 可关闭标签

{{ closable }}

#### 超长省略文本标签

{{ ellipsis }}


## 状态

#### 标签状态

{{ checkable }}

#### 标签规格

{{ size }}

## API
### Tag Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
closable | Boolean | false | 标签是否可关闭 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
external-classes | Array | - | 组件类名，用于设置 组件外层元素元素类名。`['t-class']` | N
icon | String / Slot | - | 标签中的图标，可自定义图标呈现 | N
max-width | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80。TS 类型：`CSSProperties['maxWidth'] \| number` | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large。TS 类型：`SizeEnum` | N
theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### Tag Events

名称 | 参数 | 描述
-- | -- | --
click | - | 点击时触发
close | - | 如果关闭按钮存在，点击关闭按钮时触发

### CheckTag Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
checked | Boolean | false | 标签选中的状态，默认风格（theme=default）才有选中态 | N
default-checked | Boolean | false | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N
closable | Boolean | false | 标签是否可关闭 | N
content | String / Number / Slot | - | 组件子元素 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Slot | - | 标签中的图标，可自定义图标呈现 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large。TS 类型：`SizeEnum` | N
external-classes | Array | - | 组件类名，用于设置 组件外层元素元素类名。`['t-class']` | N
variant `v0.26.0` | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### CheckTag Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 组件子元素
close  | -    | 如果关闭按钮存在，点击关闭按钮时触发 |
