:: BASE_DOC ::

## API

### Sticky Props

name | type | default | description | required
-- | -- | -- | -- | --
container | Function | - | \- | N
custom-style `v0.25.0` | String | - | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class']` | N
offset-top | String / Number | 0 | \- | N
z-index | Number | 99 | \- | N

### Sticky Events

name | params | description
-- | -- | --
scroll | `(detail: { scrollTop: number, isFixed: boolean })` | \-
