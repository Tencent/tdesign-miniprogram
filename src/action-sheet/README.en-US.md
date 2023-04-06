:: BASE_DOC ::

## API
### ActionSheet Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | center | `0.29.0`。options：center/left | N
cancel-text | String | - | \- | N
count | Number | 8 | \- | N
description | String | - | `0.29.0` | N
items | Array | - | required。Typescript：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
show-cancel | Boolean | true | \- | N
theme | String | list | options：list/grid | N
visible | Boolean | false | required | Y
default-visible | Boolean | undefined | required。uncontrolled property | Y

### ActionSheet Events

name | params | description
-- | -- | --
cancel | \- | \-
close | `(trigger: TriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | \-
