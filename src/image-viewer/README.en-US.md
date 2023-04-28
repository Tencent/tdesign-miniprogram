:: BASE_DOC ::

## API
### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
background-color | String | 'rgba(0, 0, 0, 1)' | \- | N
close-btn | String / Boolean / Object / Slot | false | \- | N
delete-btn | String / Boolean / Object / Slot | false | \- | N
images | Array | [] | Typescript：`Array<string>` | N
initial-index | Number | 0 | Typescript：`Number` | N
show-index | Boolean | false | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
change | `(index: Number)` | \-
close | `(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)` | \-
delete | `(index: Number)` | \-
