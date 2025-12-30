---
title: Progress 进度条
description: 用于展示任务当前的进度。
spline: message
isComponent: true
---



## 引入

### 引入组件

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TProgress from 'tdesign-uniapp/progress/progress.vue';
```

### 01 组件类型

{{ base }}

### 02 组件状态

线性进度条

{{ line }}

百分比内显进度条

{{ plump }}

环形进度条

{{ circle }}

## API

### Progress Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等。TS 类型：`string \| Array<string> \| Record<string, string>` | N
label | String / Boolean | true | 进度百分比，可自定义 | N
percentage | Number | 0 | 进度条百分比 | N
size | String / Number | 'default' | 进度条尺寸，仅对环形进度条有效。可选值：default/micro。default 值为 112； micro 值为 24 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：`ProgressStatus` `type ProgressStatus = 'success' \| 'error' \| 'warning' \| 'active'`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/progress/type.ts) | N
stroke-width | String / Number | - | 进度条线宽，默认单位 `px` | N
theme | String | line | 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：`ProgressTheme` `type ProgressTheme = 'line' \| 'plump' \| 'circle'`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/progress/type.ts) | N
track-color | String | '' | 进度条未完成部分颜色 | N

### Progress Slots

名称 | 描述
-- | --
label | 进度百分比

### Progress External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-bar | 进度文字样式类
t-class-label | 标签样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-progress-info-dark-color | @text-color-primary | - |
| --td-progress-info-light-color | @text-color-anti | - |
| --td-progress-inner-bg-color-active | @bg-color-container | - |
| --td-progress-inner-bg-color-error | @error-color | - |
| --td-progress-inner-bg-color-success | @success-color | - |
| --td-progress-inner-bg-color-warning | @warning-color | - |
| --td-progress-circle-inner-bg-color | @text-color-anti | - |
| --td-progress-circle-label-font-size | 40rpx | - |
| --td-progress-circle-label-font-weight | 700 | - |
| --td-progress-circle-label-line-height | 56rpx | - |
| --td-progress-circle-width | 224rpx | - |
| --td-progress-inner-bg-color | @brand-color | - |
| --td-progress-line-stroke-width | 12rpx | - |
| --td-progress-stroke-circle-width | 12rpx | - |
| --td-progress-stroke-plump-width | 40rpx | - |
| --td-progress-track-bg-color | @bg-color-component | - |