:: BASE_DOC ::

## API
### Message Props

name | type | default | description | required
-- | -- | -- | -- | --
action | String / Slot | - | operation | N
align | String | left | options：left/center。Typescript：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
close-btn | String / Boolean / Object / Slot | false | \- | N
content | String / Slot | - | \- | N
duration | Number | 3000 | \- | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-icon', 't-class-link', 't-class-close-btn']` | N
icon | String / Boolean / Object/ Slot | true | Typescript：`boolean \| 'info' \| 'bell'` | N
marquee | Boolean / Object | false | Typescript：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
offset | Array | - | Typescript：`Array<string \| number>` | N
theme | String | info | options：info/success/warning/error。Typescript：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
visible | Boolean | false | \- | N
default-visible | Boolean | false | uncontrolled property | N
z-index | Number | 15000 | \- | N

### Message Events

name | params | description
-- | -- | --
action-btn-click | - | \-
close-btn-click | - | \-
duration-end | \- | \-
link-click | \- | \-


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
