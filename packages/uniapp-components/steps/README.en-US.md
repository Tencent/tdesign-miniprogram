:: BASE_DOC ::

## API

### Steps Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
current | String / Number | - | `v-model:current` is supported | N
default-current | String / Number | - | uncontrolled property | N
current-status | String | process | options: default/process/finish/error | N
layout | String | horizontal | options: horizontal/vertical | N
readonly | Boolean | undefined | \- | N
sequence | String | positive | options: positive/reverse | N
theme | String | default | options: default/dot | N

### Steps Events

name | params | description
-- | -- | --
change | `(context: {current: string \| number, previous: string \| number})` | \-

### Steps Slots

name | Description
-- | --
\- | \-

### Steps External Classes

className | Description
-- | --
t-class | \-


### StepItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | '' | \- | N
extra | String | - | \- | N
icon | String | - | \- | N
status | String | default | options: default/process/finish/error。Typescript：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/step-item/type.ts) | N
sub-step-items | Array | [] | `deprecated`。Typescript：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/step-item/type.ts) | N
title | String | '' | \- | N

### StepItem Slots

name | Description
-- | --
\- | \-
content | \-
extra | \-
icon | \-
title | \-

### StepItem External Classes

className | Description
-- | --
t-class | class name of root node
t-class-content | \-
t-class-description | \-
t-class-extra | \-
t-class-title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-step-item-circle-font-size | 28rpx | - 
--td-step-item-circle-size | 44rpx | - 
--td-step-item-default-circle-bg | @bg-color-secondarycontainer | - 
--td-step-item-default-circle-color | @text-color-placeholder | - 
--td-step-item-default-dot-border-color | @component-border | - 
--td-step-item-default-icon-color | @text-color-placeholder | - 
--td-step-item-default-title-color | @text-color-placeholder | - 
--td-step-item-description-color | @text-color-placeholder | - 
--td-step-item-dot-size | 16rpx | - 
--td-step-item-error-circle-bg | @error-color-1 | - 
--td-step-item-error-circle-color | @error-color | - 
--td-step-item-error-dot-border-color | @error-color | - 
--td-step-item-error-icon-color | @error-color | - 
--td-step-item-error-title-color | @error-color | - 
--td-step-item-finish-circle-bg | @brand-color-light | - 
--td-step-item-finish-circle-color | @brand-color | - 
--td-step-item-finish-dot-border-color | @brand-color | - 
--td-step-item-finish-icon-color | @brand-color | - 
--td-step-item-finish-line-color | @brand-color | - 
--td-step-item-finish-title-color | @text-color-primary | - 
--td-step-item-line-color | @component-border | - 
--td-step-item-process-circle-bg | @brand-color | - 
--td-step-item-process-circle-color | @text-color-anti | - 
--td-step-item-process-dot-border-color | @brand-color | - 
--td-step-item-process-icon-color | @brand-color | - 
--td-step-item-process-title-color | @brand-color | -