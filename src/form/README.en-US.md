:: BASE_DOC ::

## API

### Form Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
colon | Boolean | false | whether to show colon after label | N
contentAlign | String | 'left' | form content alignment。options: left/right | N
data | Object | {} | form data | N
disabled | Boolean | undefined | whether to disable the entire form | N
errorMessage | Object | - | form error message configuration | N
labelAlign | String | 'left' | form field label alignment。options: left/right/top | N
labelWidth | String / Number | '81px' | can set label width globally | N
preventSubmitDefault | Boolean | true | whether to prevent form submit default event | N
requiredMark | Boolean | undefined | whether to show required mark (*) | N
resetType | String | 'empty' | form reset method。options: empty/initial | N
rules | Object | - | form field validation rules | N
scrollToFirstError | String | - | whether to auto scroll to first error field when validation fails。options: smooth/auto | N
showErrorMessage | Boolean | true | whether to show error message when validation fails | N
submitWithWarningMessage | Boolean | false | whether to trigger submit event when validation result only has warning message | N

### Form Events

name | params | description
-- | -- | --
submit | `(context: SubmitContext)` | trigger on form submit
reset | `(context: { e?: FormResetEvent })` | trigger on form reset
validate | `(result: ValidateResultContext)` | trigger after validation

### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
arrow | Boolean | false | whether to show right arrow | N
contentAlign | String | 'left' | form content alignment。options: left/right | N
for | String | - | label native attribute | N
help | String | - | form item help content | N
label | String | '' | field label name | N
labelAlign | String | - | form field label alignment。options: left/right/top | N
labelWidth | String / Number | - | can set label width globally | N
name | String / Number | - | form field name | N
requiredMark | Boolean | undefined | whether to show required mark (*) | N
rules | Array | - | form field validation rules | N
showErrorMessage | Boolean | undefined | whether to show error message when validation fails | N

### Validation Rules

name | type | description
-- | -- | --
required | Boolean | required validation
email | Boolean | email validation
telnumber | Boolean | phone number validation
idcard | Boolean | ID card validation
number | Boolean | number validation
boolean | Boolean | boolean validation
url | Boolean | URL validation
date | Boolean | date validation
whitespace | Boolean | whitespace validation
len | Number | length validation
min | Number | minimum length validation
max | Number | maximum length validation
enum | Array | enum validation
pattern | RegExp | regex validation
validator | Function | custom validation

### Component Instance Methods

name | params | return | description
-- | -- | -- | --
validate | `(params?: FormValidateParams)` | `Promise<FormValidateResult>` | validation function
validateOnly | `(params?: Pick<FormValidateParams, 'fields' \| 'trigger'>)` | `Promise<FormValidateResult>` | pure validation function
submit | `(params?: { showErrorMessage?: boolean })` | - | submit form
reset | `(params?: FormResetParams)` | - | reset form
clearValidate | `(fields?: Array<string>)` | - | clear validation result
setValidateMessage | `(message: FormValidateMessage)` | - | set custom validation result

### Form External Classes

className | Description
-- | --
t-class | -

### FormItem External Classes

className | Description
-- | --
t-class | -
t-class-label | -
t-class-help | -
t-class-error | -

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.

Name | Default Value | Description
-- | -- | --
--td-form-bg-color | @bg-color-container | -
--td-form-border-color | @component-stroke | -
--td-form-border-radius | @radius-default | -
--td-form-item-border-color | @component-stroke | -
--td-form-item-border-width | 1rpx | -
--td-form-item-padding | 32rpx | -
--td-form-label-color | @text-color-primary | -
--td-form-label-font-size | @font-size-m | -
--td-form-label-font-weight | 400 | -
--td-form-label-line-height | 48rpx | -
--td-form-label-min-width | 2em | -
--td-form-label-max-width | 5em | -
--td-form-required-color | @error-color | -
--td-form-help-color | @text-color-placeholder | -
--td-form-help-font-size | @font-size-s | -
--td-form-error-color | @error-color | -
--td-form-error-font-size | @font-size-s | -
--td-form-colon-color | @text-color-primary | -
--td-form-colon-margin-left | 4rpx | -
--td-form-colon-margin-right | 8rpx | - 