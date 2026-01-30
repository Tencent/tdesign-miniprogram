:: BASE_DOC ::

## API

### Fab Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
button-props | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/fab/type.ts) | N
draggable | String / Boolean | false | Typescript：`boolean \| FabDirectionEnum ` `type FabDirectionEnum = 'all' \| 'vertical' \| 'horizontal'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/fab/type.ts) | N
icon | String | - | \- | N
style | String | right: 16px; bottom: 32px; | \- | N
text | String | - | \- | N
using-custom-navbar | Boolean | false | \- | N
y-bounds | Array | - | Typescript：`Array<string \| number>` | N

### Fab Events

name | params | description
-- | -- | --
click | `(context: {e: Event})` | \-
drag-end | `(context: { e: TouchEvent })` | \-
drag-start | `(context: { e: TouchEvent })` | \-

### Fab Slots

name | Description
-- | --
\- | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-fab-shadow | @shadow-2 | -
