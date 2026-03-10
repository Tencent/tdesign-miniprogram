:: BASE_DOC ::

## API

### ChatList Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | String | skeleton | options: skeleton/moving/gradient/dot | N
data | Array | - | Typescript: `Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; status?: string }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-list/type.ts) | N
layout | String | both | options: both/single | N
reverse | Boolean | true | \- | N

### ChatList Events

name | params | description
-- | -- | --
scroll | `(context: TdChatScrollContext)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/chat-list/type.ts)。<br/>` interface TdChatScrollContext { scrollLeft: number;   scrollTop: number;   scrollHeight: number;   scrollWidth: number;   deltaX: number;   deltaY: number}`<br/>

### ChatList Slots

name | Description
-- | --
actionbar | \-
