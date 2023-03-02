:: BASE_DOC ::

## API
### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
close-btn | Boolean / Slot | true | \- | N
keys | Object | - | Typescript：`KeysType` | N
options | Array | [] | Typescript：`Array<CascaderOption>` | N
sub-titles | Array | [] | Typescript：`Array<string>` | N
theme | String | step | options：step/tab | N
title | String / Slot | - | \- | N
value | String / Number | null | \- | N
default-value | String / Number | undefined | uncontrolled property | N
visible | Boolean | false | \- | N

### Cascader Events

name | params | description
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`
close | `(trigger: TriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, index: number)` | `1.0.1`
