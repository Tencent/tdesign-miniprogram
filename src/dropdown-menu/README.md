---
title: DropdownMenu 下拉菜单
description: 菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.8.0 版本上线，请留意版本。
</div>

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-dropdown-menu": "tdesign-miniprogram/dropdown-menu/dropdown-menu",
  "t-dropdown-item": "tdesign-miniprogram/dropdown-item/dropdown-item"
}
```

## 用法

### 单选下拉菜单

{{ single }}

### 多列下拉菜单

{{ multi }}

### 树形下拉菜单

{{ tree }}

## API
### DropdownMenu Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-on-click-overlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
duration | String / Number | 200 | 动画时长 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、菜单标签、菜单图标类名 等。`['t-class', 't-class-item', 't-class-label', 't-class-icon']` | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
z-index | Number | 11600 | 菜单栏 z-index 层级 | N

### DropdownItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、菜单列、菜单列选项、菜单列选项标签、树形菜单、树形菜单列等类名。`['t-class','t-class-content', 't-class-column', 't-class-column-item', 't-class-column-item-label',  't-class-footer']` | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | 选项分栏（1-3） | N
options-layout | String | columns | 已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用 | N
value | String / Number / Array | undefined | 选中值。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: DropdownValue)` | 值改变时触发
confirm | `(value: DropdownValue)` | 点击确认时触发
reset | - | 点击重置时触发