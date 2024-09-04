
## API


### Overlay Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
background-color | String | - | \- | N
duration | Number | 300 | \- | N
prevent-scroll-through | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
z-index | Number | 11000 | \- | N

### Overlay Events

name | params | description
-- | -- | --
click | `({ visible: boolean })` | \-


### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-overlay-bg-color | @font-gray-2 | - 
--td-overlay-transition-duration | 300ms | - 
