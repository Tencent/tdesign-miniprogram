:: BASE_DOC ::

## API
### Slider Props

name | type | default | description | required
-- | -- | -- | -- | --
colors | Array | [] | Typescript：`Array<string>` | N
disabled | Boolean | false | \- | N
disabled-color | Array | [] | Typescript：`Array<string>` | N
external-classes | Array | - | `['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor']` | N
label | String / Boolean | false | Typescript：`string \| boolean` | N
marks | Object / Array | {} | Typescript：`Record<number, string> \| Array<number>` | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
range | Boolean | false | \- | N
show-extreme-value | Boolean | false | \- | N
step | Number | 1 | \- | N
theme | String | default | `0.30.0`。options：default/capsule | N
value | Number / Array | 0 | Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | uncontrolled property。Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N

### Slider Events

name | params | description
-- | -- | --
change | `(value: SliderValue)` | \-
dragend | \- | \-
dragstart | \- | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-slider-active-color | @brand-color | - 
--td-slider-bar-height | 8rpx | - 
--td-slider-capsule-bar-color | @bg-color-component | - 
--td-slider-capsule-bar-heihgt | 48rpx | - 
--td-slider-capsule-line-heihgt | 36rpx | - 
--td-slider-default-color | @bg-color-component-disabled | - 
--td-slider-default-color | @bg-color-secondarycomponent | - 
--td-slider-disabled-color | @brand-color-disabled | - 
--td-slider-disabled-text-color | @font-gray-4 | - 
--td-slider-dot-bg-color | @bg-color-container | - 
--td-slider-dot-color | @bg-color-secondarycontainer | - 
--td-slider-dot-size | 40rpx | - 
