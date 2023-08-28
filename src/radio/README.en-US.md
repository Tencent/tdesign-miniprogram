:: BASE_DOC ::

## API
### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
placement | String | left | options：left/right | N
allow-uncheck | Boolean | false | \- | N
block | Boolean | true | \- | N
checked | Boolean | false | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
content | String / Slot | - | \- | N
content-disabled | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| Array<string>` | N
label | String / Slot | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
value | String / Number / Boolean | false | Typescript：`T` | N

### Radio Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-

### RadioGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
placement | String | left | options：left/right | N
borderless | Boolean | false | \- | N
readonly | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript：`'circle' | 'line' | Array<string>` | N
keys | Object | - | Typescript：`KeysType` | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
value | String / Number / Boolean | - | Typescript：`T` | N
default-value | String / Number / Boolean | undefined | uncontrolled property。Typescript：`T` | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(value: T)` | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-radio-bg-color | @bg-color-container | - 
--td-radio-border-color | @component-stroke | - 
--td-radio-content-checked-color | @font-gray-2 | - 
--td-radio-content-color | @font-gray-2 | - 
--td-radio-content-disabled-color | @font-gray-4 | - 
--td-radio-content-font-size | 28rpx | - 
--td-radio-content-line-height | 44rpx | - 
--td-radio-font-size | 32rpx | - 
--td-radio-icon-checked-color | @brand-color | - 
--td-radio-icon-color | @component-border | - 
--td-radio-icon-disabled-bg-color | @bg-color-component-disabled | - 
--td-radio-icon-disabled-color | @brand-color-disabled | - 
--td-radio-icon-size | 48rpx | - 
--td-radio-label-checked-color | @font-gray-1 | - 
--td-radio-label-color | @font-gray-1 | - 
--td-radio-label-disabled-color | @font-gray-4 | - 
--td-radio-label-line-height | 48rpx | - 
--td-radio-vertical-padding | 32rpx | - 
