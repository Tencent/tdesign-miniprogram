---
title: Picker 选择器
description: 用于一组预设数据中的选择。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-91%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-92%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-89%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-picker": "tdesign-miniprogram/picker/picker",
  "t-picker-item": "tdesign-miniprogram/picker-item/picker-item",
}
```

## 代码演示

### 组件类型

#### 基础选择器

单项和多选选择

{{ base }}

#### 地区选择器

支持省市区切换，支持数据联动

{{ area }}

### 组件状态

是否带标题

{{ with-title }}

## API
### Picker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-close | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String / Boolean / Object | true | 取消按钮文字。TS 类型：`boolean \| string \| ButtonProps` | N
confirm-btn | String / Boolean / Object | true | 确定按钮文字。TS 类型：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
footer | Slot | - | 已废弃。底部内容 | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
title | String | '' | 标题 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 点击取消按钮时触发
change | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | 选中变化时候触发，即确认变化时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | 点击确认按钮时触发
pick | `(value: Array<PickerValue>, label: string, column: number, index: number)` | 任何一列选中都会触发，不同的列参数不同。`column` 表示第几列变化，`index` 表示变化那一列的选中项下标

### PickerItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
format | Function | - | 格式化标签。TS 类型：`(option: PickerItemOption) => string` | N
options | Array | [] | 数据源。TS 类型：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker-item/type.ts) | N


### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-picker-group-height | 400rpx | - 
--td-picker-bg-color | @bg-color-container | - 
--td-picker-border-radius | 24rpx | - 
--td-picker-button-font-size | 32rpx | - 
--td-picker-cancel-color | @font-gray-2 | - 
--td-picker-confirm-color | @brand-color | - 
--td-picker-indicator-bg-color | @bg-color-secondarycontainer | - 
--td-picker-indicator-border-radius | 12rpx | - 
--td-picker-mask-color-bottom | hsla(0, 0%, 100%, 0.4) | - 
--td-picker-mask-color-top | hsla(0, 0%, 100%, 0.92) | - 
--td-picker-title-color | @font-gray-1 | - 
--td-picker-title-font-size | 36rpx | - 
--td-picker-title-font-weight | 600 | - 
--td-picker-title-line-height | 52rpx | - 
--td-picker-toolbar-height | 116rpx | - 
--td-picker-item-active-color | @font-gray-1 | - 
--td-picker-item-color | @font-gray-2 | - 
--td-picker-item-height | 80rpx | - 
