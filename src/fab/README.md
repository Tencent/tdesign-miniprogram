---
title: Fab
description: 当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。


```json
"usingComponents": {
  "t-fab": "tdesign-miniprogram/fab/fab"
}
```

## 代码演示

### 基础使用

{{ base }}

### 进阶使用

{{ advance }}

## API
### Fab Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
button-props | Object | - | 透传至 Button 组件 | N
custom-style `v0.25.0` | String | right: 16px; bottom: 32px; | 自定义组件样式 | N
icon | String | - | 图标 | N
style | String | right: 16px; bottom: 32px; | 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `customStyle`） | N
text | String | - | 文本内容 | N

### Fab Events

名称 | 参数 | 描述
-- | -- | --
click | `({e: Event})` | 悬浮按钮点击事件
