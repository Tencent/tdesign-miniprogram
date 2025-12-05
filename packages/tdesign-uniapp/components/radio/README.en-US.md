:: BASE_DOC ::

## API

### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
allow-uncheck | Boolean | false | \- | N
block | Boolean | true | \- | N
checked | Boolean | false | `v-model:checked` is supported | N
default-checked | Boolean | false | uncontrolled property | N
content | String | - | \- | N
content-disabled | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | - | options: left/right | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | String / Number / Boolean | false | Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N

### Radio Events

name | params | description
-- | -- | --
change | `(context: { checked: boolean })` | \-

### Radio Slots

name | Description
-- | --
\- | \-
content | \-
icon | \-
label | \-

### Radio External Classes

className | Description
-- | --
t-class | \-
t-class-border | \-
t-class-content | \-
t-class-icon | \-
t-class-label | \-


### RadioGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
allow-uncheck | Boolean | false | \- | N
borderless | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N
placement | String | left | options: left/right | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | String / Number / Boolean | - | `v-model:value` is supported。Typescript：`T`，[Radio API Documents](./radio?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N
default-value | String / Number / Boolean | - | uncontrolled property。Typescript：`T`，[Radio API Documents](./radio?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio-group/type.ts) | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(context: { value: RadioValue })` | \-

### RadioGroup Slots

name | Description
-- | --
\- | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-radio-bg-color | @bg-color-container | - 
--td-radio-border-color | @component-stroke | - 
--td-radio-content-checked-color | @text-color-secondary | - 
--td-radio-content-color | @text-color-secondary | - 
--td-radio-content-disabled-color | @text-color-disabled | - 
--td-radio-content-font-size | 28rpx | - 
--td-radio-content-line-height | 44rpx | - 
--td-radio-font-size | 32rpx | - 
--td-radio-icon-checked-color | @brand-color | - 
--td-radio-icon-color | @component-border | - 
--td-radio-icon-disabled-bg-color | @bg-color-component-disabled | - 
--td-radio-icon-disabled-color | @brand-color-disabled | - 
--td-radio-icon-size | 48rpx | - 
--td-radio-label-checked-color | @text-color-primary | - 
--td-radio-label-color | @text-color-primary | - 
--td-radio-label-disabled-color | @text-color-disabled | - 
--td-radio-label-line-height | 48rpx | - 
--td-radio-vertical-padding | 32rpx | -