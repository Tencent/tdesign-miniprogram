:: BASE_DOC ::

## API

### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
close-on-overlay-click | Boolean | true | \- | N
destroy-on-close | Boolean | false | \- | N
footer | Slot | - | `0.29.0`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
items | Array | - | Typescript：`DrawerItem[]` `interface DrawerItem { title: string; icon: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/drawer/type.ts) | N
placement | String | right | options: left/right | N
show-overlay | Boolean | true | \- | N
title | String / Slot | - | `0.29.0`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
z-index | Number | 11500 | \- | N

### Drawer Events

name | params | description
-- | -- | --
close | `(trigger: DrawerTriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/drawer/type.ts)。<br/>`type DrawerTriggerSource = 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | \-
overlay-click | \- | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-drawer-bg-color | @bg-color-container | - 
--td-drawer-border-color | @border-level-1-color | - 
--td-drawer-footer-padding-bottom | 40rpx | - 
--td-drawer-hover-color | @bg-color-secondarycontainer | - 
--td-drawer-item-height | 48rpx | - 
--td-drawer-item-icon-color | @drawer-title-color | - 
--td-drawer-item-icon-size | 48rpx | - 
--td-drawer-item-padding | 32rpx | - 
--td-drawer-sidebar-height | 70vh | - 
--td-drawer-title-color | @text-color-primary | - 
--td-drawer-title-font-size | 36rpx | - 
--td-drawer-title-padding | 48rpx 32rpx 16rpx | - 
--td-drawer-width | 560rpx | -