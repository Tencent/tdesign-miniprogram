:: BASE_DOC ::

## API
### Calendar Props

name | type | default | description | required
-- | -- | -- | -- | --
confirm-btn | String / Object / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
custom-style `v0.25.0` | String | - | \- | N
first-day-of-week | Number | 0 | \- | N
format | Function | - | Typescript：`(day: TDate) => TDate` `type TDateType = 'selected' | 'disabled' | 'start' | 'centre' | 'end' | ''; ` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number / Date | - | Typescript：`number | Date` | N
min-date | Number / Date | - | Typescript：`number | Date` | N
title | String / Slot | - | \- | N
type | String | 'single' | options：single/multiple/range | N
value | Number / Array / Date | - | Typescript：`number | Date | TCalendarValue[] ` `type TCalendarValue = number | Date`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
visible | Boolean | false | \- | N

### Calendar Events

name | params | description
-- | -- | --
confirm | `(value: Date)` | \-
select | `(value: Date)` | \-
