---
title: TabBar 标签栏
description: 用于在不同功能模块之间进行快速切换，位于页面底部。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-93%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tab-bar": "tdesign-miniprogram/tab-bar/tab-bar",
  "t-tab-bar-item": "tdesign-miniprogram/tab-bar/tab-bar-item"
}
```

### 主题定制

CSS 变量名|说明
--|--
--td-tab-bar-border-color|顶部边框颜色
--td-tab-bar-bg-color|背景色
--td-tab-bar-hover-color|hover 时背景色
--td-tab-bar-item-color | 字体颜色
--td-tab-bar-item-active-color | 激活时字体颜色
## 代码演示



### 基础标签栏

文本标签栏，分为单层双层，可以自定义标签栏内容

{{ base }}

### 带徽章标签栏

{{ badge }}

### 纯文本标签栏

{{ text-only }}

### 纯图标标签栏

{{ icon-only }}

### 双层级纯文本标签栏

{{ sub }}

### 自定义主题

{{ custom }}

## API
### TabBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | true | 是否显示外边框 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置外层元素类名。`['t-class']` | N
fixed | Boolean | true | 是否固定在底部 | N
safe-area-inset-bottom | Boolean | true | 是否为 iPhoneX 留出底部安全距离 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | null | 当前选中标签的索引。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string | number)` | 选中标签切换时触发

### TabBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
custom-style | String | - | 自定义组件样式 | N
icon | String / Slot | - | 图标名称 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
value | String / Number | - | 标识符 | N
