---
title: Calendar 日历
description: 按照日历形式展示数据或日期的容器。
spline: form
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TCalendar from 'tdesign-uniapp/calendar/calendar.vue';
```

### 组件类型

#### 单个选择日历

{{ base }}

#### 多个选择日历

{{ multiple }}

#### 带单行/双行描述的日历

{{ custom-text }}

#### 带翻页功能的日历

{{ switch-mode }}

#### 可选择区间日期的日历

{{ range }}

### 组件样式

#### 国际化

{{ local-text }}

#### 含不可选的日历

{{ custom-range }}

#### 不使用 Popup

{{ without-popup }}

## API

### Calendar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
auto-close | Boolean | true | 自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible | N
confirm-btn | String / Object | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
locale-text | Object | - | 国际化文案。TS 类型：`CalendarLocaleText` `interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
max-date | Number | - | 最大可选的日期，不传则默认半年后 | N
min-date | Number | - | 最小可选的日期，不传则默认今天 | N
readonly | Boolean | - | 是否只读，只读状态下不能选择日期 | N
switch-mode | String | none | 切换模式。 `none` 表示平铺展示所有月份； `month` 表示支持按月切换， `year-month` 表示既按年切换，也支持按月切换。可选项：none/month/year-month | N
title | String | - | 标题，不传默认为“请选择日期” | N
type | String | 'single' | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
use-popup | Boolean | true | 是否使用弹出层包裹日历 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。支持语法糖 `v-model:value`。TS 类型：`number \| number[]` | N
default-value | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：`number \| number[]` | N
visible | Boolean | false | 是否显示日历；`usePopup` 为 true 时有效 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: number \| number[] })` | 不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
close | `(context: { trigger: CalendarTrigger })` | 关闭按钮时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay' \| 'auto-close'`<br/>
confirm | `(context: { value: number \| number[] })` | 点击确认按钮时触发
panel-change | `(context: { year: number, month: number })` | 切换月或年时触发（switch-mode 不为 none 时有效）
scroll | `(context: {scrollLeft: number, scrollTop: number, scrollHeight: number, scrollWidth: number, deltaX: number, deltaY: number})` | 滚动时触发
select | `(context: { value: number \| number[] })` | 点击日期时触发

### Calendar Slots

名称 | 描述
-- | --
confirm-btn | 确认按钮
title | 标题

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-calendar-active-color | @brand-color | - |
| --td-calendar-bg-color | @bg-color-container | - |
| --td-calendar-days-color | @text-color-secondary | - |
| --td-calendar-item-centre-color | @brand-color-light | - |
| --td-calendar-item-disabled-color | @text-color-disabled | - |
| --td-calendar-item-suffix-color | @text-color-placeholder | - |
| --td-calendar-radius | 24rpx | - |
| --td-calendar-selected-border-radius | @radius-default | - |
| --td-calendar-selected-color | @text-color-anti | - |
| --td-calendar-switch-mode-icon-color | @text-color-secondary | - |
| --td-calendar-switch-mode-icon-disabled-color | @text-color-disabled | - |
| --td-calendar-title-color | @text-color-primary | - |
| --td-calendar-title-font-size | 18px | - |