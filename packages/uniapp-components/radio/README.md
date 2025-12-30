---
title: Radio 单选框
description: 用于在预设的一组选项中执行单项选择，并呈现选择结果。
spline: form
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TRadio from 'tdesign-uniapp/radio/radio.vue';
import TRadioGroup from 'tdesign-uniapp/radio-group/radio-group.vue';
```

### 纵向单选框

{{ base }}

### 横向单选框

{{ horizontal }}

### 单选框状态

{{ status }}

### 勾选样式

{{ theme }}

### 勾选显示位置

{{ align }}

### 非通栏单选样式

{{ card }}

### 特殊样式

{{ special }}

## API

### Radio Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
allow-uncheck | Boolean | false | 是否允许取消选中 | N
block | Boolean | true | 是否为块级元素 | N
checked | Boolean | false | 是否选中。支持语法糖 `v-model:checked` | N
default-checked | Boolean | false | 是否选中。非受控属性 | N
content | String | - | 单选内容 | N
content-disabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否为禁用态 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽。TS 类型：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
placement | String | - | 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
relation-key | String | - | -1 时代表独立，不再寻找 parent，用于头条小程序 | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：`T` `type RadioValue = string \| number \| boolean`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { checked: boolean })` | 值变化时触发

### Radio Slots

名称 | 描述
-- | --
\- | 默认插槽，主文案
content | 自定义 `content` 显示内容
icon | 自定义选中图标和非选中图标
label | 自定义 `label` 显示内容

### Radio External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-border | 边框样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-label | 标签样式类


### RadioGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
allow-uncheck | Boolean | false | 是否允许取消选中 | N
borderless | Boolean | false | 是否开启无边框模式 | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效。TS 类型：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
keys | Object | - | 用来定义 value / label / disabled 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N
placement | String | left | 复选框和内容相对位置。优先级低于 Radio.placement。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
relation-key | String | - | -1 时代表独立，不再寻找 parent，用于头条小程序 | N
value | String / Number / Boolean | - | 选中的值。支持语法糖 `v-model:value`。TS 类型：`T`，[Radio API Documents](./radio?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N
default-value | String / Number / Boolean | - | 选中的值。非受控属性。TS 类型：`T`，[Radio API Documents](./radio?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: RadioValue })` | 选中值发生变化时触发

### RadioGroup Slots

名称 | 描述
-- | --
\- | 默认插槽，单选框组内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-radio-bg-color | @bg-color-container | - |
| --td-radio-border-color | @component-stroke | - |
| --td-radio-content-checked-color | @text-color-secondary | - |
| --td-radio-content-color | @text-color-secondary | - |
| --td-radio-content-disabled-color | @text-color-disabled | - |
| --td-radio-content-font-size | 28rpx | - |
| --td-radio-content-line-height | 44rpx | - |
| --td-radio-font-size | 32rpx | - |
| --td-radio-icon-checked-color | @brand-color | - |
| --td-radio-icon-color | @component-border | - |
| --td-radio-icon-disabled-bg-color | @bg-color-component-disabled | - |
| --td-radio-icon-disabled-color | @brand-color-disabled | - |
| --td-radio-icon-size | 48rpx | - |
| --td-radio-label-checked-color | @text-color-primary | - |
| --td-radio-label-color | @text-color-primary | - |
| --td-radio-label-disabled-color | @text-color-disabled | - |
| --td-radio-label-line-height | 48rpx | - |
| --td-radio-vertical-padding | 32rpx | - |