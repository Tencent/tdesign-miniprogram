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
change | `(checked: boolean)` | \-

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
change | `(value: CheckboxGroupValue)` | \-
