:: BASE_DOC ::

## API
### Dialog Props

name | type | default | description | required
-- | -- | -- | -- | --
actions | Array / Slot | - | Typescript：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | options：horizontal/vertical | N
cancel-btn | String / Object / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-on-overlay-click | Boolean | true | \- | N
confirm-btn | String / Object / Slot | '' | \- | N
content | String / Slot | - | \- | N
custom-style `v0.25.0` | String | - | \- | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-confirm', 't-class-cancel']` | N
overlay-props | Object | {} | \- | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
title | String / Slot | - | \- | N
visible | Boolean | false | \- | N
z-index | Number | 11500 | \- | N

### Dialog Events

name | params | description
-- | -- | --
cancel | \- | \-
close | `(trigger: DialogEventSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay'`<br/>
confirm | - | \-
overlay-click | \- | \-
confirm | \- | 如果“确认”按钮存在，则点击“确认”按钮时触发
action | `(index: number)` | \-
open-type-event | `(ButtonEventDetail)` | \-
open-type-error-event | `(ButtonError)` | \-
