:: BASE_DOC ::

## API

### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
autoplay | Boolean | true | \- | N
current | Number | 0 | \- | N
direction | String | horizontal | options: horizontal/vertical | N
display-multiple-items | Number | 1 | `0.32.0` | N
duration | Number | 300 | \- | N
easing-function | String | default | `0.32.0`。options: default/linear/easeInCubic/easeOutCubic/easeInOutCubic | N
height | String / Number | 192 | \- | N
image-props | Object | - | `0.34.0` | N
interval | Number | 5000 | \- | N
list | Array | - | `0.32.0`。Typescript：`string[] \| SwiperList[]` `interface SwiperList { value: string, ariaLabel: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
loop | Boolean | true | \- | N
navigation | Boolean / Object / Slot | true | Typescript：`SwiperNavProps \| boolean`，[SwiperNav API Documents](./swiper-nav?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
next-margin | String / Number | 0 | `0.32.0` | N
pagination-position | String | bottom | options: top-left/top/top-right/bottom-left/bottom/bottom-right | N
previous-margin | String / Number | 0 | `0.32.0` | N
snap-to-edge | Boolean | false | `0.32.0` | N

### Swiper Events

name | params | description
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/>
click | `(index: number)` | `0.34.0`
image-load | `(index: number)` | `1.1.4`
### Swiper External Classes

className | Description
-- | --
t-class | \-
t-class-image | \-
t-class-nav | \-
t-class-next-image | \-
t-class-prev-image | \-


### SwiperNav Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
current | Number | 0 | `0.34.0` | N
direction | String | horizontal | `0.34.0`。options: horizontal/vertical | N
min-show-num | Number | 2 | \- | N
pagination-position | String | bottom | `0.34.0`。options: top-left/top/top-right/bottom-left/bottom/bottom-right | N
show-controls | Boolean | false | `0.32.0` | N
total | Number | 0 | `0.34.0` | N
type | String | dots | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper-nav/type.ts) | N
### SwiperNav External Classes

className | Description
-- | --
t-class | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-swiper-item-padding | 0 | - 
--td-swiper-radius | @radius-large | - 
--td-swiper-nav-btn-bg-color | @font-gray-3 | - 
--td-swiper-nav-btn-color | @text-color-anti | - 
--td-swiper-nav-btn-size | 48rpx | - 
--td-swiper-nav-dot-active-color | @text-color-anti | - 
--td-swiper-nav-dot-color | @font-white-2 | - 
--td-swiper-nav-dot-size | 12rpx | - 
--td-swiper-nav-dots-bar-active-width | 40rpx | - 
--td-swiper-nav-fraction-bg-color | @font-gray-3 | - 
--td-swiper-nav-fraction-color | @text-color-anti | - 
--td-swiper-nav-fraction-font-size | 24rpx | - 
--td-swiper-nav-fraction-height | 48rpx | - 
