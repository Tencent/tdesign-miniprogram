:: BASE_DOC ::

## API

### Sticky Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
container | Function | - | \- | N
disabled | Boolean | false | \- | N
offset-top | String / Number | 0 | \- | N
z-index | Number | 99 | \- | N

### Sticky Events

name | params | description
-- | -- | --
scroll | `(detail: { scrollTop: number, isFixed: boolean })` | \-

### Sticky Slots

name | Description
-- | --
\- | \-

### Sticky External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
