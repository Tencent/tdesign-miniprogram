:: BASE_DOC ::

## API

### DateTimePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
auto-close | Boolean | false | \- | N
cancel-btn | String | 取消 | \- | N
confirm-btn | String | - | \- | N
custom-locale | String | zh | \- | N
end | String / Number | - | \- | N
filter | Function | - | Typescript：`(type: TimeModeValues, columns: DateTimePickerColumn) => DateTimePickerColumn` `type DateTimePickerColumn = DateTimePickerColumnItem[]` `interface DateTimePickerColumnItem { label: string,value: string}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts) | N
format | String | 'YYYY-MM-DD HH:mm:ss' | \- | N
formatter | Function | - | Typescript：`(option: DateTimePickerColumnItem, columnIndex: number) => DateTimePickerColumnItem` | N
header | Boolean | true | \- | N
mode | String / Array | 'date' | Typescript：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second' \| 'null'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts) | N
popup-props | Object | {} | popup properties。Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts) | N
show-week | Boolean | false | \- | N
start | String / Number | - | \- | N
steps | Object | {} | Typescript：`{ [key in TimeModeValues]?: number }` | N
title | String | - | title of picker | N
use-popup | Boolean | true | \- | N
value | String / Number | - | `v-model:value` is supported。Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts) | N
default-value | String / Number | - | uncontrolled property。Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts) | N
visible | Boolean | false | \- | N

### DateTimePicker Events

name | params | description
-- | -- | --
cancel | \- | \-
change | `(context: { value: DateValue })` | \-
close | `(context: { trigger: DateTimePickerTriggerSource })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/date-time-picker/type.ts)。<br/>`type DateTimePickerTriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(context: { value: DateValue })` | \-
pick | `(context: { value: DateValue })` | \-

### DateTimePicker Slots

name | Description
-- | --
footer | \-
header | \-

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
