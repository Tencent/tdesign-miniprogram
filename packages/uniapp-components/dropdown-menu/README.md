---
title: DropdownMenu 下拉菜单
description: 菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。
spline: message
isComponent: true
---



## 引入

### 引入组件

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import DropdownMenu from 'tdesign-uniapp/dropdown-menu/dropdown-menu.vue';
import DropdownItem from 'tdesign-uniapp/dropdown-item/dropdown-item.vue';
```

### 单选下拉菜单

{{ single }}

### 多列下拉菜单

{{ multi }}

### 树形下拉菜单

{{ tree }}

## API

### DropdownMenu Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
arrow-icon | String / Object | 'caret-down-small' | 自定义箭头图标 | N
close-on-click-overlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
duration | String / Number | 200 | 动画时长 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
z-index | Number | 11600 | 菜单栏 z-index 层级 | N

### DropdownMenu Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 菜单关闭时触发
open | \- | 菜单展开时触发

### DropdownMenu Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### DropdownMenu External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-item | 选项样式类
t-class-label | 标签样式类


### DropdownItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
disabled | Boolean | false | 是否禁用操作项 | N
keys | Object | - | 用来定义 value / label / disabled 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | 选项分栏（1-3） | N
options-layout | String | columns | 已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用 | N
placement | String | left | 复选框和内容相对位置，仅单选菜单栏有效。可选项：left/right | N
value | String / Number / Array | undefined | 选中值。支持语法糖 `v-model:value`。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: DropdownValue })` | 值改变时触发
close | \- | 关闭时触发
confirm | `(context: { value: DropdownValue })` | 点击确认时触发
reset | \- | 点击重置时触发

### DropdownItem Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
footer | 底部

### DropdownItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-column | 菜单列样式类
t-class-column-item | 菜单列选项样式类
t-class-column-item-label | 菜单列选项标签样式类
t-class-content | 内容样式类
t-class-footer | 底部样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-dropdown-menu-active-color | @brand-color | - |
| --td-dropdown-menu-bg-color | @bg-color-container | - |
| --td-dropdown-menu-border-width | 1px | - |
| --td-dropdown-menu-color | @text-color-primary | - |
| --td-dropdown-menu-disabled-color | @text-color-disabled | - |
| --td-dropdown-menu-font-size | 28rpx | - |
| --td-dropdown-menu-height | 96rpx | - |
| --td-dropdown-menu-icon-size | 40rpx | - |
| --td-dropdown-body-max-height | 560rpx | - |
| --td-dropdown-menu-bg-color | @bg-color-container | - |
| --td-tree-bg-color | @bg-color-container | - |
| --td-tree-item-active-color | @brand-color | - |
| --td-tree-item-font-size | 32rpx | - |
| --td-tree-item-height | 96rpx | - |
| --td-tree-root-bg-color | @bg-color-secondarycontainer | - |