---
title: Stepper 步进器
description: 用于数量的增减。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-82%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-94%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-stepper": "tdesign-miniprogram/stepper/stepper"
}
```

## 代码演示

### 组件类型

基础步进器

{{ base }}

### 组件状态

最大最小状态

{{ min-max }}

禁用状态

{{ status }}

### 组件样式

步进器样式

{{ theme }}

步进器尺寸

{{ size }}


## API
### Stepper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disable-input | Boolean | false | 禁用输入框 | N
disabled | Boolean | false | 禁用全部操作 | N
input-width | Number | - | 输入框宽度，默认单位 `px` | N
max | Number | 100 | 最大值 | N
min | Number | 0 | 最小值 | N
step | Number | 1 | 步长 | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
theme | String | normal | 组件风格。可选项：normal/filled/outline | N
value | String / Number | 0 | 值 | N
default-value | String / Number | undefined | 值。非受控属性 | N

### Stepper Events

名称 | 参数 | 描述
-- | -- | --
blur | `({ type: string \| number })` | 输入框失去焦点时触发
change | `({ value: string \| number })` | 数值发生变更时触发
overlimit | `({type: 'minus' \| 'plus'})` | 数值超出限制时触发

### Stepper 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-input | 输入框样式类
t-class-minus | 左侧递减号样式类
t-class-plus | 右侧递增号样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-stepper-border-color | @component-border | - 
--td-stepper-border-radius | @radius-small | - 
--td-stepper-input-color | @font-gray-1 | - 
--td-stepper-input-disabled-color | @font-gray-4 | - 
