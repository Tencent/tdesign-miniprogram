---
title: TabBar 标签栏
description: 用于在不同功能模块之间进行快速切换，位于页面底部。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TTabBar from '@tdesign/uniapp/tab-bar/tab-bar.vue';
import TTabBarItem from '@tdesign/uniapp/tab-bar-item/tab-bar-item.vue';
```

### 组件类型
#### 纯文本标签栏

{{ text-only }}

#### 图标加文字标签栏

{{ base }}

#### 纯图标标签栏

{{ icon-only }}

#### 双层级纯文本标签栏

{{ sub }}

### 组件样式

#### 弱选中标签栏

{{ badge }}

#### 悬浮胶囊标签栏

{{ round }}

#### 自定义主题

{{ custom }}

## API

### TabBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
bordered | Boolean | true | 是否显示外边框 | N
fixed | Boolean | true | 是否固定在底部 | N
placeholder | Boolean | false | 固定在底部时是否开启占位 | N
safe-area-inset-bottom | Boolean | true | 是否开启底部安全区适配 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | - | 当前选中标签的索引。支持语法糖 `v-model:value`。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | - | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N
z-index | Number | 1 | 标签栏层级 | N

### TabBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### TabBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
badge-props | Object | {} | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
icon | String / Object | - | 图标名称。传入对象时透传至 Icon 组件 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
value | String / Number | - | 标识符 | N

### TabBarItem Slots

名称 | 描述
-- | --
icon | 图标插槽，用于自定义图标区域内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-tab-bar-bg-color | @bg-color-container | -
--td-tab-bar-border-color | @border-level-1-color | -
--td-tab-bar-round-shadow | @shadow-3 | -
--td-tab-bar-active-bg | @brand-color-light | -
--td-tab-bar-active-color | @brand-color | -
--td-tab-bar-color | @text-color-primary | -
--td-tab-bar-height | 80rpx | -
--td-tab-bar-hover-bg-color | rgba(0, 0, 0, 0.05) | -
--td-tab-bar-spread-border-color | @border-color | -
--td-tab-bar-spread-shadow | @shadow-3 | -
