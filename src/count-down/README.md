---
title: CountDown 倒计时
description: 用于实时展示倒计时数值。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-99%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-99%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-85%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-count-down": "tdesign-miniprogram/count-down/count-down"
}
```

## 代码演示

### 基础倒计时

{{ base }}

### 调整尺寸

{{ size }}

## API
### CountDown Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-start | Boolean | true | 是否自动开始倒计时 | N
content | String / Slot | 'default' | 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽 | N
format | String | HH:mm:ss | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N
millisecond | Boolean | false | 是否开启毫秒级渲染 | N
size | String `v0.5.1` | 'medium' | 倒计时尺寸。可选项：small/medium/large | N
split-with-unit `v0.5.1` | Boolean | false | 使用时间单位分割 | N
theme | String `v0.5.1` | 'default' | 倒计时风格。可选项：default/round/square | N
time | Number | - | 必需。倒计时时长，单位毫秒 | Y
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、计时器类型、分隔线类名 等。`['t-class', 't-class-count', 't-class-split']` | N

### CountDown Events

名称 | 参数 | 描述
-- | -- | --
change | `(time: TimeData)` | 时间变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | 倒计时结束时触发
