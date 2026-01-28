:: BASE_DOC ::

## API

### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
arrow | Boolean | false | \- | N
content-align | String | - | options: left/right | N
for | String | - | \- | N
help | String | - | \- | N
label | String | '' | \- | N
label-align | String | - | options: left/right/top | N
label-width | String / Number | - | \- | N
name | String | - | \- | N
required-mark | Boolean | undefined | \- | N
rules | Array | - | Typescript: `Array<FormRule>` | N
show-error-message | Boolean | undefined | \- | N

### FormItem Slots

name | Description
-- | --
help | \-
label | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-form-item-horizontal-padding | 32rpx | -
--td-form-item-justify-content | space-between | -
--td-form-item-label-width | 160rpx | -
--td-form-item-vertical-padding | 32rpx | -
