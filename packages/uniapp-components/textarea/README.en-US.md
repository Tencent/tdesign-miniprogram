:: BASE_DOC ::

## API

### Textarea Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
adjust-position | Boolean | true | \- | N
allow-input-over-max | Boolean | false | Allow input after exceeding `maxlength` or `maxcharacter` | N
autofocus | Boolean | false | \- | N
autosize | Boolean / Object | false | Typescript：`boolean \| { maxHeight?: number, minHeight?: number }` | N
bordered | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | return | options: return/send/search/next/go/done。Typescript：`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor | Number | -1 | \- | N
cursor-color | String | #0052d9 | \- | N
cursor-spacing | Number | 0 | \- | N
disable-default-padding | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
fixed | Boolean | false | \- | N
focus | Boolean | false | \- | N
hold-keyboard | Boolean | false | \- | N
indicator | Boolean | false | \- | N
label | String | - | \- | N
maxcharacter | Number | - | \- | N
maxlength | Number | -1 | \- | N
placeholder | String | undefined | \- | N
placeholder-class | String | textarea-placeholder | \- | N
placeholder-style | String | - | \- | N
readonly | Boolean | undefined | \- | N
selection-end | Number | -1 | \- | N
selection-start | Number | -1 | \- | N
show-confirm-bar | Boolean | true | \- | N
value | String / Number | - | `v-model:value` is supported。Typescript：`TextareaValue` `type TextareaValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/textarea/type.ts) | N
default-value | String / Number | - | uncontrolled property。Typescript：`TextareaValue` `type TextareaValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/textarea/type.ts) | N

### Textarea Events

name | params | description
-- | -- | --
blur | `(context: { value: TextareaValue, cursor: number })` | \-
change | `(context: { value: TextareaValue, cursor: number })` | \-
enter | `(context: { value: TextareaValue })` | \-
focus | `(context: { value: TextareaValue })` | \-
keyboardheightchange | `(context: { height: number, duration: number })` | \-
line-change | `(context: { value: TextareaValue })` | \-

### Textarea Slots

name | Description
-- | --
label | \-

### Textarea External Classes

className | Description
-- | --
t-class | \-
t-class-indicator | \-
t-class-label | \-
t-class-textarea | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-textarea-background-color | @bg-color-container | -
--td-textarea-border-color | @component-border | -
--td-textarea-border-radius | @radius-default | -
--td-textarea-disabled-text-color | @text-color-disabled | -
--td-textarea-indicator-text-color | @text-color-placeholder | -
--td-textarea-label-color | @text-color-primary | -
--td-textarea-padding | 32rpx | -
--td-textarea-placeholder-color | @text-color-placeholder | -
--td-textarea-text-color | @text-color-primary | -
