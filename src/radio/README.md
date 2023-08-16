---
title: Radio 单选框
description: 用于在预设的一组选项中执行单项选择，并呈现选择结果。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-98%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-99%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-radio": "tdesign-miniprogram/radio/radio",
  "t-radio-group": "tdesign-miniprogram/radio-group/radio-group"
}
```

## 代码演示

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

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
placement | String | left | 复选框和内容相对位置。可选项：left/right | N
allow-uncheck | Boolean | false | 是否允许取消选中 | N
block | Boolean | true | 是否为块级元素 | N
checked | Boolean | false | 是否选中 | N
default-checked | Boolean | undefined | 是否选中。非受控属性 | N
content | String / Slot | - | 单选内容 | N
content-disabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
readonly | Boolean | false | 只读状态 | N
disabled | Boolean | undefined | 是否为禁用态 | N
icon | String / Array / Slot | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽。TS 类型：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String / Slot | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：`RadioValue` `type RadioValue = string | number | boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 值变化时触发

### Radio 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-label | 标签样式类
t-class-icon | 图标样式类
t-class-content | 内容样式类
t-class-border | 边框样式类

### RadioGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
placement | String | 'left' | 复选框和内容相对位置；仅在使用 options 时生效。可选项：left/right | N
borderless | Boolean | false | 是否开启无边框模式 | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效。TS 类型：`'circle' | 'line' | 'dot' | Array<string>` | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
value | String / Number / Boolean | false | 选中的值。TS 类型：`RadioValue` | N
default-value | String / Number / Boolean | undefined | 选中的值。非受控属性。TS 类型：`RadioValue` | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: RadioValue)` | 选中值发生变化时触发


### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-radio-bg-color | @bg-color-container | - 
--td-radio-border-color | @component-stroke | - 
--td-radio-content-checked-color | @font-gray-2 | - 
--td-radio-content-color | @font-gray-2 | - 
--td-radio-content-disabled-color | @font-gray-4 | - 
--td-radio-content-font-size | 28rpx | - 
--td-radio-content-line-height | 44rpx | - 
--td-radio-font-size | 32rpx | - 
--td-radio-icon-checked-color | @brand-color | - 
--td-radio-icon-color | @component-border | - 
--td-radio-icon-disabled-bg-color | @bg-color-component-disabled | - 
--td-radio-icon-disabled-color | @brand-color-disabled | - 
--td-radio-icon-size | 48rpx | - 
--td-radio-label-checked-color | @font-gray-1 | - 
--td-radio-label-color | @font-gray-1 | - 
--td-radio-label-disabled-color | @font-gray-4 | - 
--td-radio-label-line-height | 48rpx | - 
--td-radio-vertical-padding | 32rpx | - 
