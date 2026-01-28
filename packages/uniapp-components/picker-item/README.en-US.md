:: BASE_DOC ::

## API

### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
format | Function | - | Typescript：`(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | Typescript：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number; icon?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/picker/type.ts) | N

### PickerItem Slots

name | Description
-- | --
label-suffix--[index] | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-picker-item-active-color | @text-color-primary | -
--td-picker-item-color | @text-color-secondary | -
--td-picker-item-font-size | @font-size-m | -
