:: BASE_DOC ::

## API
### Steps Props

name | type | default | description | required
-- | -- | -- | -- | --
current | String / Number | - | \- | N
default-current | String / Number | undefined | uncontrolled property | N
current-status | String | process | options：default/process/finish/error | N
external-classes | Array | - | `['t-class']` | N
layout | String | horizontal | options：horizontal/vertical | N
readonly | Boolean | false | \- | N
sequence | String | positive | options：positive/reverse | N
theme | String | default | options：default/dot | N

### Steps Events

name | params | description
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | \-

### StepItem Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra']` | N
icon | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
status | String | default | options：default/process/finish/error。Typescript：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/step-item/type.ts) | N
sub-step-items | Array | [] | `deprecated`。Typescript：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/step-item/type.ts) | N
title | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-step-item-circle-font-size | 28rpx | - 
--td-step-item-circle-size | 44rpx | - 
--td-step-item-default-circle-bg | @bg-color-secondarycontainer | - 
--td-step-item-default-circle-color | @font-gray-3 | - 
--td-step-item-default-dot-border-color | @component-border | - 
--td-step-item-default-icon-color | @font-gray-3 | - 
--td-step-item-default-title-color | @font-gray-3 | - 
--td-step-item-description-color | @font-gray-3 | - 
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
--td-step-item-finish-title-color | @font-gray-1 | - 
--td-step-item-line-color | @component-border | - 
--td-step-item-process-circle-bg | @brand-color | - 
--td-step-item-process-circle-color | @font-white-1 | - 
--td-step-item-process-dot-border-color | @brand-color | - 
--td-step-item-process-icon-color | @brand-color | - 
--td-step-item-process-title-color | @brand-color | - 
