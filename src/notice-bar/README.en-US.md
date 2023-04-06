:: BASE_DOC ::

## API
### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Array / Slot | - | \- | N
direction | String | horizontal | options：horizontal/vertical | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-prefix-icon', 't-class-operation', 't-class-suffix-icon']` | N
operation | String / Slot | - | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts) | N
prefix-icon | String / Boolean/ Object / Slot | - | \- | N
suffix-icon | String / Boolean / Object / Slot | - | \- | N
theme | String | info | options：info/success/warning/error | N
visible | Boolean | false | \- | N
default-visible | Boolean | false | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>
