:: BASE_DOC ::

## API

### DateTimePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-close | Boolean | false | \- | N
cancel-btn | String | 取消 | \- | N
confirm-btn | String | - | \- | N
custom-locale | String | zh | \- | N
end | String / Number | - | \- | N
filter | Function | - | Typescript：`(type: TimeModeValues, columns: DateTimePickerColumn) => DateTimePickerColumn` `type DateTimePickerColumn = DateTimePickerColumnItem[]` `interface DateTimePickerColumnItem { label: string,value: string}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
format | String | 'YYYY-MM-DD HH:mm:ss' | \- | N
header | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
mode | String / Array | 'date' | Typescript：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
popup-props | Object | {} | popup properties。Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
show-week | Boolean | false | \- | N
start | String / Number | - | \- | N
steps | Object | - | \- | N
title | String | - | title of picker | N
use-popup | Boolean | true | \- | N
value | String / Number | - | Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | \- | N

### DateTimePicker Events

name | params | description
-- | -- | --
cancel | \- | \-
change | `(value: DateValue)` | \-
close | `(trigger: TriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: DateValue)` | `1.0.1`
pick | `(value: DateValue)` | \-

### DateTimePicker External Classes

className | Description
-- | --
t-class | \-
t-class-cancel | \-
t-class-confirm | \-
t-class-title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-data-time-picker-year-width | 128rpx | -