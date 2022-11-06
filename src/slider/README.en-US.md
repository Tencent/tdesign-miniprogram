:: BASE_DOC ::

## API
### Slider Props

name | type | default | description | required
-- | -- | -- | -- | --
colors | Array | ['#0052D9', 'rgba(220, 220, 220, 1)'] | Typescript：`Array<string>` | N
custom-style `v0.25.0` | String | - | \- | N
disabled | Boolean | false | \- | N
disabled-color | Array | ['#bbd3fb', '#dcdcdc'] | Typescript：`Array<string>` | N
external-classes | Array | - | `['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor']` | N
label | String / Boolean / Slot | false | \- | N
marks | Object / Array | {} | Typescript：`Record<number, string> \| Array<number>` | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
range | Boolean | false | \- | N
show-extreme-value | Boolean | false | \- | N
step | Number | 1 | \- | N
value | Number / Array | 0 | Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | uncontrolled property。Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N

### Slider Events

name | params | description
-- | -- | --
change | `(value: SliderValue)` | \-
dragend | \- | \-
dragstart | \- | \-
