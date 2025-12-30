:: BASE_DOC ::

## API

### Collapse Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
default-expand-all | Boolean | false | \- | N
disabled | Boolean | - | \- | N
expand-icon | Boolean | true | \- | N
expand-mutex | Boolean | false | \- | N
theme | String | default | options: default/card | N
value | Array | - | `v-model:value` is supported。Typescript：`CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N
default-value | Array | - | uncontrolled property。Typescript：`CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N

### Collapse Events

name | params | description
-- | -- | --
change | `(context: { value: CollapseValue, context: { e: MouseEvent }})` | \-

### Collapse Slots

name | Description
-- | --
\- | \-


### CollapsePanel Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | \- | N
disabled | Boolean | undefined | \- | N
expand-icon | Boolean | undefined | \- | N
header | String | - | \- | N
header-left-icon | String | - | \- | N
header-right-content | String | - | \- | N
placement | String | bottom | options: bottom/top | N
value | String / Number | - | \- | N

### CollapsePanel Slots

name | Description
-- | --
\- | \-
content | \-
expand-icon | \-
header | \-
header-left-icon | \-
header-right-content | \-

### CollapsePanel External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-header | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-collapse-border-color | @border-level-1-color | - 
--td-collapse-content-font-size | @font-size-base | - 
--td-collapse-content-line-height | 1.5 | - 
--td-collapse-content-padding | 32rpx | - 
--td-collapse-content-text-color | @text-color-primary | - 
--td-collapse-extra-font-size | @font-size-m | - 
--td-collapse-header-height | auto | - 
--td-collapse-header-text-color | @text-color-primary | - 
--td-collapse-header-text-disabled-color | @text-color-disabled | - 
--td-collapse-horizontal-padding | 32rpx | - 
--td-collapse-icon-color | @font-gray-3 | - 
--td-collapse-panel-bg-color | @bg-color-container | - 
--td-collapse-title-font-size | @font-size-m | -