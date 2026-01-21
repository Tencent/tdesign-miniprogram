:: BASE_DOC ::

## API

### Popover Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
close-on-click-outside | Boolean | true | \- | N
content | String | - | \- | N
placement | String | top | options: top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
show-arrow | Boolean | true | \- | N
theme | String | dark | options: dark/light/brand/success/warning/error | N
visible | Boolean | undefined | `v-model:visible` is supported | N

### Popover Events

name | params | description
-- | -- | --
visible-change | `(visible: boolean)` | \-

### Popover Slots

name | Description
-- | --
\- | \-
content | \-

### Popover External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-popover-padding | 24rpx | -
