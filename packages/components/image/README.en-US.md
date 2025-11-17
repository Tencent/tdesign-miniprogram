:: BASE_DOC ::

## API

### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
error | String | 'default' | \- | N
height | String / Number | - | \- | N
lazy | Boolean | false | \- | N
loading | String | 'default' | \- | N
mode | String | scaleToFill | options: scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
shape | String | square | options: circle/round/square | N
show-menu-by-longpress | Boolean | false | \- | N
src | String | - | \- | N
t-id | String | - | `1.2.10`。image tag id | N
webp | Boolean | false | \- | N
width | String / Number | - | \- | N

### Image Events

name | params | description
-- | -- | --
error | - | trigger on image load failed。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)
load | - | trigger on image loaded。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)

### Image Slots

name | Description
-- | --
error | \-
loading | \-

### Image External Classes

className | Description
-- | --
t-class | \-
t-class-load | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-image-color | @text-color-placeholder | - 
--td-image-loading-bg-color | @bg-color-secondarycontainer | - 
--td-image-loading-color | @text-color-placeholder | - 
--td-image-round-radius | @radius-default | -