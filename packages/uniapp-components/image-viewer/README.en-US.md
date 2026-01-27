:: BASE_DOC ::

## API

### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
background-color | String | - | \- | N
close-btn | String / Boolean / Object | false | \- | N
delete-btn | String / Boolean / Object | false | \- | N
image-props | Object | - | Typescript: `ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/image-viewer/type.ts) | N
images | Array | [] | Typescript: `Array<string>` | N
initial-index | Number | 0 | Typescript: `Number` | N
lazy | Boolean | true | \- | N
show-index | Boolean | false | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | hide or show image viewer。`v-model:visible` is supported | N
default-visible | Boolean | false | hide or show image viewer。uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
change | `(context: { index: number })` | \-
close | `(context: { trigger: 'overlay' \| 'button', visible: Boolean, index: Number } )` | \-
delete | `(context: { index: number } )` | \-

### ImageViewer Slots

name | Description
-- | --
close-btn | \-
delete-btn | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-image-viewer-close-margin-left | @spacer-1 | -
--td-image-viewer-delete-margin-right | @spacer-1 | -
--td-image-viewer-mask-bg-color | @mask-active | -
--td-image-viewer-nav-bg-color | #000 | -
--td-image-viewer-nav-color | @text-color-anti | -
--td-image-viewer-nav-height | 96rpx | -
--td-image-viewer-nav-index-font-size | @font-size-base | -
--td-image-viewer-top | @position-fixed-top | -
