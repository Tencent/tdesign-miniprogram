:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share', 'quote'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'\|'quote'>` | N
chat-id | String | - | \- | N
comment | String | - | options: good/bad | N
content | String | - | \- | N
copy-mode | String | markdown | options: markdown/text | N
disabled | Boolean | false | \- | N
placement | String | start | options: start/end/space-around/space-between/longpress | N

### ChatActionbar Events

name | params | description
-- | -- | --
actions | `(detail: {name: string, active: boolean, chatId: string})` | \-
