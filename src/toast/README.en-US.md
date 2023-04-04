:: BASE_DOC ::

## API
### Toast Props

name | type | default | description | required
-- | -- | -- | -- | --
direction | String | row | options：row/column | N
duration | Number | 2000 | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String | - | \- | N
message | String / Slot | - | \- | N
overlay-props | Object | {} | \- | N
placement | String | middle | options： top/middle/bottom | N
prevent-scroll-through | Boolean | false | \- | N
show-overlay | Boolean | false | \- | N
theme | String | - | options：loading/success/error | N

### Toast Events

name | params | description
-- | -- | --
close | \- | \-
destory | \- | \-
