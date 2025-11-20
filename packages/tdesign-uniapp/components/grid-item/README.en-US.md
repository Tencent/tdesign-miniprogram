:: BASE_DOC ::

## API

### GridItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badgeProps | Object | null | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
description | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object | - | \- | N
image | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
imageProps | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
jumpType | String | navigate-to | options: redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | options: vertical/horizontal | N
text | String / TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
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
