:: BASE_DOC ::

## API
### Checkbox Props

name | type | default | description | required
-- | -- | -- | -- | --
block | Boolean | true | \- | N
borderless | Boolean | false | \- | N
check-all | Boolean | false | \- | N
checked | Boolean | false | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content-disabled | Boolean | - | \- | N
disabled | Boolean | undefined | \- | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'rectangle' \| string[]` | N
indeterminate | Boolean | false | \- | N
label | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | left | options：left/right | N
readonly | Boolean | false | \- | N
value | String / Number / Boolean | - | value of checkbox。Typescript：`string \| number \| boolean` | N

### Checkbox Events

name | params | description
-- | -- | --
change | `(checked: boolean, context: { value: boolean|number|string, label: boolean|number|string })` | \-

### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
borderless | Boolean | false | \- | N
disabled | Boolean | - | \- | N
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | [] | Typescript：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N
value | Array | [] | Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(value: CheckboxGroupValue, context: { value: boolean|number|string, label: boolean|number|string })` | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-checkbox-bg-color | @bg-color-container | - 
--td-checkbox-border-color | @component-stroke | - 
--td-checkbox-description-color | @font-gray-2 | - 
--td-checkbox-description-disabled-color | @font-gray-4 | - 
--td-checkbox-description-line-height | 44rpx | - 
--td-checkbox-font-size | 32rpx | - 
--td-checkbox-icon-checked-color | @brand-color | - 
--td-checkbox-icon-color | @gray-color-4 | - 
--td-checkbox-icon-disabled-bg-color | @bg-color-component-disabled | - 
--td-checkbox-icon-disabled-color | @brand-color-disabled | - 
--td-checkbox-icon-size | 48rpx | - 
--td-checkbox-tag-active-bg-color | @brand-color-light | - 
--td-checkbox-tag-active-color | @brand-color | - 
--td-checkbox-title-color | @font-gray-1 | - 
--td-checkbox-title-disabled-color | @font-gray-4 | - 
--td-checkbox-title-line-height | 48rpx | - 
--td-checkbox-vertical-padding | 32rpx | - 
