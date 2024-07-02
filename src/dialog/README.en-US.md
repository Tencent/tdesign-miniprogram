:: BASE_DOC ::

## API

### Dialog Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
actions | Array / Slot | - | Typescript：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | options: horizontal/vertical | N
cancel-btn | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-btn | Boolean / Object | false | `0.31.0`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-on-overlay-click | Boolean | false | \- | N
confirm-btn | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
overlay-props | Object | {} | Typescript：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
title | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | - | \- | N
z-index | Number | 11500 | \- | N

### Dialog Events

name | params | description
-- | -- | --
cancel | - | \-
close | `(trigger: DialogEventSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay' \| 'close-btn'`<br/>
confirm | - | \-
overlay-click | - | \-
### Dialog External Classes

className | Description
-- | --
t-class | \-
t-class-action | \-
t-class-cancel | \-
t-class-confirm | \-
t-class-content | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-dialog-body-max-height | 912rpx | - 
--td-dialog-close-color | @font-gray-3 | - 
--td-dialog-content-color | @font-gray-2 | - 
--td-dialog-content-font-size | 32rpx | - 
--td-dialog-content-line-height | 48rpx | - 
--td-dialog-title-color | @font-gray-1 | - 
--td-dialog-title-font-size | 36rpx | - 
--td-dialog-title-line-height | 52rpx | - 
--td-dialog-width | 622rpx | -