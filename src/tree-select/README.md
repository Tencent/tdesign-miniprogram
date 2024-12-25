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

<a href="https://developers.weixin.qq.com/s/Bl64Ximr7LSl" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
height | String / Number | 336 | 高度，默认单位为 px | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
multiple | Boolean | false | 是否允许多选 | N
options | Array | [] | 选项。TS 类型：`Array<DataOption>` | N
value | String / Number / Array | - | 选中值。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N

### TreeSelect Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeLevel = 0 \| 1 \| 2`<br/>

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
名称 | 默认值 | 描述 
-- | -- | --
--td-tree-bg-color | @bg-color-container | - 
--td-tree-colum-width | 206rpx | - 
--td-tree-item-active-color | @brand-color | - 
--td-tree-item-font-size | 32rpx | - 
--td-tree-item-height | 112rpx | - 
--td-tree-root-bg-color | @bg-color-secondarycontainer | -