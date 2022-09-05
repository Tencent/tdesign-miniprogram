:: BASE_DOC ::

## API
### Tabs Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | Object | - | Typescript：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
external-classes | Array | - | `['t-class', 't-class-item', 't-class-active', 't-class-track']` | N
placement | String | top | options：left/top | N
show-bottom-line | Boolean | true | \- | N
sticky | Boolean | false | \- | N
sticky-props | Object | - | Typescript：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
swipeable | Boolean | true | \- | N
value | String / Number | - | Typescript：`TabValue` `type TabValue = string | number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`TabValue` `type TabValue = string | number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

name | params | description
-- | -- | --
change | `(value: TabValue, label: string)` | \-
click | `(value: TabValue, label: string)` | \-
scroll | `({ scrollTop: number, isFixed: boolean })` | \-

### TabPanel Props

name | type | default | description | required
-- | -- | -- | -- | --
destroy-on-hide | Boolean | true | \- | N
disabled | Boolean | false | \- | N
label | String | - | \- | N
panel | String / Slot | - | \- | N
value | String / Number | - | Typescript：`TabValue` | N
