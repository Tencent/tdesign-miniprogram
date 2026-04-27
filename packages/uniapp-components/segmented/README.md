---
title: Segmented 分段控制器
description: 用于展示多个选项并允许用户选择其中单个选项。
spline: data
isComponent: true
---


## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-segmented />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TSegmented from '@tdesign/uniapp/segmented/segmented.vue';
```

### 组件类型

基础

{{ base }}

自适应宽度

{{ block }}

### 组件状态

控制器禁用态

{{ disabled }}


## API

### Segmented Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
block | Boolean | false | 是否撑满父元素宽度 | N
disabled | Boolean | - | 是否禁用 | N
options | Object | [] | 数据化配置选项内容。TS 类型：`string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string; icon?: string \| object; disabled?: boolean }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/segmented/type.ts) | N
value | String / Number | - | 当前选中的值。支持语法糖 `v-model:value` | N
default-value | String / Number | - | 当前选中的值。非受控属性 | N

### Segmented Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: string \| number, selectedOption: SegmentedItem })` | 选项值发生变化时触发

### Segmented External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-item | 列表子项样式类
t-class-thumb | 动画背景样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-segmented-bg-color | @bg-color-component-disabled | -
--td-segmented-item-active-bg | @bg-color-container | -
--td-segmented-item-active-color | @brand-color | -
--td-segmented-item-color | @text-color-primary | -
--td-segmented-item-disabled-color | @text-color-disabled | -
--td-segmented-item-label-font | @font-body-medium | -
--td-segmented-transition | all @anim-duration-base @anim-time-fn-easing | -
