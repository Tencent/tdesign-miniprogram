---
title: DateTimePicker 时间选择器
description: 用于选择一个时间点或者一个时间段。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-98%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-86%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-date-time-picker": "tdesign-miniprogram/date-time-picker/date-time-picker"
}
```

## 代码演示

### 组件类型

#### 年月日选择器

{{ year-month-date }}

#### 年月选择器

{{ year-month }}

### 时间选择器器

包括：`时分秒`、`时分`两个示例

{{ time }}

#### 年月日时分秒选择器

{{ date-all }}

### 组件用法

#### 调整步数

{{ steps }}

## API
### DateTimePicker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | - | 确定按钮文字 | N
end | String / Number | - | 选择器的最大可选时间，默认为当前时间+10年 | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名。`['t-class', 't-class-confirm', 't-class-cancel', 't-class-title']` | N
format | String | 'YYYY-MM-DD HH:mm:ss' | 用于格式化 pick、change、confirm 事件返回的值，[详细文档](https://day.js.org/docs/en/display/format) | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
mode | String / Array | 'date' | year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TS 类型：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
show-week | Boolean | false | 【开发中】是否在日期旁边显示周几（如周一，周二，周日等） | N
start | String / Number | - | 选择器的最小可选时间，默认为当前时间-10年 | N
steps | Object | - | 时间间隔步数，示例：`{ minute: 5 }` | N
title | String | - | 标题 | N
value | String / Number | - | 选中值。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | String / Number | undefined | 选中值。非受控属性。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### DateTimePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 取消按钮点击时触发
change | `(value: DateValue)` | 确认按钮点击时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confrim-btn'`<br/>
confirm | `(value: DateValue)` | `1.0.1`。确认按钮点击时触发
pick | `(value: DateValue)` | 选中值发生变化时触发
