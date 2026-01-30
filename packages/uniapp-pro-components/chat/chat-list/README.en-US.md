:: BASE_DOC ::

## API

### ChatList Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | String | skeleton | options: skeleton/moving/gradient/dot | N
data | Array | - | Typescript: `Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; status?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-list/type.ts) | N
layout | String | both | options: both/single | N
reverse | Boolean | true | \- | N

### ChatList Events

name | params | description
-- | -- | --
scroll | `(context: {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})` | \-

### ChatList Slots

name | Description
-- | --
actionbar | \-
