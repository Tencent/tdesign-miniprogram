:: BASE_DOC ::

## API
### ActionSheet Props

name | type | default | description | required
-- | -- | -- | -- | --
cancel-text | String | - | \- | N
count | Number | 8 | \- | N
custom-style `v0.25.0` | String | - | \- | N
external-classes | Array | - | `['t-class', 't-class-image', 't-class-content']` | N
items | Array | - | required。Typescript：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
show-cancel | Boolean | true | \- | N
theme | String | list | options：list/grid | N
visible | Boolean | false | required | Y
default-visible | Boolean | undefined | required。uncontrolled property | Y

### ActionSheet Events

name | params | description
-- | -- | --
visible-change | `(visible: Boolean)` | \-
cancel | \- | \-
selected | `(selected: ActionSheetItem \| string, index: number)` | \-
