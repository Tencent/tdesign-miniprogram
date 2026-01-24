:: BASE_DOC ::

## API

### Picker Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
auto-close | Boolean | true | \- | N
cancel-btn | String / Boolean | true | Typescript: `boolean \| string` | N
confirm-btn | String / Boolean | true | Typescript: `boolean \| string` | N
header | Boolean | true | \- | N
item-height | Number | 40 | \- | N
keys | Object | - | Typescript: `KeysType`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
popup-props | Object | {} | popup properties。Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/picker/type.ts) | N
title | String | '' | \- | N
use-popup | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
value | Array | - | `v-model:value` is supported。Typescript: `Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/picker/type.ts) | N
default-value | Array | - | uncontrolled property。Typescript: `Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/picker/type.ts) | N
visible | Boolean | false | \- | N
visible-item-count | Number | 5 | \- | N

### Picker Events

name | params | description
-- | -- | --
cancel | \- | \-
change | `(context: { value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> } )` | \-
close | `(context: { trigger: TriggerSource })` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(context: { value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> } )` | \-
pick | `(context: { value: Array<PickerValue>, label: string, column: number, index: number })` | \-

### Picker Slots

name | Description
-- | --
\- | \-
content | \-
footer | \-
header | \-


### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
format | Function | - | Typescript: `(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | Typescript: `PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number; icon?: string }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/picker-item/type.ts) | N

### PickerItem Slots

name | Description
-- | --
label-suffix-index | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-picker-bg-color | @bg-color-container | -
--td-picker-border-radius | 24rpx | -
--td-picker-button-font | @font-body-large | -
--td-picker-cancel-color | @text-color-secondary | -
--td-picker-confirm-color | @brand-color | -
--td-picker-indicator-bg-color | @bg-color-secondarycontainer | -
--td-picker-indicator-border-radius | 12rpx | -
--td-picker-title-color | @text-color-primary | -
--td-picker-title-font | @font-title-large | -
--td-picker-toolbar-height | 116rpx | -
--td-picker-transparent-color | --td-picker-transparent-color | -
--td-picker-item-active-color | @text-color-primary | -
--td-picker-item-color | @text-color-secondary | -
--td-picker-item-font-size | @font-size-m | -
