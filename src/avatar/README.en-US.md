:: BASE_DOC ::

## API

### Avatar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
alt | String | - | show it when url is not valid | N
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
bordered | Boolean | false | \- | N
hide-on-load-failed | Boolean | false | hide image when loading image failed | N
icon | String / Object | - | \- | N
image | String | - | images url | N
image-props | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
shape | String | - | shape。options: circle/round。Typescript：`ShapeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
size | String | - | size | N

### Avatar Events

name | params | description
-- | -- | --
error | - | trigger on image load failed

### Avatar External Classes

className | Description
-- | --
t-class | \-
t-class-alt | \-
t-class-content | \-
t-class-icon | \-
t-class-image | \-


### AvatarGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
cascading | String | 'left-up' | multiple images cascading。options: left-up/right-up。Typescript：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar-group/type.ts) | N
collapse-avatar | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max | Number | - | \- | N
shape | String | - | shape。options: circle/round。Typescript：`ShapeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
size | String | - | size | N

### AvatarGroup Events

name | params | description
-- | -- | --
collapsed-item-click | - | \-

### AvatarGroup External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-image | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-avatar-group-init-z-index | @avatar-group-init-zIndex) - @i | - 
--td-avatar-group-line-spacing | 4rpx | - 
--td-avatar-group-margin-left-large | -16rpx | - 
--td-avatar-group-margin-left-medium | -16rpx | - 
--td-avatar-group-margin-left-small | -16rpx | - 
--td-avatar-bg-color | @brand-color-light-active | - 
--td-avatar-border-color | #fff | - 
--td-avatar-border-width-large | 6rpx | - 
--td-avatar-border-width-medium | 4rpx | - 
--td-avatar-border-width-small | 2rpx | - 
--td-avatar-circle-border-radius | @radius-circle | - 
--td-avatar-content-color | @brand-color | - 
--td-avatar-icon-large-font-size | 64rpx | - 
--td-avatar-icon-medium-font-size | 48rpx | - 
--td-avatar-icon-small-font-size | 40rpx | - 
--td-avatar-large-width | 128rpx | - 
--td-avatar-margin-left | 0 | - 
--td-avatar-medium-width | 96rpx | - 
--td-avatar-round-border-radius | @radius-default | - 
--td-avatar-small-width | 80rpx | - 
--td-avatar-text-large-font-size | @font-size-xl | - 
--td-avatar-text-medium-font-size | @font-size-m | - 
--td-avatar-text-small-font-size | @font-size-base | -