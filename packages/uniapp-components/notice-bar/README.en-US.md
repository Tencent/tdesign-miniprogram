:: BASE_DOC ::

## API

### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String / Array | - | \- | N
direction | String | horizontal | options: horizontal/vertical | N
interval | Number | 2000 | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/notice-bar/type.ts) | N
operation | String | - | \- | N
prefix-icon | String / Boolean / Object | true | \- | N
suffix-icon | String / Object | - | \- | N
theme | String | info | options: info/success/warning/error | N
visible | Boolean | false | `v-model:visible` is supported | N
default-visible | Boolean | false | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
change | `(context: { current: number, source: '' \| 'autoplay' \| 'touch' })` | \-
click | `(context: { trigger: NoticeBarTrigger })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>

### NoticeBar Slots

name | Description
-- | --
content | \-
operation | \-
prefix-icon | \-
suffix-icon | \-

### NoticeBar External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-operation | \-
t-class-prefix-icon | \-
t-class-suffix-icon | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-notice-bar-error-bg-color | @error-color-1 | -
--td-notice-bar-error-color | @error-color | -
--td-notice-bar-font-color | @text-color-primary | -
--td-notice-bar-info-bg-color | @brand-color-light | -
--td-notice-bar-info-color | @brand-color | -
--td-notice-bar-operation-font-color | @brand-color | -
--td-notice-bar-success-bg-color | @success-color-1 | -
--td-notice-bar-success-color | @success-color | -
--td-notice-bar-suffix-icon-color | @text-color-placeholder | -
--td-notice-bar-warning-bg-color | @warning-color-1 | -
--td-notice-bar-warning-color | @warning-color | -
