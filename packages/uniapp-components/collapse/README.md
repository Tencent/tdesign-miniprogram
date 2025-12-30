---
title: Collapse 折叠面板
description: 用于对复杂区域进行分组和隐藏 常用于订单信息展示等
spline: data
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TCollapse from 'tdesign-uniapp/collapse/collapse.vue';
import TCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel.vue';
```

### 类型

基础折叠面板

{{ base }}


带操作说明

{{ action }}

手风琴模式

{{ accordion }}

### 样式

卡片折叠面板

{{ theme }}

## API

### Collapse Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
default-expand-all | Boolean | false | 默认是否展开全部 | N
disabled | Boolean | - | 是否禁用面板展开/收起操作 | N
expand-icon | Boolean | true | 展开图标 | N
expand-mutex | Boolean | false | 每个面板互斥展开，每次只展开一个面板 | N
theme | String | default | 折叠面板风格。可选项：default/card | N
value | Array | - | 展开的面板集合。支持语法糖 `v-model:value`。TS 类型：`CollapseValue` `type CollapseValue = Array<string \| number>`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N
default-value | Array | - | 展开的面板集合。非受控属性。TS 类型：`CollapseValue` `type CollapseValue = Array<string \| number>`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N

### Collapse Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: CollapseValue, context: { e: MouseEvent }})` | 切换面板时触发，返回变化的值

### Collapse Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容


### CollapsePanel Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 折叠面板内容 | N
disabled | Boolean | undefined | 禁止当前面板展开，优先级大于 Collapse 的同名属性 | N
expand-icon | Boolean | undefined | 当前折叠面板展开图标，优先级大于 Collapse 的同名属性 | N
header | String | - | 面板头内容 | N
header-left-icon | String | - | 面板头左侧图标 | N
header-right-content | String | - | 面板头的右侧区域，一般用于呈现面板操作 | N
placement | String | bottom | 选项卡内容的位置。可选项：bottom/top | N
value | String / Number | - | 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 | N

### CollapsePanel Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义 `content` 显示内容
expand-icon | 自定义 `expand-icon` 显示内容
header | 自定义 `header` 显示内容
header-left-icon | 自定义 `header-left-icon` 显示内容
header-right-content | 自定义 `header-right-content` 显示内容

### CollapsePanel External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-header | 头部样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-collapse-border-color | @border-level-1-color | - |
| --td-collapse-content-font-size | @font-size-base | - |
| --td-collapse-content-line-height | 1.5 | - |
| --td-collapse-content-padding | 32rpx | - |
| --td-collapse-content-text-color | @text-color-primary | - |
| --td-collapse-extra-font-size | @font-size-m | - |
| --td-collapse-header-height | auto | - |
| --td-collapse-header-text-color | @text-color-primary | - |
| --td-collapse-header-text-disabled-color | @text-color-disabled | - |
| --td-collapse-horizontal-padding | 32rpx | - |
| --td-collapse-icon-color | @font-gray-3 | - |
| --td-collapse-panel-bg-color | @bg-color-container | - |
| --td-collapse-title-font-size | @font-size-m | - |