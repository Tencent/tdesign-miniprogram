:: BASE_DOC ::

## API

### BackTop Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
fixed | Boolean | true | \- | N
icon | String / Boolean / Object / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
scroll-top | Number | 0 | \- | N
text | String | '' | \- | N
theme | String | round | options: round/half-round/round-dark/half-round-dark | N
visibility-height | Number | 200 | \- | N

### BackTop Events

name | params | description
-- | -- | --
to-top | \- | \-
### BackTop External Classes

className | Description
-- | --
t-class | \-
t-class-icon | \-
t-class-text | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-back-top-round-bg-color | @font-white-1 | - 
--td-back-top-round-border-color | @component-border | - 
--td-back-top-round-border-radius | @radius-circle | - 
--td-back-top-round-color | @font-gray-1 | - 
--td-back-top-round-dark-bg-color | @gray-color-14 | - 
--td-back-top-round-dark-color | @font-white-1 | -