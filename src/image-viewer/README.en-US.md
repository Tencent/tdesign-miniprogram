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


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-image-viewer-close-margin-left | @spacer-1 | - 
--td-image-viewer-delete-margin-right | @spacer-1 | - 
--td-image-viewer-nav-bg-color | @font-gray-3 | - 
--td-image-viewer-nav-color | @font-white-1 | - 
--td-image-viewer-nav-height | 96rpx | - 
--td-image-viewer-nav-index-font-size | @font-size-base | - 
--td-image-viewer-top | @position-fixed-top | - 
