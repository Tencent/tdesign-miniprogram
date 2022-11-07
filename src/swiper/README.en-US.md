:: BASE_DOC ::

## API
### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | String | slide | options：slide | N
autoplay | Boolean | true | \- | N
current | Number | 0 | \- | N
default-current | Number | undefined | uncontrolled property | N
custom-style `v0.25.0` | String | - | \- | N
direction | String | horizontal | options：horizontal/vertical | N
duration | Number | 300 | \- | N
height | Number | - | \- | N
interval | Number | 5000 | \- | N
loop | Boolean | true | \- | N
navigation | Object / Slot | - | \- | N
pagination-position | String | bottom | options：top-left/top/top-right/bottom-left/bottom/bottom-right | N

### Swiper Events

name | params | description
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| ''`<br/>

### SwiperItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | \- | N

### SwiperNavigation

name | type | default | description | required
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | \- | N
min-show-num | Number | - | \- | N
show-slide-btn | Boolean | - | \- | N
type | String | - | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
