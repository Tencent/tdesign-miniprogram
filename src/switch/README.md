---
title: Switch 开关
description: 用于控制某个功能的开启和关闭。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-82%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-switch": "tdesign-miniprogram/switch/switch"
}
```

## 代码演示

### 基础开关

{{ base }}

### 带描述开关

{{ label }}

### 自定义颜色

{{ color }}

### 开关状态

{{ status }}

### 尺寸

{{ size }}

## API
### Switch Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-value | Array | [true, false] | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：`Array<SwitchValue>` | N
disabled | Boolean | false | 是否禁用组件 | N
icon `v0.27.0` | Array | [] | 开关的图标；[打开时的图标，关闭时的图标]。TS 类型：`string[]` | N
label `v0.27.0` | Array | [] | 开关的标签；[打开时的标签，关闭时的标签]。TS 类型：`string[]` | N
loading `v0.27.0` | Boolean | false | 是否处于加载中状态 | N
size `v0.27.0` | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | null | 开关值。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N

### Switch Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SwitchValue)` | 数据发生变化时触发


### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-switch-checked-color | @brand-color | - 
--td-switch-checked-disabled-color | @brand-color-disabled | - 
--td-switch-dot-border-color | @bg-color-secondarycontainer | - 
--td-switch-dot-horizontal-margin | 6rpx | - 
--td-switch-dot-large-size | 52rpx | - 
--td-switch-dot-plain-horizontal-margin | 10rpx | - 
--td-switch-dot-plain-large-size | 44rpx | - 
--td-switch-dot-plain-size | 36rpx | - 
--td-switch-dot-plain-small-size | 28rpx | - 
--td-switch-dot-shadow | @shadow-1 | - 
--td-switch-dot-size | 44rpx | - 
--td-switch-dot-small-size | 36rpx | - 
--td-switch-height | 56rpx | - 
--td-switch-icon-large-size | 48rpx | - 
--td-switch-icon-size | 40rpx | - 
--td-switch-icon-small-size | 32rpx | - 
--td-switch-label-checked-color | @switch-checked-color | - 
--td-switch-label-color | @font-gray-4 | - 
--td-switch-label-font-size | 28rpx | - 
--td-switch-label-large-font-size | 32rpx | - 
--td-switch-label-small-font-size | 24rpx | - 
--td-switch-large-height | 64rpx | - 
--td-switch-large-radius | calc(@switch-large-height / 2) | - 
--td-switch-large-width | 104rpx | - 
--td-switch-radius | calc(@switch-height / 2) | - 
--td-switch-small-height | 48rpx | - 
--td-switch-small-radius | calc(@switch-small-height / 2) | - 
--td-switch-small-width | 78rpx | - 
--td-switch-unchecked-color | @font-gray-4 | - 
--td-switch-unchecked-disabled-color | @bg-color-component-disabled | - 
--td-switch-width | 90rpx | - 
