:: BASE_DOC ::

## API

### Popup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
close-btn | Boolean | - | \- | N
close-on-overlay-click | Boolean | true | \- | N
content | String | - | \- | N
duration | Number | 240 | \- | N
overlay-props | Object | {} | Typescript：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts) | N
placement | String | top | options: top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | - | `v-model:visible` is supported。Typescript：`boolean` | N
default-visible | Boolean | - | uncontrolled property。Typescript：`boolean` | N
z-index | Number | 11500 | \- | N

### Popup Events

name | params | description
-- | -- | --
visible-change | `(context: { visible: boolean, trigger: PopupSource }) ` | [see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>`type PopupSource = 'close-btn' \| 'overlay'`<br/>

### Popup Slots

name | Description
-- | --
\- | \-
close-btn | \-
content | \-

### Popup External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-popup-bg-color | @bg-color-container | - 
--td-popup-border-radius | @radius-extraLarge | - 
--td-popup-close-btn-color | @text-color-primary | - 
--td-popup-distance-top | 0) | - 
--td-popup-transition | all 300ms ease | -