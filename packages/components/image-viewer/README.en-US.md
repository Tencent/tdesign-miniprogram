:: BASE_DOC ::

## API

### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
background-color | String | - | \- | N
close-btn | String / Boolean / Object / Slot | false | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
delete-btn | String / Boolean / Object / Slot | false | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
images | Array | [] | Typescript：`Array<string>` | N
initial-index | Number | 0 | Typescript：`Number` | N
lazy | Boolean | true | `1.9.4` | N
show-index | Boolean | false | \- | N
using-custom-navbar | Boolean | false | `v1.1.4` | N
visible | Boolean | false | hide or show image viewer | N
default-visible | Boolean | undefined | hide or show image viewer。uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
change | `(index: number)` | \-
close | `(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)` | \-
delete | `(index: number)` | \-

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