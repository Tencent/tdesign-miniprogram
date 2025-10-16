:: BASE_DOC ::

## API

### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
arrow | Boolean | false | \- | N
for | String | - | \- | N
help | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
label | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
label-align | String | - | options: left/right/top | N
label-width | String / Number | - | \- | N
name | String | - | \- | N
required-mark | Boolean | undefined | \- | N
rules | Array | - | Typescript：`Array<FormRule>` | N
show-error-message | Boolean | undefined | \- | N

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-form-item-horizontal-padding | 32rpx | - 
--td-form-item-justify-content | space-between | - 
--td-form-item-label-width | 160rpx | - 
--td-form-item-vertical-padding | 32rpx | -