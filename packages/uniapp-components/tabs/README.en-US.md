:: BASE_DOC ::

## API

### Tabs Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | Object | - | Typescript：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/tabs/type.ts) | N
bottom-line-mode | String | fixed | options: fixed/auto/full | N
show-bottom-line | Boolean | true | \- | N
space-evenly | Boolean | true | \- | N
split | Boolean | true | \- | N
sticky | Boolean | false | \- | N
sticky-props | Object | - | Typescript：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/tabs/type.ts) | N
swipeable | Boolean | true | \- | N
theme | String | line | options: line/tag/card | N
value | String / Number | - | `v-model:value` is supported。Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/tabs/type.ts) | N
default-value | String / Number | - | uncontrolled property。Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/tabs/type.ts) | N

### Tabs Events

name | params | description
-- | -- | --
change | `(context: { value: TabValue; label: string })` | \-
click | `(context: { value: TabValue; label: string })` | \-
scroll | `(context: { scrollTop: number, isFixed: boolean })` | \-

### Tabs Slots

name | Description
-- | --
\- | \-
middle | \-

### Tabs External Classes

className | Description
-- | --
t-class | \-
t-class-active | \-
t-class-content | \-
t-class-item | \-
t-class-track | \-


### TabPanel Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
badge-props | Object | {} | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
label | String | - | \- | N
lazy | Boolean | false | Enable tab lazy loading | N
panel | String | - | \- | N
value | String / Number | - | Typescript：`TabValue`，[Tabs API Documents](./tabs?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/tab-panel/type.ts) | N

### TabPanel Slots

name | Description
-- | --
\- | \-
panel | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-tab-border-color | @component-stroke | -
--td-tab-font | @font-body-medium | -
--td-tab-icon-size | 36rpx | -
--td-tab-item-active-color | @brand-color | -
--td-tab-item-color | @text-color-primary | -
--td-tab-item-disabled-color | @text-color-disabled | -
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
