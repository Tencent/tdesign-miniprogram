:: BASE_DOC ::

## API

### List Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
async-loading | String | - | \- | N
footer | String | - | \- | N
header | String | - | \- | N

### List Events

name | params | description
-- | -- | --
load-more | \- | \-
scroll | `(bottomDistance: number, scrollTop: number)` | \-

### List Slots

name | Description
-- | --
async-loading | \-
footer | \-
header | \-
