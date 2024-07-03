:: BASE_DOC ::

## API

### ActionSheet Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
align | String | center | `0.29.0`。options: center/left | N
cancel-text | String | - | \- | N
count | Number | 8 | \- | N
description | String | - | `0.29.0` | N
items | Array | - | required。Typescript：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean;icon?: string;suffixIcon?: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
popup-props | Object | {} | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | N
show-cancel | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
theme | String | list | options: list/grid | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | required | Y
default-visible | Boolean | undefined | required。uncontrolled property | Y

### ActionSheet Events

name | params | description
-- | -- | --
cancel | \- | \-
close | `(trigger: TriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | \-
### ActionSheet External Classes

className | Description
-- | --
t-class | \-
t-class-cancel | \-
t-class-content | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-action-sheet-border-color | @gray-color-1 | - 
--td-action-sheet-border-radius | @radius-extra-large | - 
--td-action-sheet-cancel-color | @font-gray-1 | - 
--td-action-sheet-cancel-height | 96rpx | - 
--td-action-sheet-color | @font-gray-1 | - 
--td-action-sheet-description-color | @font-gray-3 | - 
--td-action-sheet-list-item-disabled-color | @font-gray-4 | - 
--td-action-sheet-list-item-height | 112rpx | - 
--td-action-sheet-text-align | center | -