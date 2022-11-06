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
  "t-picker-item": "tdesign-miniprogram/picker/picker-item",
}
```

## 代码演示

### 基础选择器

{{ base }}

## API
### Picker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-close | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String / Boolean / Object | true | 取消按钮文字。TS 类型：`boolean \| string \| ButtonProps` | N
columns | Array / Function | [] | 必需。配置每一列的选项。TS 类型：`Array<PickerColumn> \| ((item: Array<PickerValue>)  => Array<PickerColumn>)` `type PickerColumn = PickerColumnItem[]` `interface PickerColumnItem { label: string,value: string}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | Y
confirm-btn | String / Boolean / Object | true | 确定按钮文字。TS 类型：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
footer | Slot | - | 底部内容 | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 | N
render-label | String / Function | - | 自定义label。TS 类型：`(item: PickerColumnItem) => string` | N
title | String | '' | 标题 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 点击取消按钮时触发
change | `(detail: { value: Array<PickerValue>; columns: Array<{ column: number; label: string; index: number }> })` | 选中变化时候触发
confirm | `(detail: { value: Array<PickerValue>; columns: Array<{ column: number; label: string; index: number }> })` | 选中变化时候触发
pick | `(detail: { value: Array<PickerValue>;  label: string; index: number; column: number;})` | 任何一列选中都会触发，不同的列参数不同。`context.column` 表示第几列变化，`context.index` 表示变化那一列的选中项下标

### PickerItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
format | Function | - | 格式化标签。TS 类型：`(option: PickerItemOption) => string` | N
options | Array | [] | 数据源。TS 类型：`Array<PickerItemOption>` `interface PickerItemOption { label: string; value: string | number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
