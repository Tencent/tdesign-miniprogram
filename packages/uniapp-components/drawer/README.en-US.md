:: BASE_DOC ::

## API

### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
close-on-overlay-click | Boolean | true | \- | N
destroy-on-close | Boolean | false | \- | N
items | Array | - | Typescript：`DrawerItem[]` `interface DrawerItem { title: string; icon: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts) | N
overlay-props | Object | {} | Typescript：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts) | N
placement | String | right | options: left/right | N
show-overlay | Boolean | true | \- | N
title | String | - | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
z-index | Number | 11500 | \- | N

### Drawer Events

name | params | description
-- | -- | --
close | `(context: { trigger: DrawerTriggerSource })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts)。<br/>`type DrawerTriggerSource = 'overlay'`<br/>
item-click | `(context: { index: number; item: DrawerItem })` | \-
overlay-click | \- | \-
update-visible | `(context: { visible: boolean })` | \-

### Drawer Slots

name | Description
-- | --
\- | \-
footer | \-
title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-drawer-bg-color | @bg-color-container | -
--td-drawer-border-color | @border-level-1-color | -
--td-drawer-footer-padding-bottom | 40rpx | -
--td-drawer-hover-color | @bg-color-secondarycontainer | -
--td-drawer-item-icon-color | @drawer-title-color | -
--td-drawer-item-icon-size | 48rpx | -
--td-drawer-item-padding | 32rpx | -
--td-drawer-sidebar-height | 70vh | -
--td-drawer-title-color | @text-color-primary | -
--td-drawer-title-font | @font-title-large | -
--td-drawer-title-padding | 48rpx 32rpx 16rpx | -
--td-drawer-width | 560rpx | -
