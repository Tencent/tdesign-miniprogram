:: BASE_DOC ::

## API

### Slider Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
colors | Array | [] | `deprecated`。Typescript：`Array<string>` | N
disabled | Boolean | undefined | \- | N
disabled-color | Array | [] | `deprecated`。Typescript：`Array<string>` | N
label | String / Boolean / Function | false | Typescript：`string \| boolean` | N
marks | Object / Array | {} | Typescript：`Record<number, string> \| Array<number>` | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
range | Boolean | false | \- | N
show-extreme-value | Boolean | false | \- | N
step | Number | 1 | \- | N
theme | String | default | options: default/capsule | N
value | Number / Array | 0 | `v-model:value` is supported。Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/slider/type.ts) | N
default-value | Number / Array | 0 | uncontrolled property。Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/slider/type.ts) | N
vertical | Boolean | false | \- | N

### Slider Events

name | params | description
-- | -- | --
change | `(context: { value: SliderValue })` | \-
dragend | `(context: { value: SliderValue, e: TouchEvent })` | \-
dragstart | `(context: { e: TouchEvent })` | \-

### Slider External Classes

className | Description
-- | --
t-class | \-
t-class-bar | \-
t-class-bar-active | \-
t-class-bar-disabled | \-
t-class-cursor | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-slider-active-color | @brand-color | -
--td-slider-bar-height | 8rpx | -
--td-slider-bar-width | 8rpx | -
--td-slider-capsule-bar-color | @bg-color-component | -
--td-slider-capsule-bar-heihgt | 48rpx | -
--td-slider-capsule-bar-width | 48rpx | -
--td-slider-capsule-line-heihgt | 36rpx | -
--td-slider-default-color | @bg-color-component | -
--td-slider-disabled-color | @brand-color-disabled | -
--td-slider-disabled-text-color | @text-color-disabled | -
--td-slider-dot-bg-color | #fff | -
--td-slider-dot-color | @component-border | -
--td-slider-dot-disabled-bg-color | #fff | -
--td-slider-dot-disabled-border-color | #f3f3f3 | -
--td-slider-dot-size | 40rpx | -
--td-slider-text-color | @text-color-primary | -
