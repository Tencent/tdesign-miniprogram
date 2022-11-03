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
style | String | - | \- | N

### GridItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/grid/type.ts) | N
description | String / Slot | - | \- | N
external-classes | Array | - | `['t-class', 't-class-image', 't-class-text', 't-class-description']` | N
image | String / Slot | - | \- | N
image-props | Object | - | \- | N
jump-type | String | navigate-to | options：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | options：vertical/horizontal | N
style | String | - | \- | N
text | String / Slot | - | \- | N
url | String | - | \- | N
