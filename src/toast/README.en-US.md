:: BASE_DOC ::

## API
### Toast Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | \- | N
direction | String | row | options：row/column | N
duration | Number | 2000 | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String | - | \- | N
message | String / Slot | - | \- | N
overlay-props | Object | {} | \- | N
placement | String | middle | options： top/middle/bottom | N
prevent-scroll-through | Boolean | false | \- | N
show-overlay | Boolean | false | \- | N
theme | String | - | options：loading/success/fail | N

### Toast Events

name | params | description
-- | -- | --
close | \- | \-
destory | \- | \-
