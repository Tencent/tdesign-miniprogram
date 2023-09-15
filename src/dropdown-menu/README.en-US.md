:: BASE_DOC ::

## API
### DropdownMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
arrow-icon | String / Object | 'caret-down-small' | \- | N
close-on-click-overlay | Boolean | true | \- | N
duration | String / Number | 200 | \- | N
external-classes | Array | - | `['t-class', 't-class-item', 't-class-label', 't-class-icon']` | N
show-overlay | Boolean | true | \- | N
z-index | Number | 11600 | \- | N

### DropdownMenu Events

name | params | description
-- | -- | --
open | \- | \-
close | \- | \-

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
close | \- | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-dropdown-menu-active-colorm | @brand-color | - 
--td-dropdown-menu-bg-colorm | @bg-color-container | - 
--td-dropdown-menu-border-width | 1px | - 
--td-dropdown-menu-colorm | @font-gray-1 | - 
--td-dropdown-menu-disabled-colorm | @font-gray-4 | - 
--td-dropdown-menu-font-sizem | 28rpx | - 
--td-dropdown-menu-icon-sizem | 48rpx | - 
--td-dropdown-body-max-height | 560rpx | - 
--td-dropdown-menu-bg-color | @bg-color-container | - 
--td-tree-bg-color | @bg-color-container | - 
--td-tree-item-active-color | @brand-color | - 
--td-tree-item-font-size | 32rpx | - 
--td-tree-item-height | 96rpx | - 
--td-tree-root-bg-color | @bg-color-secondarycontainer | - 
