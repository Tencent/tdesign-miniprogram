:: BASE_DOC ::

## API

### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
arrow | Boolean | false | \- | N
help | String | - | \- | N
label | String | '' | \- | N
label-align | String | - | options: left/right/top | N
label-width | String / Number | - | \- | N
name | String | - | \- | N
required-mark | Boolean | undefined | \- | N
rules | Array | - | Typescript: `Array<FormRule> `，[Form API Documents](./form?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/form-item/type.ts) | N
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
--td-form-item-border-color | @component-stroke | -
--td-form-item-border-left-space | @form-item-vertical-padding | -
--td-form-item-border-right-space | 0 | -
--td-form-item-horizontal-padding | 32rpx | -
--td-form-item-vertical-padding | 32rpx | -
