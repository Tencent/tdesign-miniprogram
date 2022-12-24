:: BASE_DOC ::

## API
### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | String | - | `0.25.0` | N
index-list | Array | - | `0.32.0`。Typescript：`string [] \| number[]` | N
list | Array | [] | `deprecated`。Typescript：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/indexes/type.ts) | N
sticky | Boolean | true | Typescript：`Boolean` | N

### Indexes Events

name | params | description
-- | -- | --
select | `(indexes: { groupIndex: string; childrenIndex: number })` | \-

### IndexesAnchor Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | String | - | \- | N
external-classes | Array | - | `['t-class']` | N
index | String / Number | - | \- | N
