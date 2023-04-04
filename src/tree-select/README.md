---
title: TreeSelect 树形选择
description: 适用于选择树形的数据结构。
spline: form
isComponent: true
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.32.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tree-select": "tdesign-miniprogram/tree-select/tree-select"
}
```

## 代码演示

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

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
height | String / Number | 336 | 高度，默认单位为 px | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项。TS 类型：`Array<DataOption>` | N
value | String / Number / Array | - | 选中值。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N

### TreeSelect Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeLevel: 0 \| 1 \| 2`<br/>
