:: BASE_DOC ::

## API

### Popover Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
close-on-click-outside | Boolean | true | \- | N
content | String | - | \- | N
fixed | Boolean | false | `1.12.1` | N
placement | String | top | options: top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
show-arrow | Boolean | true | \- | N
theme | String | dark | options: dark/light/brand/success/warning/error | N
visible | Boolean | - | \- | N

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
--td-popover-bg-color | The background color corresponding to the popover theme | -
--td-popover-dark-color | @text-color-anti | -
--td-popover-dark-bg-color | @font-gray-1 | -
--td-popover-light-color | @text-color-primary | -
--td-popover-light-bg-color | @bg-color-container | -
--td-popover-brand-color | @primary-color-7 | -
--td-popover-brand-bg-color | @primary-color-1 | -
--td-popover-success-color | @success-color-5 | -
--td-popover-success-bg-color | @success-color-1 | -
--td-popover-warning-color | @warning-color-5 | -
--td-popover-warning-bg-color | @warning-color-1 | -
--td-popover-error-color | @error-color-6 | -
--td-popover-error-bg-color | @error-color-1 | -