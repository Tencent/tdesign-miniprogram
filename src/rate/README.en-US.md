:: BASE_DOC ::

## API
### Rate Props

name | type | default | description | required
-- | -- | -- | -- | --
allow-half | Boolean | false | \- | N
count | Number | 5 | \- | N
custom-style `v0.25.0` | String | - | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-text']` | N
gap | Number | 8 | \- | N
show-text | Boolean | false | \- | N
size | String | 20 | \- | N
texts | Array | [] | Typescript：`Array<string>` | N
value | Number | 0 | \- | N
default-value | Number | undefined | uncontrolled property | N
variant | String | outline | options：outline/filled | N

### Rate Events

name | params | description
-- | -- | --
change | `(value: number)` | \-
