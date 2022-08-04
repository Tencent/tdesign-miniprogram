---
title: DropdownMenu 下拉菜单
description: 菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。
spline: message
isComponent: true
---

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-dropdown-menu": "tdesign-miniprogram/dropdown-menu/dropdown-menu",
  "t-dropdown-item": "tdesign-miniprogram/dropdown-menu/dropdown-item"
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
active-color | String | - | 【讨论中】菜单标题和选项的选中态颜色 | N
close-on-click-overlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
duration | String / Number | 200 | 动画时长 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
z-index | Number | 11600 | 菜单栏 z-index 层级 | N

### DropdownMenu Function

方法名 | 说明 | 参数 | 返回值
--|--|--|--
toggle | 切换下拉菜单的展示状态，传入索引值则切换对应菜单，不传值则关闭当前菜单 | index?: number | `void`

> 通过 `this.selectComponent` 获取组件示例，调用即可
### DropdownItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用 | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：`Array<TdDropdownItemOption>` `interface TdDropdownItemOption { label: string;disabled: boolean;value: TdDropdownItemOptionValueType; [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
options-columns | String / Number | 1 | 选项分栏（1-3） | N
options-layout | String | columns | 选项排列。可选项：columns/tree | N
value | String / Number / Array | undefined | 选中值。TS 类型：`TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string | number;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string | number;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>)` | 值改变时触发
confirm | `(value: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>)` | 点击确认时触发