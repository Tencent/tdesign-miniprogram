:: BASE_DOC ::

## API

### Textarea Props

name | type | default | description | required
-- | -- | -- | -- | --
adjust-position | Boolean | true | \- | N
autofocus | Boolean | false | \- | N
autosize | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | return | options：return/send/search/next/go/done。Typescript：`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor-spacing | Number | 0 | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class', 't-class-textarea', 't-class-label']` | N
focus | Boolean | false | \- | N
label | String / Slot | - | \- | N
maxcharacter | Number | - | \- | N
maxlength | Number | - | \- | N
placeholder | String | undefined | \- | N
value | String | null | \- | N
default-value | String | '' | uncontrolled property | N

### Textarea Events

name | params | description
-- | -- | --
blur | `(value: TextareaValue, cursor: number)` | \-
change | `(value: TextareaValue, cursor: number)` | \-
enter | `(value: TextareaValue)` | \-
focus | `(value: TextareaValue)` | \-
line-change | `(value: TextareaValue)` | \-

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
