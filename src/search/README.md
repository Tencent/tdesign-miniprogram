---
title: Search 搜索框
description: 用于用户输入搜索信息，并进行页面内容搜索。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-86%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-search": "tdesign-miniprogram/search/search"
}
```

### 主题定制
CSS 变量名|说明
--|--
--td-search-icon-color | 图标颜色
--td-search-label-color | 左侧文本颜色
--td-search-action-color | 右侧操作按钮颜色
--td-search-text-color | 输入框文本颜色
--td-search-placeholder-color | 输入框placeholder占位符颜色
--td-search-bg-color | 输入框背景颜色
--td-search-border-color | 输入框边框颜色
--td-search-focus-border-color | 聚焦时输入框边框颜色

## 代码演示

### 基础搜索框

<img src="https://tdesign.gtimg.com/miniprogram/readme/search.png" width="375px" height="50%">

{{ base }}


### 状态

{{ status }}

## API
### Search Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
action | String / Slot | '' | 自定义右侧操作按钮文字 | N
center | Boolean | false | 是否居中 | N
disabled | Boolean | false | 是否禁用 | N
external-classes | Array | - | 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型。`['t-class', 't-class-input', 't-class-input-container', 't-class-action','t-class-left','t-class-right']` | N
focus | Boolean | false | 是否聚焦 | N
label | String | '' | 左侧文本 | N
left-icon | String / Slot | 'search' | 左侧图标 | N
placeholder | String | '' | 占位符 | N
right-icon | String / Slot | 'close' | 右侧图标 | N
shape | String | 'square' | 搜索框形状。可选项：square/round | N
value | String | '' | 值 | N

### Search Events

名称 | 参数 | 描述
-- | -- | --
action-click | `({})` | 点击右侧操作按钮文字时触发
blur | `({ value: string })` | 失去焦点时触发
change | `({ value: string })` | 值发生变化时触发
clear | `({ value: string })` | 点击清除时触发
focus | `({ value: string })` | 聚焦时触发
submit | `({ value: string })` | 提交时触发
