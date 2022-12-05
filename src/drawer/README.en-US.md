:: BASE_DOC ::

## API
### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
close-on-overlay-click | Boolean | undefined | \- | N
custom-style | String | - | \- | N
destroy-on-close | Boolean | false | \- | N
footer | Slot | - | \- | N
items | Array | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts) | N
placement | String | right | options：left/right | N
show-overlay | Boolean | true | \- | N
title | String / Slot | '' | \- | N
visible | Boolean | false | \- | N
z-index | Number | - | \- | N

### Drawer Events

name | params | description
-- | -- | --
close | `(trigger: DrawerEventSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)。<br/>`type DrawerEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | \-
overlay-click | \- | \-
