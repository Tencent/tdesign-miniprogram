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
items | Array | - | required。Typescript: `Array<string \| ActionSheetItem>` `interface ActionSheetItem { label: string; description?: string; color?: string; disabled?: boolean; icon?: string \| object; suffixIcon?: string \| object }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts) | Y
popup-props | Object | {} | Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts) | N
show-cancel | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
theme | String | list | options: list/grid | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N

### ActionSheet Events

name | params | description
-- | -- | --
cancel | \- | \-
close | `(trigger: ActionSheetTriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | \-

### ActionSheet Slots

name | Description
-- | --
\- | \-

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
--td-action-sheet-border-color | @component-stroke | -
--td-action-sheet-border-radius | @radius-extraLarge | -
--td-action-sheet-cancel-color | @text-color-primary | -
--td-action-sheet-color | @text-color-primary | -
--td-action-sheet-description-color | @text-color-placeholder | -
--td-action-sheet-description-font | @font-body-medium | -
--td-action-sheet-disabled-color | @text-color-disabled | -
--td-action-sheet-dot-active-color | @brand-color | -
--td-action-sheet-dot-color | @text-color-disabled | -
--td-action-sheet-dot-size | 16rpx | -
--td-action-sheet-gap-color | @bg-color-page | -
