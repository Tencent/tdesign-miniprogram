---
title: Calendar 日历
description: 按照日历形式展示数据或日期的容器。
spline: form
isComponent: true
---
<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.22.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-calendar": "tdesign-miniprogram/calendar/calendar"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/jb5E2imk7QSV" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型
#### 单个选择日期

{{ base }}

#### 多个选择日期

{{ multiple }}

#### 区间选择日期

{{ range }}

### 组件样式

#### 自定义文案

{{ custom-text }}

#### 自定义区间

{{ custom-range }}

#### 不使用 Popup

{{ without-popup }}

## API

### Calendar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | true | `0.34.0`。自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible | N
confirm-btn | String / Object / Slot | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
locale-text | Object | - | 国际化文案。TS 类型：`CalendarLocaleText` `interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number | - | 最大可选的日期，不传则默认半年后 | N
min-date | Number | - | 最小可选的日期，不传则默认今天 | N
title | String / Slot | - | 标题，不传默认为“请选择日期”。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
type | String | 'single' | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
use-popup | Boolean | true | `0.32.0`。是否使用弹出层包裹日历 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Number / Array | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。TS 类型：`number \| number[]` | N
default-value | Number / Array | undefined | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：`number \| number[]` | N
visible | Boolean | false | 是否显示日历；`usePopup` 为 true 时有效 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: timestamp)` | `0.28.0`。不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
close | `(trigger: CalendarTrigger)` | `0.34.0`。关闭按钮时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay'`<br/>
confirm | `(value: timestamp)` | 点击确认按钮时触发
scroll | `({scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})` | `1.4.6`。滚动时触发
select | `(value: timestamp)` | `0.28.0`。点击日期时触发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-calendar-active-color | @brand-color | - 
--td-calendar-bg-color | @bg-color-container | - 
--td-calendar-days-color | @font-gray-2 | - 
--td-calendar-item-centre-color | @brand-color-light | - 
--td-calendar-item-disabled-color | @font-gray-4 | - 
--td-calendar-item-suffix-color | @font-gray-3 | - 
--td-calendar-radius | 24rpx | - 
--td-calendar-selected-color | @font-white-1 | - 
--td-calendar-title-color | @font-gray-1 | - 
--td-calendar-title-font-size | 18px | -