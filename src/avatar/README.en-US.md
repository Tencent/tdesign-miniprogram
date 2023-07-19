:: BASE_DOC ::

## API
### Avatar Props

name | type | default | description | required
-- | -- | -- | -- | --
alt | String | - | show it when url is not valid | N
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
bordered | Boolean | false | \- | N
external-classes | Array | - | `['t-class', 't-class-image', 't-class-icon', 't-class-alt', 't-class-content']` | N
hide-on-load-failed | Boolean | false | hide image when loading image failed | N
icon | String / Object | - | \- | N
image | String | - | images url | N
image-props | Object | - | \- | N
shape | String | circle | shape。options：circle/round。Typescript：`ShapeEnum ` `type ShapeEnum = 'circle' \| 'round'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
size | String | medium | size | N

### Avatar Events

name | params | description
-- | -- | --
error | \- | trigger on image load failed

### AvatarGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
cascading | String | 'right-up' | multiple images cascading。options：left-up/right-up。Typescript：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar-group/type.ts) | N
collapse-avatar | String / Slot | - | \- | N
external-classes | Array | - | `['t-class', 't-class-image', 't-class-content']` | N
max | Number | - | \- | N
size | String | medium | size | N


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-avatar-group-margin-left-large | -8px | - 
--td-avatar-group-margin-left-medium | -6px | - 
--td-avatar-group-margin-left-small | -4px | - 
--td-avatar-bg-color | @brand-color-light-active | - 
--td-avatar-border-color | #fff | - 
--td-avatar-border-width-large | 8rpx | - 
--td-avatar-border-width-medium | 6rpx | - 
--td-avatar-border-width-small | 4rpx | - 
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
--td-avatar-text-large-font-size | 16px | - 
--td-avatar-text-medium-font-size | @font-size-base | - 
--td-avatar-text-small-font-size | @font-size-s | - 
