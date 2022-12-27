:: BASE_DOC ::

## API
### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
autoplay | Boolean | true | \- | N
current | Number | 0 | \- | N
default-current | Number | undefined | uncontrolled property | N
custom-style | String | - | `0.25.0` | N
direction | String | horizontal | options：horizontal/vertical | N
display-multiple-items | Number | 1 | `0.32.0` | N
duration | Number | 300 | \- | N
easing-function | String | default | `0.32.0`。options：default/linear/easeInCubic/easeOutCubic/easeInOutCubic | N
height | String / Number | '192px' | \- | N
interval | Number | 5000 | \- | N
list | Array | - | `0.32.0`。Typescript：`string[]` | N
loop | Boolean | true | \- | N
navigation | Object / Slot | - | \- | N
next-margin | String / Number | 0 | `0.32.0` | N
pagination-position | String | bottom | options：top-left/top/top-right/bottom-left/bottom/bottom-right | N
previous-margin | String / Number | 0 | `0.32.0` | N
snao-to-edge | Boolean | false | `0.32.0` | N

### Swiper Events

name | params | description
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| ''`<br/>

### SwiperNavigation

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | String | - | `0.25.0` | N
min-show-num | Number | - | \- | N
show-slide-btn | Boolean | - | \- | N
type | String | - | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
