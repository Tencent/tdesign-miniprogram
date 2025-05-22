:: BASE_DOC ::

## API

### Result Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
description | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
icon | String / Boolean / Object | true | \- | N
image | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | default | options: default/success/warning/error | N
title | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
### Result External Classes

className | Description
-- | --
t-class | \-
t-class-description | \-
t-class-image | \-
t-class-title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-result-description-color | @font-gray-2 | - 
--td-result-description-font-size | @font-size-base | - 
--td-result-description-line-height | 44rpx | - 
--td-result-description-margin-top | @spacer | - 
--td-result-icon-default-color | @brand-color | - 
--td-result-icon-error-color | @error-color | - 
--td-result-icon-success-color | @success-color | - 
--td-result-icon-warning-color | @warning-color | - 
--td-result-title-color | @font-gray-1 | - 
--td-result-title-font-size | @font-size-l | - 
--td-result-title-line-height | 56rpx | - 
--td-result-title-margin-top | @spacer-1 | -