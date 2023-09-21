:: BASE_DOC ::

## API

### Input Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | left | options：left/center/right | N
layout | String | horizontal | options：vertical/horizontal | N
borderless | Boolean | true | \- | N
clearable | Boolean | false | \- | N
clear-trigger | String | always | options：always / focus | N
disabled | Boolean | - | \- | N
error-message | String | - | `deprecated` | N
external-classes | Array | - | `['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg']` | N
format | Function | - | Typescript：`InputFormatType` `type InputFormatType = (value: InputValue) => string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
label | String / Slot | - | \- | N
maxcharacter | Number | - | \- | N
maxlength | Number | - | \- | N
placeholder | String | undefined | \- | N
prefix-icon | String / Slot | - | \- | N
readonly | Boolean | false | \- | N
size | String | small | options：small/medium。Typescript：`'medium' \| 'small'` | N
status | String | default | options：default/success/warning/error | N
suffix | String / Slot | - | \- | N
suffix-icon | String / Slot | - | \- | N
tips | String / Slot | - | \- | N
value | String / Number | - | Typescript：`InputValue` `type InputValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`InputValue` `type InputValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
type | String | text | options：text/number/idcard/digit/safe-password/nickname | N
password | Boolean | false | \- | N
placeholder-style | String | - | required | Y
placeholder-class | String | input-placeholder | \- | N
cursor-spacing | Number | 0 | \- | N
auto-focus | Boolean | false | \- | N
focus | Boolean | false | \- | N
confirm-type | String | done | options：send/search/next/go/done | N
always-embed | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
cursor | Number | - | required | Y
selection-start | Number | -1 | \- | N
selection-end | Number | -1 | \- | N
adjust-position | Boolean | true | \- | N
hold-keyboard | Boolean | false | \- | N
safe-password-cert-path | String | - | \- | N
safe-password-length | Number | - | \- | N
safe-password-time-stamp | Number | - | \- | N
safe-password-nonce | String | - | \- | N
safe-password-salt | String | - | \- | N
safe-password-custom-hash | String | - | \- | N
### Input Events

name | params | description
-- | -- | --
blur | `(value: InputValue)` | \-
change | `(value: InputValue, cursor: number, keyCode: number)` | \-
clear | \- | \-
enter | `(value: InputValue)` | \-
focus | `(value: InputValue)` | \-
keyboardheightchange | `(height: number, duration: number)` | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-input-bg-color | @bg-color-container | - 
--td-input-border-color | @component-stroke | - 
--td-input-border-left-space | 32rpx | - 
--td-input-border-radius | @radius-default | - 
--td-input-border-right-space | 0 | - 
--td-input-default-text-color | @font-gray-1 | - 
--td-input-default-tips-color | @font-gray-3 | - 
--td-input-disabled-text-color | @text-color-disabled | - 
--td-input-error-text-color | @error-color | - 
--td-input-error-tips-color | @error-color | - 
--td-input-label-max-width | 5em | - 
--td-input-label-min-width | 2em | - 
--td-input-label-text-color | @font-gray-1 | - 
--td-input-placeholder-text-color | @text-color-placeholder | - 
--td-input-prefix-icon-color | @font-gray-1 | - 
--td-input-success-text-color | @success-color | - 
--td-input-success-tips-color | @success-color | - 
--td-input-suffix-icon-color | @font-gray-3 | - 
--td-input-suffix-text-color | @font-gray-1 | - 
--td-input-vertical-padding | 32rpx | - 
--td-input-warning-text-color | @warning-color | - 
--td-input-warning-tips-color | @warning-color | - 
