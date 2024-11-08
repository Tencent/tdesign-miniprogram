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

<a href="https://developers.weixin.qq.com/s/Am6VDimq73SP" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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

#### 不使用 Popup

{{ without-popup }}

## API

### DateTimePicker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | false | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | - | 确定按钮文字 | N
custom-locale | String | zh |  组件国际化语言，目前支持: 简体中文(zh)、(tc)、英文(en)、日语(ja)、韩语(ko)、俄语(ru)等六种语言 | N
end | String / Number | - | 选择器的最大可选时间，默认为当前时间+10年 | N
filter | Function | - | 列选项过滤函数，支持自定义列内容。(type 值可为: year, month, date, hour, minute, second)。TS 类型：`(type: TimeModeValues, columns: DateTimePickerColumn) => DateTimePickerColumn` `type DateTimePickerColumn = DateTimePickerColumnItem[]` `interface DateTimePickerColumnItem { label: string,value: string}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
footer | Slot | - | 底部内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
format | String | 'YYYY-MM-DD HH:mm:ss' | 用于格式化 pick、change、confirm 事件返回的值，[详细文档](https://day.js.org/docs/en/display/format) | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
mode | String / Array | 'date' | year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TS 类型：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
popup-props | Object | {} | 透传 `Popup` 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
show-week | Boolean | false | 【开发中】是否在日期旁边显示周几（如周一，周二，周日等） | N
start | String / Number | - | 选择器的最小可选时间，默认为当前时间-10年 | N
steps | Object | - | 时间间隔步数，示例：`{ minute: 5 }` | N
title | String | - | 标题 | N
use-popup | Boolean | true | 是否使用弹出层包裹 | N
value | String / Number | - | 选中值。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | String / Number | undefined | 选中值。非受控属性。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### DateTimePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 取消按钮点击时触发
change | `(value: DateValue)` | 确认按钮点击时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: DateValue)` | `1.0.1`。确认按钮点击时触发
pick | `(value: DateValue)` | 选中值发生变化时触发

### DateTimePicker External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-cancel | 取消样式类
t-class-confirm | 确认样式类
t-class-title | 标题样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-data-time-picker-year-width | 128rpx | -