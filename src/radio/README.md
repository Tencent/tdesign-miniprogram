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

### 主题定制

CSS 变量名|说明
--|--
--td-radio-bg-color | 背景颜色
--td-radio-border-color | 底部边框颜色
--td-radio-label-color | 主文案颜色
--td-radio-label-disabled-color | 禁用态主文案颜色
--td-radio-content-color | 单选内容颜色
--td-radio-content-disabled-color | 禁用态单选内容颜色
--td-radio-icon-color | 图标颜色
--td-radio-icon-checked-color | 选中态图标颜色
--td-radio-icon-disabled-color | 禁用态图标颜色

## 代码演示

### 单个单选框

{{ base }}

### 左侧圆形单选框

{{ left-round }}

### 右侧圆形单选框

{{ right-round }}

### 左侧勾形单选框

{{ left-hook-shape }}

### 右侧勾形单选框

{{ right-hook-shape }}

### 禁用状态

{{ status }}

### 特殊类型

{{ special }}

### 不同尺寸

{{ size }}

### 组合单选框

<img src="https://tdesign.gtimg.com/miniprogram/readme/radio.png" width="375px" height="50%">
{{ group }}

### 受控用法

{{ controll }}

### 使用 options

{{ options }}

## API
### Radio Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 复选框和内容相对位置。可选项：left/right | N
allow-uncheck | Boolean | false | 【开发中】是否允许取消选中 | N
checked | Boolean | false | 是否选中 | N
default-checked | Boolean | undefined | 是否选中。非受控属性 | N
content | String / Slot | - | 单选内容 | N
content-disabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | undefined | 是否为禁用态 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名。`['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | String / Array | 'fill-circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标。TS 类型：`'fill-circle' \| 'stroke-line' \| Array<string>` | N
label | String / Slot | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：`RadioValue` `type RadioValue = string | number | boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 值变化时触发

### RadioGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 复选框和内容相对位置；仅在使用 options 时生效。可选项：left/right | N
borderless | Boolean | false | 是否开启无边框模式 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
icon | String / Array | 'fill-circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标；仅在使用 options 时生效。TS 类型：`'fill-circle' | 'stroke-line' | Array<string>` | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
value | String / Number / Boolean | false | 选中的值。TS 类型：`RadioValue` | N
default-value | String / Number / Boolean | undefined | 选中的值。非受控属性。TS 类型：`RadioValue` | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: RadioValue)` | 选中值发生变化时触发
