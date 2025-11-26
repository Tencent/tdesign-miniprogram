:: BASE_DOC ::

## API

### Checkbox Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
block | Boolean | true | \- | N
borderless | Boolean | undefined | \- | N
check-all | Boolean | false | \- | N
checked | Boolean | false | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
content | String | - | \- | N
content-disabled | Boolean | - | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'rectangle' \| string[]` | N
indeterminate | Boolean | false | \- | N
label | String | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | left | options: left/right | N
readonly | Boolean | undefined | \- | N
value | String / Number / Boolean | - | value of checkbox。Typescript：`string \| number \| boolean` | N

### Checkbox Events

name | params | description
-- | -- | --
change | `(checked: boolean, context: { value: boolean\|number\|string, label: boolean\|number\|string })` | \-

### Checkbox Slots

name | Description
-- | --
\- | \-
content | \-
label | \-

### Checkbox External Classes

className | Description
-- | --
t-class | \-
t-class-border | \-
t-class-content | \-
t-class-icon | \-
t-class-label | \-


### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
borderless | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | [] | Typescript：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts) | N
readonly | Boolean | undefined | \- | N
value | Array | [] | Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts) | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(value: CheckboxGroupValue, context: { value: boolean\|number\|string, label: boolean\|number\|string })` | \-

### CheckboxGroup Slots

name | Description
-- | --
\- | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-checkbox-bg-color | @bg-color-container | - 
--td-checkbox-border-color | @component-stroke | - 
--td-checkbox-description-color | @text-color-secondary | - 
--td-checkbox-description-disabled-color | @text-color-disabled | - 
--td-checkbox-description-font | @font-body-medium | - 
--td-checkbox-icon-checked-color | @brand-color | - 
--td-checkbox-icon-color | @component-border | - 
--td-checkbox-icon-disabled-bg-color | @bg-color-component-disabled | - 
--td-checkbox-icon-disabled-color | @brand-color-disabled | - 
--td-checkbox-icon-size | 48rpx | - 
--td-checkbox-tag-active-bg-color | @brand-color-light | - 
--td-checkbox-tag-active-color | @brand-color | - 
--td-checkbox-title-color | @text-color-primary | - 
--td-checkbox-title-disabled-color | @text-color-disabled | - 
--td-checkbox-title-font | @font-body-large | - 
--td-checkbox-title-line-height | 48rpx | - 
--td-checkbox-vertical-padding | @spacer-2 | -