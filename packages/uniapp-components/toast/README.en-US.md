:: BASE_DOC ::

## API

### Toast Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
direction | String | row | options: row/column | N
duration | Number | 2000 | \- | N
icon | String / Object | - | \- | N
message | String | - | \- | N
overlay-props | Object | - | Typescript：`OverlayProps `，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/toast/type.ts) | N
placement | String | middle | options:  top/middle/bottom | N
prevent-scroll-through | Boolean | false | \- | N
show-overlay | Boolean | false | \- | N
theme | String | - | options: loading/success/warning/error | N
using-custom-navbar | Boolean | false | \- | N

### Toast Events

name | params | description
-- | -- | --
close | \- | \-
destroy | \- | \-

### Toast Slots

name | Description
-- | --
icon | \-
message | \-

### Toast External Classes

className | Description
-- | --
t-class | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-toast-bg-color | @mask-active | -
--td-toast-color | @text-color-anti | -
--td-toast-column-icon-size | 64rpx | -
--td-toast-max-width | 370rpx | -
--td-toast-radius | @radius-default | -
--td-toast-row-icon-size | 48rpx | -
