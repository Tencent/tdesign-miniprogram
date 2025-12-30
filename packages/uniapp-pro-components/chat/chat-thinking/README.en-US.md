:: BASE_DOC ::

## API

### ChatThinking Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | String | moving | options: skeleton/moving/gradient/dot | N
collapsed | Boolean | false | \- | N
content | Object | - | required。Typescript: `{ text?: string; title?: string }` | Y
layout | String | block | options: block/border | N
max-height | Number | - | \- | N
status | String | pending | required。options: complete/stop/error/pending | Y

### ChatThinking Events

name | params | description
-- | -- | --
collapsed-change | `(value: Boolean)` | \-
