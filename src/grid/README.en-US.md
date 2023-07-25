:: BASE_DOC ::

## API
### Grid Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | center | options：left/center | N
border | Boolean / Object | false | Typescript：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | \- | N
external-classes | Array | - | `['t-class']` | N
gutter | Number | - | \- | N
hover | Boolean | false | \- | N
theme | String | default | options：default/card | N

### GridItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badge-props | Object | null | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/grid-item/type.ts) | N
description | String / Slot | - | \- | N
external-classes | Array | - | `['t-class', 't-class-image', 't-class-text', 't-class-description']` | N
icon | String / Object | - | \- | N
image | String / Slot | - | \- | N
image-props | Object | - | \- | N
jump-type | String | navigate-to | options：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | options：vertical/horizontal | N
text | String / Slot | - | \- | N
url | String | - | \- | N


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-grid-bg-color | @bg-color-container | - 
--td-grid-card-radius | @radius-large | - 
--td-grid-item-bg-color | @bg-color-container | - 
--td-grid-item-description-color | @font-gray-3 | - 
--td-grid-item-description-font-size | 24rpx | - 
--td-grid-item-description-line-height | 40rpx | - 
--td-grid-item-description-padding-top | 8rpx | - 
--td-grid-item-horizontal-text-description-top | 4rpx | - 
--td-grid-item-horizontal-text-padding-left | 24rpx | - 
--td-grid-item-hover-bg-color | @bg-color-secondarycontainer | - 
--td-grid-item-image-middle-width | 80rpx | - 
--td-grid-item-image-small-width | 64rpx | - 
--td-grid-item-image-width | 96rpx | - 
--td-grid-item-padding | 32rpx | - 
--td-grid-item-text-color | @font-gray-1 | - 
--td-grid-item-text-font-size | 28rpx | - 
--td-grid-item-text-line-height | 44rpx | - 
--td-grid-item-text-middle-font-size | 24rpx | - 
--td-grid-item-text-padding-top | 16rpx | - 
--td-grid-item-text-small-font-size | 24rpx | - 
