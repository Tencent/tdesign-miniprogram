:: BASE_DOC ::

## API
### DropdownMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
close-on-click-overlay | Boolean | true | \- | N
duration | String / Number | 200 | \- | N
external-classes | Array | - | `['t-class', 't-class-item', 't-class-label', 't-class-icon']` | N
show-overlay | Boolean | true | \- | N
z-index | Number | 11600 | \- | N

### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class','t-class-content', 't-class-column', 't-class-column-item', 't-class-column-item-label',  't-class-footer']` | N
keys | Object | - | Typescript：`KeysType` | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | \- | N
options-layout | String | columns | `deprecated` | N
value | String / Number / Array | undefined | Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N

### DropdownItem Events

name | params | description
-- | -- | --
change | `(value: DropdownValue)` | \-
confirm | `(value: DropdownValue)` | \-
reset | \- | \-
