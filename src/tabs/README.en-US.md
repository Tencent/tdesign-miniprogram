:: BASE_DOC ::

## API
### Tabs Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | Object | - | Typescript：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
external-classes | Array | - | `['t-class', 't-class-item', 't-class-active', 't-class-track']` | N
middle | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
show-bottom-line | Boolean | true | \- | N
space-evenly | Boolean | true | \- | N
split | Boolean | true | `1.1.10` | N
sticky | Boolean | false | \- | N
sticky-props | Object | - | Typescript：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
swipeable | Boolean | true | \- | N
theme | String | line | options：line/tag/card | N
value | String / Number | - | Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

name | params | description
-- | -- | --
change | `(value: TabValue, label: string)` | \-
click | `(value: TabValue, label: string)` | \-
scroll | `(scrollTop: number, isFixed: boolean)` | \-

### TabPanel Props

name | type | default | description | required
-- | -- | -- | -- | --
badge-props | Object | null | \- | N
destroy-on-hide | Boolean | true | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | `1.0.0-rc.1` | N
label | String | - | \- | N
panel | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
value | String / Number | - | Typescript：`TabValue`，[Tabs API Documents](./tabs?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-panel/type.ts) | N



### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-tab-border-color | @component-stroke | - 
--td-tab-font-size | 28rpx | - 
--td-tab-icon-size | 36rpx | - 
--td-tab-item-active-color | @brand-color | - 
--td-tab-item-color | @font-gray-1 | - 
--td-tab-item-disabled-color | @font-gray-4 | - 
--td-tab-item-height | 96rpx | - 
--td-tab-item-tag-active-bg | @brand-color-light | - 
--td-tab-item-tag-bg | @bg-color-secondarycontainer | - 
--td-tab-item-tag-height | 64rpx | - 
--td-tab-item-vertical-height | 108rpx | - 
--td-tab-item-vertical-width | 208rpx | - 
--td-tab-nav-bg-color | @bg-color-container | - 
--td-tab-track-color | @brand-color | - 
--td-tab-track-radius | 8rpx | - 
--td-tab-track-thickness | 6rpx | - 
--td-tab-track-width | 32rpx | - 
