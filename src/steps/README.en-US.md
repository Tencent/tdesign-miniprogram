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
separator | String | line | options：line/dashed/arrow | N
style | String | - | \- | N
theme | String | default | options：default/dot | N

### Steps Events

name | params | description
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | \-

### StepItem Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Slot | '' | \- | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra']` | N
icon | String / Slot | - | \- | N
status | String | default | options：default/process/finish/error。Typescript：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/step-item/type.ts) | N
style | String | - | \- | N
sub-step-items | Array | [] | Typescript：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/step-item/type.ts) | N
title | String / Slot | '' | \- | N
