---
title: Calendar 日历
description: 按照日历形式展示数据或日期的容器。
spline: form
isComponent: true
---
<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-calendar": "tdesign-miniprogram/calendar/calendar"
}
```

## 代码演示

### 单个选择日期

{{ base }}

### 多个选择日期

{{ multiple }}

### 区间选择日期

{{ range }}

### 自定义文案

{{ custom-text }}

### 自定义区间

{{ custom-range }}
## API
### Calendar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
confirm-btn | String / Object / Slot | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`(day: TDate) => TDate` `type TDateType = 'selected' | 'disabled' | 'start' | 'centre' | 'end' | ''; ` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number / Date | - | 最大可选的日期，不传则默认半年后。TS 类型：`number | Date` | N
min-date | Number / Date | - | 最小可选的日期，不传则默认今天。TS 类型：`number | Date` | N
title | String / Slot | - | 标题，不传默认为“请选择日期” | N
type | String | 'single' | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
value | Number / Array / Date | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。TS 类型：`number | Date | TCalendarValue[] ` `type TCalendarValue = number | Date`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
visible | Boolean | false | 是否显示日历 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
confirm | `(value: Date)` | 点击确认按钮时触发
select | `(value: Date)` | 选择日期时触发
