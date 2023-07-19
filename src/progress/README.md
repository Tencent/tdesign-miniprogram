---
title: Progress 进度条
description: 用于展示任务当前的进度。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.7.3 版本上线，请留意版本。
</div>

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-progress": "tdesign-miniprogram/progress/progress"
}
```

## 代码演示

### 01 组件类型

基础进度条

{{ base }}

过渡样式

{{ transition }}

自定义颜色/圆角

{{ custom }}

### 02 组件状态

线性进度条

{{ line }}

百分比内显进度条

{{ plump }}

环形进度条

{{ circle }}

## API
### Progress Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等。TS 类型：`string \| Array<string> \| Record<string, string>` | N
label | String / Boolean / Slot | true | 进度百分比，可自定义 | N
percentage | Number | 0 | 进度条百分比 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：`StatusEnum` `type StatusEnum = 'success' \| 'error' \| 'warning' \| 'active'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
stroke-width | String / Number | - | 进度条线宽，默认单位 `px`。| N
theme | String | line | 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：`ThemeEnum` `type ThemeEnum = 'line' \| 'plump' \| 'circle'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
track-color | String | '' | 进度条未完成部分颜色 | N

### Progress 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-bar | 进度文字样式类
t-class-label | 标签样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-progress-circle-inner-bg-color | @font-white-1 | - 
--td-progress-inner-bg-color | @brand-color | - 
--td-progress-track-bg-color | @bg-color-component | - 
