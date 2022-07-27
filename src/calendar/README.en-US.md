:: BASE_DOC ::

## API

### Calendar Props

name | type | default | description | required
-- | -- | -- | -- | --
cell | Array / Function | - | Typescript：`DateCellDescription[] | ((data: Date) => string)` `interface DateCellDescription { date: Date; label: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
confirm-btn | String / Function / Slot | - | \- | N
first-day-of-week | Number | - | options：1/2/3/4/5/6/7 | N
head | String / Slot | - | \- | N
value | String / Date | - | Typescript：`CalendarValue` `type CalendarValue = string | Date`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N

### Calendar Events

name | params | description
-- | -- | --
cell-click | `(options: { cell: CalendarCell;})` | \-
confirm | `(options: { value: Date;})` | \-
