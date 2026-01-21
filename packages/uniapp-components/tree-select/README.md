---
title: TreeSelect 树形选择
description: 适用于选择树形的数据结构。
spline: form
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TTreeSelect from 'tdesign-uniapp/tree-select/tree-select.vue';
```

### 组件类型

#### 基础树形选择

{{ base }}

#### 多选树形选择

{{ multiple }}

### 组件状态

#### 三级树形选择

{{ normal }}

## API

### TreeSelect Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
custom-value | String / Number / Array | - | 自定义选中值，优先级高于 `value`。TS 类型：`TreeSelectValue` | N
height | String / Number | 336 | 高度，默认单位为 px | N
keys | Object | - | 用来定义 `value / label / disabled / children` 在 `options` 数据中对应的字段别名，示例：`{ value: 'key', label: 'name', children: 'list' }`。TS 类型：`TreeKeysType`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
multiple | Boolean | false | 是否允许多选 | N
options | Array | [] | 选项。TS 类型：`Array<DataOption>` | N
value | String / Number / Array | - | 选中值。支持语法糖 `v-model:value`。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tree-select/type.ts) | N
default-value | String / Number / Array | - | 选中值。非受控属性。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tree-select/type.ts) | N

### TreeSelect Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: TreeSelectValue, level: TreeLevel })` | 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tree-select/type.ts)。<br/>`type TreeLevel = 0 \| 1 \| 2`<br/>

### TreeSelect External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-left-column | 左侧第一列样式类
t-class-left-item | 左侧第一列子项样式类
t-class-middle-item | 中间列子项样式类
t-class-right-column | 右侧第一列样式类
t-class-right-item | 右侧第一列子项样式类
t-class-right-item-label | 右侧第一列子项标签样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-tree-bg-color | @bg-color-container | - |
| --td-tree-colum-text-color | @text-color-primary | - |
| --td-tree-colum-width | 206rpx | - |
| --td-tree-item-active-color | @brand-color | - |
| --td-tree-item-disabled-color | @text-color-disabled | - |
| --td-tree-item-font-size | 32rpx | - |
| --td-tree-item-height | 112rpx | - |
| --td-tree-root-bg-color | @bg-color-secondarycontainer | - |