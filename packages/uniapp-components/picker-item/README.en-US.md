:: BASE_DOC ::

## API

### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
format | Function | - | Typescript：`(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | Typescript：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number; icon?: string }`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | N

### PickerItem Slots

name | Description
-- | --
label-suffix--[index] | \-
