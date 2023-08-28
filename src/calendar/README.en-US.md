:: BASE_DOC ::

## API
### Calendar Props

name | type | default | description | required
-- | -- | -- | -- | --
auto-close | Boolean | true | `0.34.0` | N
confirm-btn | String / Object / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
first-day-of-week | Number | 0 | \- | N
format | Function | - | Typescript：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number | - | \- | N
min-date | Number | - | \- | N
title | String / Slot | - | \- | N
type | String | single | options：single/multiple/range | N
use-popup | Boolean | true | `0.32.0` | N
value | Number / Array | - | Typescript：`number \| number[]` | N
default-value | Number / Array | undefined | uncontrolled property。Typescript：`number \| number[]` | N
visible | Boolean | false | \- | N

### Calendar Events

name | params | description
-- | -- | --
change | `(value: timestamp)` | `0.28.0`
close | `(trigger: CalendarTrigger)` | `0.34.0`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay'`<br/>
confirm | `(value: timestamp)` | \-
select | `(value: timestamp)` | `0.28.0`


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
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
