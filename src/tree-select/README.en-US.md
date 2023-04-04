:: BASE_DOC ::

## API
### TreeSelect Props

name | type | default | description | required
-- | -- | -- | -- | --
height | String / Number | 336 | \- | N
keys | Object | - | Typescript：`KeysType` | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DataOption>` | N
value | String / Number / Array | - | Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N

### TreeSelect Events

name | params | description
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeLevel: 0 \| 1 \| 2`<br/>
