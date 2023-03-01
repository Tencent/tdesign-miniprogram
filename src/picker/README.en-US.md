:: BASE_DOC ::

## API
### Picker Props

name | type | default | description | required
-- | -- | -- | -- | --
auto-close | Boolean | true | \- | N
cancel-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps` | N
columns | Array / Function | [] | required。Typescript：`Array<PickerColumn> \| ((item: Array<PickerValue>)  => Array<PickerColumn>)` `type PickerColumn = PickerColumnItem[]` `interface PickerColumnItem { label: string,value: string}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | Y
confirm-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
footer | Slot | - | \- | N
header | Boolean / Slot | true | \- | N
render-label | String / Function | - | Typescript：`(item: PickerColumnItem) => string` | N
title | String | '' | \- | N
value | Array | - | Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | \- | N

### Picker Events

name | params | description
-- | -- | --
cancel | - | \-
change | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
close | `(trigger: TriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confrim-btn'`<br/>
confirm | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
pick | `(value: Array<PickerValue>, label: string, column: number, index: number)` | \-

### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
format | Function | - | Typescript：`(option: PickerItemOption) => string` | N
options | Array | [] | Typescript：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker-item/type.ts) | N
