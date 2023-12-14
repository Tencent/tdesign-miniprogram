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
interval | Number | 2000 | - | N
prefix-icon | String / Boolean/ Object / Slot | - | \- | N
suffix-icon | String / Boolean / Object / Slot | - | \- | N
theme | String | info | options：info/success/warning/error | N
visible | Boolean | false | \- | N
default-visible | Boolean | false | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>
change | `(current: number, source: '' \| 'autoplay' \| 'touch')` | `direction="vertical"`


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-notice-bar-error-bg-color | @error-color-1 | - 
--td-notice-bar-error-color | @error-color-6 | - 
--td-notice-bar-font-color | @font-gray-1 | - 
--td-notice-bar-info-bg-color | @brand-color-light | - 
--td-notice-bar-info-color | @brand-color | - 
--td-notice-bar-operation-font-color | @brand-color | - 
--td-notice-bar-success-bg-color | @success-color-1 | - 
--td-notice-bar-success-color | @success-color | - 
--td-notice-bar-suffix-icon-color | @font-gray-3 | - 
--td-notice-bar-warning-bg-color | @warning-color-1 | - 
--td-notice-bar-warning-color | @warning-color | - 
