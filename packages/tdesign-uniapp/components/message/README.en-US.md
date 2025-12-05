:: BASE_DOC ::

## API

### Message Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
action | String | - | `deprecated`。operation | N
align | String | left | options: left/center。Typescript：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
close-btn | String / Boolean / Object | false | \- | N
content | String | - | \- | N
duration | Number | 3000 | \- | N
gap | String / Number / Boolean | 12 | \- | N
icon | String / Boolean / Object | true | \- | N
link | String / Object | - | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| MessageMarquee` `interface MessageMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
offset | Array | - | Typescript：`Array<string \| number>` | N
single | Boolean | true | \- | N
theme | String | info | options: info/success/warning/error。Typescript：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
visible | Boolean | false | `v-model:visible` is supported | N
default-visible | Boolean | false | uncontrolled property | N
z-index | Number | 15000 | \- | N

### Message Events

name | params | description
-- | -- | --
action-btn-click | `(context: { e: MouseEvent })` | \-
close-btn-click | `(context: { e: MouseEvent })` | \-
duration-end | \- | \-
link-click | `(context: { e: MouseEvent })` | \-

### Message Slots

name | Description
-- | --
\- | \-
action | `deprecated`。operation
close-btn | \-
content | \-
icon | \-
link | \-

### Message External Classes

className | Description
-- | --
t-class | \-
t-class-close-btn | \-
t-class-content | \-
t-class-icon | \-
t-class-link | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-message-bg-color | @bg-color-container | - 
--td-message-border-radius | @radius-default | - 
--td-message-box-shadow | @shadow-4 | - 
--td-message-close-icon-color | @font-gray-3 | - 
--td-message-content-font-color | @font-gray-1 | - 
--td-message-error-color | @error-color | - 
--td-message-info-color | @brand-color | - 
--td-message-success-color | @success-color | - 
--td-message-warning-color | @warning-color | -