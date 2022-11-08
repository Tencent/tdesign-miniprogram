:: BASE_DOC ::

## API
### DropdownMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
active-color | String | - | \- | N
close-on-click-overlay | Boolean | true | \- | N
custom-style `v0.25.0` | String | - | \- | N
duration | String / Number | 200 | \- | N
external-classes | Array | - | `['t-class', 't-class-menu', 't-class-menu-item', 't-class-menu-label', 't-class-menu-icon']` | N
show-overlay | Boolean | true | \- | N
z-index | Number | 11600 | \- | N

### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class','t-class-content', 't-class-column', 't-class-column-item', 't-class-column-item-label', 't-class-tree', 't-class-tree-item', 't-class-tree-columns', 't-class-tree-columns-item', 't-class-tree-columns-item-label', 't-class-footer']` | N
keys | Object | - | Typescript：`KeysType` | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<TdDropdownItemOption>` `interface TdDropdownItemOption { label: string;disabled: boolean;value: TdDropdownItemOptionValueType; [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
options-columns | String / Number | 1 | \- | N
options-layout | String | columns | options：columns/tree | N
value | String / Number / Array | undefined | Typescript：`TdDropdownItemOptionValueType \| Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string \| number;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`TdDropdownItemOptionValueType \| Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string \| number;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N

### DropdownItem Events

name | params | description
-- | -- | --
change | `(value: TdDropdownItemOptionValueType \| Array<TdDropdownItemOptionValueType>)` | \-
confirm | `(value: TdDropdownItemOptionValueType \| Array<TdDropdownItemOptionValueType>)` | \-
