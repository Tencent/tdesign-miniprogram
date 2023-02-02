:: BASE_DOC ::

## API
### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
index-list | Array | - | `0.32.0`。Typescript：`string [] \| number[]` | N
list | Array | [] | `deprecated`。Typescript：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/indexes/type.ts) | N
sticky | Boolean | true | Typescript：`Boolean` | N
sticky-offset | Number | 0 | `1.0.0` | N

### Indexes Events

name | params | description
-- | -- | --
change | `(index: string \| number)` | `0.34.0`
select | `(index: string \| number)` | \-

### IndexesAnchor Props

name | type | default | description | required
-- | -- | -- | -- | --
external-classes | Array | - | `['t-class']` | N
index | String / Number | - | \- | N
