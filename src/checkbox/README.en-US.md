:: BASE_DOC ::

## API
### Checkbox Props

name | type | default | description | required
-- | -- | -- | -- | --
placement | String | left | options：left/right | N
block | Boolean | true | \- | N
check-all | Boolean | false | \- | N
checked | Boolean | false | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
content | String / Slot | - | \- | N
content-disabled | Boolean | - | \- | N
disabled | Boolean | undefined | \- | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'rectangle' \| string[]` | N
indeterminate | Boolean | false | \- | N
label | String / Slot | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
readonly | Boolean | false | \- | N
value | String / Number | - | Typescript：`string \| number \| boolean` | N

### Checkbox Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-

### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
disabled | Boolean | false | \- | N
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | [] | Typescript：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N
value | Array | [] | Typescript：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts) | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(value: CheckboxGroupValue, context: CheckboxGroupChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox-group/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/>
