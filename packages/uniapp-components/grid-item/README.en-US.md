:: BASE_DOC ::

## API

### GridItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badgeProps | Object | null | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/grid-item/type.ts) | N
description | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
icon | String / Object | - | \- | N
image | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
imageProps | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/grid-item/type.ts) | N
jumpType | String | navigate-to | options: redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | options: vertical/horizontal | N
text | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
url | String | - | \- | N
onClick | Function |  | Typescript：`() => void`<br/> | N

### GridItem Events

name | params | description
-- | -- | --
click | \- | \-

### GridItem Slots

name | Description
-- | --
- | \-
description | \-
image | \-
text | \-

### GridItem External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-description | \-
t-class-image | \-
t-class-text | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-grid-item-bg-color | @bg-color-container | -
--td-grid-item-description-color | @text-color-placeholder | -
--td-grid-item-description-font | @font-body-small | -
--td-grid-item-description-padding-top | 0 | -
--td-grid-item-horizontal-text-description-top | 0 | -
--td-grid-item-horizontal-text-padding-left | 0 | -
--td-grid-item-hover-bg-color | @bg-color-secondarycontainer | -
--td-grid-item-image-middle-width | 80rpx | -
--td-grid-item-image-small-width | 64rpx | -
--td-grid-item-image-width | 96rpx | -
--td-grid-item-padding | 32rpx | -
--td-grid-item-text-color | @text-color-primary | -
--td-grid-item-text-font | @font-body-medium | -
--td-grid-item-text-middle-font | @font-body-small | -
--td-grid-item-text-padding-top | 16rpx | -
--td-grid-item-text-small-font | @font-body-extraSmall | -
