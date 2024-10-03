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

<a href="https://developers.weixin.qq.com/s/dCCmkymv7aTw" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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

### 不使用 Popup

{{ without-popup }}

## API

### Picker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String / Boolean / Object | true | 取消按钮文字。TS 类型：`boolean \| string \| ButtonProps` | N
confirm-btn | String / Boolean / Object | true | 确定按钮文字。TS 类型：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
footer | Slot | - | 底部内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
item-height | Number | 80 | PickerItem 的子项高度，单位 rpx | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | 透传 `Popup` 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
title | String | '' | 标题 | N
use-popup | Boolean | true | 是否使用弹出层包裹 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
format | Function | - | 格式化标签。TS 类型：`(option: PickerItemOption) => string` | N
options | Array | [] | 数据源。TS 类型：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker-item/type.ts) | N

### CSS Variables

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
--td-picker-item-font-size | @font-size-m | -
--td-picker-item-height | 80rpx | 已废弃，建议使用 `itemHeight` 属性设置子项高度。