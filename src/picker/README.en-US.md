:: BASE_DOC ::

## API

### Picker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-close | Boolean | true | \- | N
cancel-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps` | N
confirm-btn | String / Boolean / Object | true | Typescript：`boolean \| string \| ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
header | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
item-height | Number | 80 | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | popup properties。Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
title | String | '' | \- | N
use-popup | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
value | Array | - | Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | \- | N

### Picker Events

name | params | description
-- | -- | --
cancel | - | \-
change | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
close | `(trigger: TriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
pick | `(value: Array<PickerValue>, label: string, column: number, index: number)` | \-


### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
format | Function | - | Typescript：`(option: PickerItemOption) => string` | N
options | Array | [] | Typescript：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker-item/type.ts) | N

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-picker-group-height | 400rpx | - 
--td-picker-bg-color | @bg-color-container | - 
--td-picker-border-radius | 24rpx | - 
--td-picker-button-font-size | 32rpx | - 
--td-picker-cancel-color | @font-gray-2 | - 
--td-picker-confirm-color | @brand-color | - 
--td-picker-indicator-bg-color | @bg-color-secondarycontainer | - 
--td-picker-indicator-border-radius | 12rpx | - 
--td-picker-mask-color-bottom | hsla(0, 0%, 100%, 0.4) | - 
--td-picker-mask-color-top | hsla(0, 0%, 100%, 0.92) | - 
--td-picker-title-color | @font-gray-1 | - 
--td-picker-title-font-size | 36rpx | - 
--td-picker-title-font-weight | 600 | - 
--td-picker-title-line-height | 52rpx | - 
--td-picker-toolbar-height | 116rpx | - 
--td-picker-item-active-color | @font-gray-1 | - 
--td-picker-item-color | @font-gray-2 | - 
--td-picker-item-height | 80rpx | -