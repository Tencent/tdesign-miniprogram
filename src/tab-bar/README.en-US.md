:: BASE_DOC ::

## API
### TabBar Props

name | type | default | description | required
-- | -- | -- | -- | --
bordered | Boolean | true | \- | N
external-classes | Array | - | `['t-class']` | N
fixed | Boolean | true | \- | N
safe-area-inset-bottom | Boolean | true | \- | N
shape | String | normal | options：normal/round | N
split | Boolean | true | \- | N
theme | String | normal | options：normal/tag | N
value | String / Number / Array | null | Typescript：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`string \| number \| Array<string \| number>` | N

### TabBar Events

name | params | description
-- | -- | --
change | `(value: string \| number)` | \-

### TabBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
icon | String / Slot | - | \- | N
sub-tab-bar | Array | - | Typescript：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
value | String / Number | - | \- | N
