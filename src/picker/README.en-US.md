:: BASE_DOC ::

## API

### Picker Props

name | type | default | description | required
-- | -- | -- | -- | --
auto-close | Boolean | true | \- | N
cancel-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps` | N
columns | Array / Function | [] | required。Typescript：`Array<PickerColumn> \| ((item: Array<PickerValue>)  => Array<PickerColumn>)` `type PickerColumn = PickerColumnItem[]` `interface PickerColumnItem { label: string,value: string}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | Y
confirm-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
custom-style `v0.25.0` | String | - | \- | N
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
change | `(detail: { value: Array<PickerValue>; columns: Array<{ column: number; index: number }> })` | \-
confirm | `(value: Array<PickerValue>, context: {index: number[] })` | \-
pick | `(value: Array<PickerValue>,context: PickerContext)` | \-
