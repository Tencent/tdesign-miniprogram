:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
chat-id | String | - | \- | N
comment | String | - | \- | N
content | String | - | \- | N
copy-mode | String | markdown | options: markdown/text | N
disabled | Boolean | false | \- | N
placement | String | start | options: start/end/space-around/space-between | N

### ChatActionbar Events

name | params | description
-- | -- | --
actions | `(detail: {name: string, active: boolean})` | \-
