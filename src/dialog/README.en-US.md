:: BASE_DOC ::

## API
### Dialog Props

name | type | default | description | required
-- | -- | -- | -- | --
actions | Array / Slot | - | Typescript：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | options：horizontal/vertical | N
cancel-btn | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-btn | Boolean / Object | false | `0.31.0` | N
close-on-overlay-click | Boolean | undefined | \- | N
confirm-btn | String / Object / Slot | - | \- | N
content | String / Slot | - | \- | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-confirm', 't-class-cancel']` | N
overlay-props | Object | {} | \- | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
title | String / Slot | - | \- | N
visible | Boolean | - | \- | N
z-index | Number | 11500 | \- | N

### Dialog Events

name | params | description
-- | -- | --
cancel | - | \-
close | `(trigger: DialogEventSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay' \| 'close-btn'`<br/>
confirm | - | \-
overlay-click | - | \-
