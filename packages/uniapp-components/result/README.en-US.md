:: BASE_DOC ::

## API

### Result Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
description | String | - | \- | N
icon | String / Boolean / Object | true | \- | N
image | String | - | \- | N
theme | String | default | options: default/success/warning/error | N
title | String | '' | \- | N

### Result Slots

name | Description
-- | --
description | \-
image | \-
title | \-

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
--td-result-description-color | @text-color-secondary | - 
--td-result-description-font-size | @font-size-base | - 
--td-result-description-line-height | 44rpx | - 
--td-result-description-margin-top | @spacer | - 
--td-result-icon-default-color | @brand-color | - 
--td-result-icon-error-color | @error-color | - 
--td-result-icon-success-color | @success-color | - 
--td-result-icon-warning-color | @warning-color | - 
--td-result-title-color | @text-color-primary | - 
--td-result-title-font-size | @font-size-xl | - 
--td-result-title-line-height | 56rpx | - 
--td-result-title-margin-top | @spacer-1 | -