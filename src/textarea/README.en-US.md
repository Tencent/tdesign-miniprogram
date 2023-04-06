:: BASE_DOC ::

## API
### Textarea Props

name | type | default | description | required
-- | -- | -- | -- | --
adjust-position | Boolean | true | \- | N
autofocus | Boolean | false | \- | N
autosize | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | done | options：send/search/next/go/done。Typescript：`'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor-spacing | Number | 0 | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class', 't-class-textarea', 't-class-label']` | N
focus | Boolean | false | \- | N
label | String / Slot | - | \- | N
maxcharacter | Number | - | \- | N
maxlength | Number | - | \- | N
placeholder | String | undefined | \- | N
value | String | - | \- | N
default-value | String | undefined | uncontrolled property | N

### Textarea Events

name | params | description
-- | -- | --
blur | `(value: TextareaValue)` | \-
change | `(value: TextareaValue)` | \-
enter | `(value: TextareaValue)` | \-
focus | `(value: TextareaValue)` | \-
line-change | `(value: TextareaValue)` | \-
