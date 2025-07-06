:: BASE_DOC ::

## API

### Stepper Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
disable-input | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
input-width | Number | - | \- | N
integer | Boolean | true | \- | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
step | Number | 1 | \- | N
theme | String | normal | stylish。options: normal/filled/outline | N
value | String / Number | 0 | \- | N
default-value | String / Number | undefined | uncontrolled property | N

### Stepper Events

name | params | description
-- | -- | --
blur | `({ type: string \| number })` | \-
change | `({ value: string \| number })` | \-
focus | `({ value: string \| number }))` | \-
overlimit | `({type: 'minus' \| 'plus'})` | \-

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
--td-stepper-border-color | @component-border | - 
--td-stepper-border-radius | @radius-small | - 
--td-stepper-input-color | @font-gray-1 | - 
--td-stepper-input-disabled-color | @font-gray-4 | -