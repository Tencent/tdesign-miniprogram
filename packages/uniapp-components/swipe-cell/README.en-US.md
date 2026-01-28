:: BASE_DOC ::

## API

### SwipeCell Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
disabled | Boolean | - | \- | N
left | Array | - | Typescript：`Array<SwipeActionItem>` | N
opened | Boolean / Array | false | Typescript：`boolean \| Array<boolean>` | N
right | Array | - | Typescript：`Array<SwipeActionItem>` `interface SwipeActionItem {text?: string; icon?: string \| object, className?: string; style?: string; onClick?: () => void; [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swipe-cell/type.ts) | N

### SwipeCell Events

name | params | description
-- | -- | --
click | `(action: SwipeActionItem, source: SwipeSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swipe-cell/type.ts)。<br/>`type SwipeSource = 'left' \| 'right'`<br/>
dragend | \- | \-
dragstart | \- | \-

### SwipeCell Slots

name | Description
-- | --
\- | \-
left | \-
right | \-
