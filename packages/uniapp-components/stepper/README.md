---
title: Stepper 步进器
description: 用于数量的增减。
spline: form
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TStepper from 'tdesign-uniapp/stepper/stepper.vue';
```

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
disable-input | Boolean | false | 禁用输入框 | N
disabled | Boolean | undefined | 禁用全部操作 | N
input-width | Number | - | 输入框宽度，默认单位 `px` | N
integer | Boolean | true | 是否整型 | N
max | Number | 100 | 最大值 | N
min | Number | 0 | 最小值 | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
step | Number | 1 | 步长 | N
theme | String | normal | 组件风格。可选项：normal/filled/outline | N
value | String / Number | 0 | 值。支持语法糖 `v-model:value` | N
default-value | String / Number | 0 | 值。非受控属性 | N

### Stepper Events

名称 | 参数 | 描述
-- | -- | --
blur | `(context: { type: string \| number })` | 输入框失去焦点时触发
change | `(context: { value: string \| number })` | 数值发生变更时触发
focus | `(context: { value: string \| number })` | 输入框聚焦时触发
overlimit | `(context: {type: 'minus' \| 'plus'})` | 数值超出限制时触发

### Stepper External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-input | 输入框样式类
t-class-minus | 左侧递减号样式类
t-class-plus | 右侧递增号样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-stepper-input-disabled-bg | @bg-color-component-disabled | - |
| --td-stepper-input-disabled-color | @text-color-disabled | - |
| --td-stepper-border-color | @component-border | - |
| --td-stepper-border-radius | @radius-small | - |
| --td-stepper-input-color | @text-color-primary | - |