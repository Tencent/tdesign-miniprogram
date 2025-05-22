:: BASE_DOC ::

## API

### Popup Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
close-btn | Boolean / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
close-on-overlay-click | Boolean | true | \- | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
duration | Number | 240 | \- | N
overlay-props | Object | {} | Typescript：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts) | N
placement | String | top | options: top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | - | Typescript：`boolean` | N
default-visible | Boolean | undefined | uncontrolled property。Typescript：`boolean` | N
z-index | Number | 11500 | \- | N

### Popup Events

name | params | description
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' \| 'overlay'`<br/>
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
--td-popup-border-radius | @radius-default | - 
--td-popup-close-btn-color | @text-color-primary | -