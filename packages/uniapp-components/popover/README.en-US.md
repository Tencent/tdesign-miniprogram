:: BASE_DOC ::

## API

### Popover Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
close-on-click-outside | Boolean | true | \- | N
content | String | - | \- | N
fixed | Boolean | false | \- | N
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
--td-popover-brand-bg-color | @primary-color-1 | -
--td-popover-brand-color | @primary-color-7 | -
--td-popover-dark-bg-color | @font-gray-1 | -
--td-popover-dark-color | @text-color-anti | -
--td-popover-error-bg-color | @error-color-1 | -
--td-popover-error-color | @error-color-6 | -
--td-popover-light-bg-color | @bg-color-container | -
--td-popover-light-color | @text-color-primary | -
--td-popover-padding | 24rpx | -
--td-popover-success-bg-color | @success-color-1 | -
--td-popover-success-color | @success-color-5 | -
--td-popover-warning-bg-color | @warning-color-1 | -
--td-popover-warning-color | @warning-color-5 | -
