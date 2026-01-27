---
title: Form
description: Form consists of input, radio, select, checkbox and so on. With form, you can collect, verify and submit data.
spline: base
isComponent: true
toc: false
---

### 01 Component Type

Base form

{{ horizontal }}

{{ vertical }}

## API

### Form Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
colon | Boolean | false | \- | N
content-align | String | left | options: left/right | N
data | Object | {} | Typescript: `FormData` | N
disabled | Boolean | undefined | \- | N
error-message | Object | - | Typescript: `FormErrorMessage` | N
label-align | String | right | options: left/right/top | N
label-width | String / Number | '81px' | \- | N
readonly | Boolean | undefined | \- | N
required-mark | Boolean | undefined | \- | N
required-mark-position | String | - | Display position of required symbols。options: left/right | N
reset-type | String | empty | options: empty/initial | N
rules | Object | - | Typescript: `FormRules<FormData>` `type FormRules<T extends Data = any> = { [field in keyof T]?: Array<FormRule> }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts) | N
scroll-to-first-error | String | - | options: ''/smooth/auto | N
show-error-message | Boolean | true | \- | N
submit-with-warning-message | Boolean | false | \- | N

### Form Events

name | params | description
-- | -- | --
reset | `(context: { e?: FormResetEvent })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts)
submit | `(context: SubmitContext<FormData>)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts)。<br/>`interface SubmitContext<T extends Data = Data> { e?: FormSubmitEvent; validateResult: FormValidateResult<T>; firstError?: string; fields?: any }`<br/><br/>`type FormValidateResult<T> = boolean \| ValidateResultObj<T>`<br/><br/>`type ValidateResultObj<T> = { [key in keyof T]: boolean \| ValidateResultList }`<br/><br/>`type ValidateResultList = Array<AllValidateResult>`<br/><br/>`type AllValidateResult = CustomValidateObj \| ValidateResultType`<br/><br/>`interface ValidateResultType extends FormRule { result: boolean }`<br/><br/>`type ValidateResult<T> = { [key in keyof T]: boolean \| ErrorList }`<br/><br/>`type ErrorList = Array<FormRule>`<br/>
validate | `(result: ValidateResultContext<FormData>)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts)。<br/>`type ValidateResultContext<T extends Data> = Omit<SubmitContext<T>, 'e'>`<br/>

### FormInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
clear-validate | `(fields?: Array<keyof FormData>)` | \- | required
reset | `(params?: FormResetParams<FormData>)` | \- | required。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts)。<br/>`interface FormResetParams<FormData> { type?: 'initial' \| 'empty'; fields?: Array<keyof FormData> }`<br/>
set-validate-message | `(message: FormValidateMessage<FormData>)` | \- | required。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts)。<br/>`type FormValidateMessage<FormData> = { [field in keyof FormData]: FormItemValidateMessage[] }`<br/><br/>`interface FormItemValidateMessage { type: 'warning' \| 'error'; message: string }`<br/>
submit | `(params?: { showErrorMessage?: boolean })` | \- | required
validate | `(params?: FormValidateParams)` | `Promise<FormValidateResult<FormData>>` | required。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts)。<br/>`interface FormValidateParams { fields?: Array<string>; showErrorMessage?: boolean; trigger?: ValidateTriggerType }`<br/><br/>`type ValidateTriggerType = 'blur' \| 'change' \| 'submit' \| 'all'`<br/>


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

### FormRule

name | type | default | description | required
-- | -- | -- | -- | --
boolean | Boolean | - | \- | N
date | Boolean / Object | - | Typescript: `boolean \| IsDateOptions` `interface IsDateOptions { format: string; strictMode: boolean; delimiters: string[] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts) | N
email | Boolean / Object | - | Typescript: `boolean \| IsEmailOptions` `import type { IsEmailOptions } from '../common/common'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts) | N
enum | Array | - | Typescript: `Array<string>` | N
idcard | Boolean | - | \- | N
len | Number / Boolean | - | \- | N
max | Number / Boolean | - | \- | N
message | String | - | \- | N
min | Number / Boolean | - | \- | N
number | Boolean | - | \- | N
pattern | String / Object | - | Typescript: `RegExp \| string` | N
required | Boolean | - | \- | N
telnumber | Boolean | - | \- | N
trigger | String | change | Typescript: `ValidateTriggerType` | N
type | String | error | options: error/warning | N
url | Boolean / Object | - | Typescript: `boolean \| IsURLOptions` `import type { IsURLOptions } from '../common/common'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts) | N
validator | Function | - | Typescript: `CustomValidator` `type CustomValidator = (val: ValueType) => CustomValidateResolveType \| Promise<CustomValidateResolveType>` `type CustomValidateResolveType = boolean \| CustomValidateObj` `interface CustomValidateObj { result: boolean; message: string; type?: 'error' \| 'warning' \| 'success' }` `type ValueType = any`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/form/type.ts) | N
whitespace | Boolean | - | \- | N

### FormErrorMessage

name | type | default | description | required
-- | -- | -- | -- | --
boolean | String | - | \- | N
date | String | - | \- | N
enum | String | - | \- | N
idcard | String | - | \- | N
len | String | - | \- | N
max | String | - | \- | N
min | String | - | \- | N
number | String | - | \- | N
pattern | String | - | \- | N
required | String | - | \- | N
telnumber | String | - | \- | N
url | String | - | \- | N
validator | String | - | \- | N
whitespace | String | - | \- | N

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-form-bg-color | @bg-color-container | -
--td-form-border-radius | 0 | -
--td-form-padding | 0 | -
--td-form-readonly-bg-color | @bg-color-secondarycontainer | -
--td-form-item-horizontal-padding | 32rpx | -
--td-form-item-justify-content | space-between | -
--td-form-item-label-width | 160rpx | -
--td-form-item-vertical-padding | 32rpx | -
