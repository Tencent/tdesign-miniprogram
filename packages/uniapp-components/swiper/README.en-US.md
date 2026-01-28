:: BASE_DOC ::

## API

### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
autoplay | Boolean | true | \- | N
current | Number | 0 | \- | N
direction | String | horizontal | options: horizontal/vertical | N
display-multiple-items | Number | 1 | \- | N
duration | Number | 300 | \- | N
easing-function | String | default | options: default/linear/easeInCubic/easeOutCubic/easeInOutCubic | N
height | String / Number | 192 | \- | N
image-props | Object | {} | \- | N
interval | Number | 5000 | \- | N
list | Array | - | Typescript：`string[] \| SwiperList[]` `interface SwiperList { value: string, ariaLabel: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swiper/type.ts) | N
loop | Boolean | true | \- | N
navigation | Boolean / Object | true | Typescript：`SwiperNavProps \| boolean`，[SwiperNav API Documents](./swiper-nav?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swiper/type.ts) | N
next-margin | String / Number | 0 | \- | N
pagination-position | String | bottom | options: top-left/top/top-right/bottom-left/bottom/bottom-right/left/right | N
previous-margin | String / Number | 0 | \- | N
snap-to-edge | Boolean | false | \- | N

### Swiper Events

name | params | description
-- | -- | --
animationfinish | `(context: { current: number, source: SwiperChangeSource })` | 动画结束时会触发 animationfinish 事件
change | `(context: { current: number, source: SwiperChangeSource })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/>
click | `(context: { index: number })` | \-
image-load | `(context: { index: number})` | \-

### Swiper Slots

name | Description
-- | --
navigation | \-

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
custom-style | Object | - | CSS(Cascading Style Sheets) | N
current | Number | 0 | \- | N
direction | String | horizontal | options: horizontal/vertical | N
min-show-num | Number | 2 | \- | N
pagination-position | String | bottom | options: top-left/top/top-right/bottom-left/bottom/bottom-right/left/right | N
show-controls | Boolean | false | \- | N
total | Number | 0 | \- | N
type | String | dots | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swiper-nav/type.ts) | N

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
--td-swiper-nav-fraction-font | @font-body-small | -
--td-swiper-nav-fraction-height | 48rpx | -
