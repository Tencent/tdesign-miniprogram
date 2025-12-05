:: BASE_DOC ::

## API

### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
check-strictly | Boolean | false | \- | N
close-btn | Boolean | true | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
options | Array | [] | Typescript：`Array<CascaderOption>` | N
placeholder | String | 选择选项 | \- | N
sub-titles | Array | [] | Typescript：`Array<string>` | N
theme | String | step | options: step/tab | N
title | String | - | \- | N
value | String / Number | - | `v-model:value` is supported | N
default-value | String / Number | - | uncontrolled property | N
visible | Boolean | false | \- | N

### Cascader Events

name | params | description
-- | -- | --
change | `(context: { value: string \| number, selectedOptions: string[] })` | \-
close | `(context: { trigger: CascaderTriggerSource })` | [see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(context: { value: string \| number, label: string, index: number, level: number })` | \-

### Cascader Slots

name | Description
-- | --
close-btn | \-
header | \-
middle-content | \-
title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-cascader-active-color | @brand-color | - 
--td-cascader-bg-color | @bg-color-container | - 
--td-cascader-border-color | @component-stroke | - 
--td-cascader-content-height | 78vh | - 
--td-cascader-disabled-color | @text-color-disabled | - 
--td-cascader-options-height | calc(100% - @cascader-step-height) | - 
--td-cascader-options-title-color | @text-color-placeholder | - 
--td-cascader-step-arrow-color | @text-color-placeholder | - 
--td-cascader-step-dot-size | 16rpx | - 
--td-cascader-step-height | 88rpx | - 
--td-cascader-title-color | @text-color-primary | - 
--td-cascader-title-height | 26rpx | - 
--td-cascader-title-padding | @spacer-2 | - 
--td-cascader-title-font-size | 36rpx | -