:: BASE_DOC ::

## API

### Textarea Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
adjust-position | Boolean | true | \- | N
autofocus | Boolean | false | \- | N
autosize | Boolean / Object | false | Typescript：`boolean \| { maxHeight?: number, minHeight?: number }` | N
bordered | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | return | options: return/send/search/next/go/done。Typescript：`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor | Number | -1 | \- | N
cursor-spacing | Number | 0 | \- | N
disable-default-padding | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
fixed | Boolean | false | \- | N
focus | Boolean | false | \- | N
hold-keyboard | Boolean | false | \- | N
indicator | Boolean | false | \- | N
label | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
maxcharacter | Number | - | \- | N
maxlength | Number | -1 | \- | N
placeholder | String | undefined | \- | N
placeholder-style | String | - | \- | N
selection-end | Number | -1 | \- | N
selection-start | Number | -1 | \- | N
show-confirm-bar | Boolean | true | \- | N
value | String / Number | - | Typescript：`TextareaValue` `type TextareaValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/textarea/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`TextareaValue` `type TextareaValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/textarea/type.ts) | N

### Textarea Events

name | params | description
-- | -- | --
blur | `(value: TextareaValue, cursor: number)` | \-
change | `(value: TextareaValue, cursor: number)` | \-
enter | `(value: TextareaValue)` | \-
focus | `(value: TextareaValue)` | \-
keyboardheightchange | `(height: number, duration: number)` | \-
line-change | `(value: TextareaValue)` | \-
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
--td-textarea-border-color | rgba(220, 220, 220, 1) | -
--td-textarea-border-radius | @radius-default | -
--td-textarea-disabled-text-color | @font-gray-4 | -
--td-textarea-indicator-text-color | @font-gray-3 | -
--td-textarea-label-color | @font-gray-1 | -
--td-textarea-placeholder-color | @font-gray-3 | -
--td-textarea-text-color | @font-gray-1 | -