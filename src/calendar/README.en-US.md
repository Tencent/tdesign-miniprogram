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
