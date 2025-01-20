:: BASE_DOC ::

## API

### Input Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
adjust-position | Boolean | true | \- | N
align | String | left | text align type。options: left/center/right | N
allow-input-over-max | Boolean | false | allow to continue input on value length is over `maxlength` or `maxcharacter` | N
always-embed | Boolean | false | \- | N
auto-focus | Boolean | false | \- | N
borderless | Boolean | false | input without border | N
clear-trigger | String | always | show clear icon, clicked to clear input value。options: always / focus | N
clearable | Boolean / Object | false | show clear icon, clicked to clear input value | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | done | options: send/search/next/go/done | N
cursor | Number | - | required | Y
cursor-color | String | #0052d9 | \- | N
cursor-spacing | Number | 0 | \- | N
disabled | Boolean | undefined | make input to be disabled | N
error-message | String | - | `deprecated` | N
focus | Boolean | false | \- | N
format | Function | - | input value formatter, `type=number` does not work. if you need to format number, `InputNumber` Component might be better。Typescript：`InputFormatType` `type InputFormatType = (value: InputValue) => string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
hold-keyboard | Boolean | false | \- | N
label | String / Slot | - | text on the left of input。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
layout | String | horizontal | options: vertical/horizontal | N
maxcharacter | Number | - | \- | N
maxlength | Number | -1 | \- | N
password | Boolean | false | `deprecated` | N
placeholder | String | undefined | \- | N
placeholder-class | String | input-placeholder | \- | N
placeholder-style | String | - | required | Y
prefix-icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
readonly | Boolean | undefined | \- | N
safe-password-cert-path | String | - | \- | N
safe-password-custom-hash | String | - | \- | N
safe-password-length | Number | - | \- | N
safe-password-nonce | String | - | \- | N
safe-password-salt | String | - | \- | N
safe-password-time-stamp | Number | - | \- | N
selection-end | Number | -1 | \- | N
selection-start | Number | -1 | \- | N
size | String | medium | `deprecated`。options: small/medium。Typescript：`'medium' \| 'small'` | N
status | String | default | options: default/success/warning/error | N
suffix | String / Slot | - | suffix content before suffixIcon。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
suffix-icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
tips | String / Slot | - | tips on the bottom of input, different `status` can make tips to be different color。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
type | String | text | options: text/number/idcard/digit/safe-password/password/nickname | N
value | String / Number | - | input value。Typescript：`InputValue` `type InputValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | input value。uncontrolled property。Typescript：`InputValue` `type InputValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N

### Input Events

name | params | description
-- | -- | --
blur | `(value: InputValue)` | \-
change | `(value: InputValue, cursor: number, keyCode: number)` | \-
clear | \- | \-
click | `(trigger: InputTrigger)` | `0.32.0`
enter | `(value: InputValue)` | \-
focus | `(value: InputValue)` | \-
keyboardheightchange | `(height: number, duration: number)` | \-
nicknamereview | `(pass: boolean, timeout: boolean)` | \-
validate | `(detail: { error?: 'exceed-maximum' \| 'below-minimum' })` | trigger on text length being over max length or max character

### Input External Classes

className | Description
-- | --
t-class | \-
t-class-clearable | \-
t-class-input | \-
t-class-label | \-
t-class-prefix-icon | \-
t-class-suffix | \-
t-class-suffix-icon | \-
t-class-tips | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-input-align-items | center | - 
--td-input-bg-color | @bg-color-container | - 
--td-input-border-color | @component-stroke | - 
--td-input-border-left-space | 32rpx | - 
--td-input-border-right-space | 0 | - 
--td-input-default-text-color | @text-color-primary | - 
--td-input-default-tips-color | @text-color-placeholder | - 
--td-input-disabled-text-color | @text-color-disabled | - 
--td-input-error-text-color | @error-color | - 
--td-input-error-tips-color | @error-color | - 
--td-input-label-max-width | 5em | - 
--td-input-label-min-width | 2em | - 
--td-input-label-text-color | @text-color-primary | - 
--td-input-placeholder-text-color | @text-color-placeholder | - 
--td-input-placeholder-text-font-size | @font-size-m | - 
--td-input-prefix-icon-color | @text-color-primary | - 
--td-input-success-text-color | @success-color | - 
--td-input-success-tips-color | @success-color | - 
--td-input-suffix-icon-color | @text-color-placeholder | - 
--td-input-suffix-text-color | @text-color-primary | - 
--td-input-vertical-padding | 32rpx | - 
--td-input-warning-text-color | @warning-color | - 
--td-input-warning-tips-color | @warning-color | -