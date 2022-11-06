:: BASE_DOC ::

## API

### Switch Props

name | type | default | description | required
-- | -- | -- | -- | --
colors | Array | - | Typescript：`string[]` | N
custom-style `v0.25.0` | String | - | \- | N
custom-value | Array | [true, false] | Typescript：`Array<SwitchValue>` | N
disabled | Boolean | false | \- | N
label | String | '' | \- | N
loading | Boolean | false | \- | N
size | String | medium | options：small/medium/large | N
value | String / Number / Boolean | undefined | Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | uncontrolled property。Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N

### Switch Events

name | params | description
-- | -- | --
change | `(value: SwitchValue)` | \-
