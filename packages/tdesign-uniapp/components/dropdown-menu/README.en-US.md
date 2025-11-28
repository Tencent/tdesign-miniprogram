:: BASE_DOC ::

## API

### DropdownMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
arrow-icon | String / Object | 'caret-down-small' | \- | N
close-on-click-overlay | Boolean | true | \- | N
duration | String / Number | 200 | \- | N
show-overlay | Boolean | true | \- | N
z-index | Number | 11600 | \- | N

### DropdownMenu Events

name | params | description
-- | -- | --
close | \- | \-
open | \- | \-

### DropdownMenu Slots

name | Description
-- | --
\- | \-

### DropdownMenu External Classes

className | Description
-- | --
t-class | \-
t-class-icon | \-
t-class-item | \-
t-class-label | \-


### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
disabled | Boolean | false | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | \- | N
options-layout | String | columns | `deprecated` | N
placement | String | left | options: left/right | N
value | String / Number / Array | undefined | `v-model:value` is supported。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-item/type.ts) | N

### DropdownItem Events

name | params | description
-- | -- | --
change | `(context: { value: DropdownValue })` | \-
close | \- | \-
confirm | `(context: { value: DropdownValue })` | \-
reset | \- | \-

### DropdownItem Slots

name | Description
-- | --
\- | \-
footer | \-

### DropdownItem External Classes

className | Description
-- | --
t-class | \-
t-class-column | \-
t-class-column-item | \-
t-class-column-item-label | \-
t-class-content | \-
t-class-footer | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-dropdown-menu-active-color | @brand-color | - 
--td-dropdown-menu-bg-color | @bg-color-container | - 
--td-dropdown-menu-border-width | 1px | - 
--td-dropdown-menu-color | @text-color-primary | - 
--td-dropdown-menu-disabled-color | @text-color-disabled | - 
--td-dropdown-menu-font-size | 28rpx | - 
--td-dropdown-menu-height | 96rpx | - 
--td-dropdown-menu-icon-size | 40rpx | - 
--td-dropdown-body-max-height | 560rpx | - 
--td-dropdown-menu-bg-color | @bg-color-container | - 
--td-tree-bg-color | @bg-color-container | - 
--td-tree-item-active-color | @brand-color | - 
--td-tree-item-font-size | 32rpx | - 
--td-tree-item-height | 96rpx | - 
--td-tree-root-bg-color | @bg-color-secondarycontainer | -