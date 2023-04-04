:: BASE_DOC ::

## API
### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
close-on-overlay-click | Boolean | undefined | \- | N
destroy-on-close | Boolean | false | \- | N
footer | Slot | - | `0.29.0` | N
items | Array | - | Typescript：`DrawerItem[] ` `interface DrawerItem { title: string; icon: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts) | N
placement | String | right | options：left/right | N
show-overlay | Boolean | true | \- | N
title | String / Slot | - | `0.29.0` | N
visible | Boolean | false | \- | N
z-index | Number | 11500 | \- | N

### Drawer Events

name | params | description
-- | -- | --
close | `(trigger: TriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)。<br/>`type TriggerSource = 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | \-
overlay-click | \- | \-
