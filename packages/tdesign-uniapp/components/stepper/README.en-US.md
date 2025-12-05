:: BASE_DOC ::

## API

### Stepper Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
disable-input | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
input-width | Number | - | \- | N
integer | Boolean | true | \- | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
step | Number | 1 | \- | N
theme | String | normal | stylish。options: normal/filled/outline | N
value | String / Number | 0 | `v-model:value` is supported | N
default-value | String / Number | 0 | uncontrolled property | N

### Stepper Events

name | params | description
-- | -- | --
blur | `(context: { type: string \| number })` | \-
change | `(context: { value: string \| number })` | \-
focus | `(context: { value: string \| number })` | \-
overlimit | `(context: {type: 'minus' \| 'plus'})` | \-

### Stepper External Classes

className | Description
-- | --
t-class | \-
t-class-input | \-
t-class-minus | \-
t-class-plus | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-stepper-input-disabled-bg | @bg-color-component-disabled | - 
--td-stepper-input-disabled-color | @text-color-disabled | - 
--td-stepper-border-color | @component-border | - 
--td-stepper-border-radius | @radius-small | - 
--td-stepper-input-color | @text-color-primary | -