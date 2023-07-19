:: BASE_DOC ::

## API

### Stepper Props

name | type | default | description | required
-- | -- | -- | -- | --
disable-input | Boolean | false | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class', 't-class-input', 't-class-add', 't-class-minus']` | N
input-width | Number | - | \- | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
step | Number | 1 | \- | N
theme | String | normal | stylish。options：normal/grey | N
value | String / Number | 0 | \- | N
default-value | String / Number | undefined | uncontrolled property | N

### Stepper Events

name | params | description
-- | -- | --
blur | `({ type: string \| number })` | \-
change | `({ value: string \| number })` | \-
overlimit | `({type: 'minus' \| 'plus'})` | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-stepper-border-color | @component-border | - 
--td-stepper-border-radius | @radius-small | - 
--td-stepper-input-color | @font-gray-1 | - 
--td-stepper-input-disabled-color | @font-gray-4 | - 
