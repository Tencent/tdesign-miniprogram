:: BASE_DOC ::

## API

### TreeSelect Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
custom-value | String / Number / Array | - | Typescript：`TreeSelectValue` | N
height | String / Number | 336 | \- | N
keys | Object | - | alias filed name in options。Typescript：`TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DataOption>` | N
value | String / Number / Array | - | Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N

### TreeSelect Events

name | params | description
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeLevel = 0 \| 1 \| 2`<br/>

### TreeSelect External Classes

className | Description
-- | --
t-class | \-
t-class-left-column | \-
t-class-left-item | \-
t-class-middle-item | \-
t-class-right-column | \-
t-class-right-item | \-
t-class-right-item-label | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-tree-bg-color | @bg-color-container | - 
--td-tree-colum-text-color | @text-color-primary | - 
--td-tree-colum-width | 206rpx | - 
--td-tree-item-active-color | @brand-color | - 
--td-tree-item-disabled-color | @text-color-disabled | - 
--td-tree-item-font-size | 32rpx | - 
--td-tree-item-height | 112rpx | - 
--td-tree-root-bg-color | @bg-color-secondarycontainer | - 
