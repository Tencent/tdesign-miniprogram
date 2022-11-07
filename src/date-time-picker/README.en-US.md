:: BASE_DOC ::

## API
### DateTimePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
cancel-btn | String | 取消 | \- | N
confirm-btn | String | - | \- | N
custom-style `v0.25.0` | String | - | \- | N
end | String / Number | - | \- | N
external-classes | Array | - | `['t-class', 't-class-confirm', 't-class-cancel', 't-class-title']` | N
footer | Slot | true | \- | N
format | String | 'YYYY-MM-DD HH:mm:ss' | \- | N
header | Boolean / Slot | true | \- | N
mode | String / Array | 'date' | Typescript：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
show-week | Boolean | false | \- | N
start | String / Number | - | \- | N
title | String | - | title of picker | N
value | String / Number | - | Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | \- | N

### DateTimePicker Events

name | params | description
-- | -- | --
cancel | \- | \-
change | `(value: DateValue)` | \-
confirm | `(value: DateValue)` | \-
pick | `(value: DateValue)` | \-
