:: BASE_DOC ::

## API
### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
error | String / Slot | 'default' | \- | N
external-classes | Array | - | `['t-class', 't-class-load']` | N
height | String / Number | - | \- | N
lazy | Boolean | false | \- | N
loading | String / Slot | 'default' | \- | N
mode | String | scaleToFill | options：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
shape | String | square | options：circle/round/square | N
show-menu-by-longpress | Boolean | false | \- | N
src | String | - | \- | N
webp | Boolean | false | \- | N
width | String / Number | - | \- | N

### Image Events

name | params | description
-- | -- | --
error | \- | \-
load | \- | \-
