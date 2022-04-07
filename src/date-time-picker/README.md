---
title: DateTimePicker 时间选择器
description: 用于选择一个时间点或者一个时间段。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-date-time-picker": "tdesign-miniprogram/date-time-picker/date-time-picker"
}
```

## 代码演示

### 基础时间选择器

<img src="https://tdesign.gtimg.com/miniprogram/readme/datetimepicker.png" width="375px" height="50%">

```html
<t-date-time-picker
  title="选择日期和时间"
  visible="{{datetimeVisible}}"
  mode="{{['minute']}}"
  value="{{datetime}}"
  format="YYYY-MM-DD HH:mm"
  bindconfirm="onConfirm"
  disableDate="{{disableDate}}"
></t-date-time-picker>
```

```js
Page({
  data: {
    datetimeVisible: true,
    datetime: '2020-08-10 12:50:00',
    datetimeText: '',

    // 指定选择区间起始值
    disableDate: {
      before: '2000-01-01 00:00:00',
      after: '2022-09-09 12:12:12',
    },
  },
  onConfirm(e) {
    const { value, formatValue } = e?.detail;

    this.setData({
      datetime: value.valueOf(),
      datetimeText: formatValue,
    });
  },
});
```

## API
### DateTimePicker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | - | 确定按钮文字 | N
disable-date | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：`DisableDate` `type DisableDate = DateValue | DisableDateObj | ((date: DateValue) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名。`['t-class', 't-class-confirm', 't-class-cancel', 't-class-title']` | N
footer | Slot | true | 底部内容 | N
format | String | 'YYYY-MM-DD' | 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 | N
mode | String / Array | ['year', 'month', 'date'] | 选择器模式，用于表示可以选择到哪一个层级。【示例一】year 或者 ['year'] 表示纯日期选择器，只能选择到年份，只显示年份。【示例二】'hour' 或 ['hour'] 表示纯时间选择器，只能选择到小时维度。【示例三】['year', 'month', 'date', 'hour', 'minute'] 表示，日期和时间 混合选择器，可以选择到具体哪一分钟，显示全部时间：年/月/日/时/分。TS 类型：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues | Array<TimeModeValues> ` `type TimeModeValues = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
show-week | Boolean | false | 是否在日期旁边显示周几（如周一，周二，周日等） | N
title | String | - | 标题 | N
value | String / Number | - | 选中值。TS 类型：`DateValue` `type DateValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | String / Number | undefined | 选中值。非受控属性。TS 类型：`DateValue` `type DateValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### DateTimePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 取消按钮点击时触发
change | `(value: DateValue, formatValue: string)` | 选中值发生变化时触发
column-change | `(value: DateValue, index: number)` | 每一列选中数据变化时触发
confirm | `(value: DateValue, formatValue: string)` | 确认按钮点击时触发

### DateTimeRangePicker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | - | 确定按钮文字 | N
disable-date | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> | DisableDateObj | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' | 'end'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名。`['t-class', 't-class-confirm', 't-class-cancel', 't-class-title']` | N
format | String | 'YYYY-MM-DD' | 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) | N
mode | String | date | 选择器模式，用于表示可以选择到哪一个层级。可选项：year/month/date/hour/minutes/second | N
show-week | Boolean | false | 是否在日期旁边显示周几（如周一，周二，周日等） | N
title | String | - | 标题 | N
value | Array | - | 选中值。TS 类型：`DateRangeValue` `type DateRangeValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`DateRangeValue` `type DateRangeValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### DateTimeRangePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 取消按钮点击时触发
change | `(value: DateRangeValue)` | 选中值发生变化时触发
column-change | `(context: DateRangePickerColumnChangeContext)` | 每一列选中数据变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts)。<br/>`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }`<br/>
confirm | `(detail: { value: DateValue;})` | 确认按钮点击时触发
