:: BASE_DOC ::

## API
### Switch Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-value | Array | [true, false] | Typescript：`Array<SwitchValue>` | N
disabled | Boolean | false | \- | N
icon | Array | [] | Typescript：`string[]` | N
label | Array | [] | Typescript：`string[]` | N
loading | Boolean | false | \- | N
size | String | medium | options：small/medium/large | N
style | String | - | \- | N
value | String / Number / Boolean | null | Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | uncontrolled property。Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N

### Switch Events

name | params | description
-- | -- | --
change | `(value: SwitchValue)` | \-
