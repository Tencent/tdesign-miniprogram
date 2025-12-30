:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
action-bar | Array | () => ['replay', 'copy', 'good', 'bad', 'share'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
chat-id | String | - | \- | N
comment | String | - | \- | N
content | String | - | \- | N
copy-mode | String | markdown | options: markdown/text | N
disabled | Boolean | false | \- | N
placement | String | start | options: start/end/space-around/space-between | N

### ChatActionbar Events

name | params | description
-- | -- | --
actions | `(context: {name: string, active: boolean})` | \-
