---
title: Progress
description: 进度条。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>
## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-progress": "tdesign-miniprogram/progress/progress"
}
```

## 代码演示

### 基础进度条

{{ base }}

### 进度条状态

{{ status }}


### 过度样式

{{ transition }}

### 自定义颜色/圆角

{{ custom }}

### 带数值/无数值进度条

{{ size }}

## API
### Progress Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等。TS 类型：`string \| Array<string> \| Record<string, string>` | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层、进度文字等元素类名。。`['t-class', 't-class-bar', 't-class-label']` | N
label | String / Boolean / Slot | true | 进度百分比，可自定义 | N
percentage | Number | 0 | 进度条百分比 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：`StatusEnum` `type StatusEnum = 'success' \| 'error' \| 'warning' \| 'active'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
stroke-width | String / Number | - | 进度条线宽。宽度数值不能超过 size 的一半，否则不能输出环形进度 | N
theme | String | line | 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：`ThemeEnum` `type ThemeEnum = 'line' \| 'plump' \| 'circle'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
track-color | String | '' | 进度条未完成部分颜色 | N
