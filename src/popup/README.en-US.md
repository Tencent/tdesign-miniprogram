:: BASE_DOC ::

## API
### Popup Props

name | type | default | description | required
-- | -- | -- | -- | --
close-btn | Boolean / Slot | - | \- | N
close-on-overlay-click | Boolean | true | \- | N
content | String / Slot | - | \- | N
duration | Number | 240 | \- | N
external-classes | Array | - | `['t-class', 't-class-overlay', 't-class-content']` | N
overlay-props | Object | {} | \- | N
placement | String | top | options：top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
visible | Boolean | false | Typescript：`boolean` | N
default-visible | Boolean | undefined | uncontrolled property。Typescript：`boolean` | N
z-index | Number | 11500 | \- | N

### Popup Events

name | params | description
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' \| 'overlay'`<br/>
