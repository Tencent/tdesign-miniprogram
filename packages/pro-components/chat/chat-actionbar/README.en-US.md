:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'\|'quote'>` | N
chat-id | String | - | \- | N
comment | String | - | options: good/bad | N
content | String | - | \- | N
copy-mode | String | markdown | options: markdown/text | N
disabled | Boolean | false | \- | N
long-press-position | Object | - | Typescript: `ChatActionbarLongPressPosition ` `interface ChatActionbarLongPressPosition { type?: object, value?: LongPressPositionValue } ` `interface LongPressPositionValue { pageX?: number, pageY?: number, clientX?: number, clientY?: number, x?: number, y?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-actionbar/type.ts) | N
placement | String | start | options: start/end/space-around/space-between/longpress | N

### ChatActionbar Events

name | params | description
-- | -- | --
actions | `(detail: {name: string, active: boolean, chatId: string})` | \-
