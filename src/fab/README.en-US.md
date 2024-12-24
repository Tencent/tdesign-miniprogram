:: BASE_DOC ::

## API

### Fab Props

name | type | default | description | required
-- | -- | -- | -- | --
style | String | right: 16px; bottom: 32px; | \- | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
button-props | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
draggable | String / Boolean | false | Typescript：`boolean \| FabDirectionEnum ` `type FabDirectionEnum = 'all' \| 'vertical' \| 'horizontal'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
icon | String | - | \- | N
text | String | - | \- | N
using-custom-navbar | Boolean | false | \- | N
y-bounds | Array | - | Typescript：`Array<string \| number>` | N

### Fab Events

name | params | description
-- | -- | --
click | `({e: Event})` | \-
drag-end | `(e: TouchEvent)` | \-
drag-start | `(e: TouchEvent)` | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-fab-shadow | @shadow-2 | -