:: BASE_DOC ::

## API
### Collapse Props

name | type | default | description | required
-- | -- | -- | -- | --
default-expand-all | Boolean | false | \- | N
disabled | Boolean | - | \- | N
expand-icon | Boolean / Slot | true | \- | N
expand-mutex | Boolean | false | \- | N
theme | String | default | options：default/card | N
value | Array | [] | Typescript：`CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/collapse/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/collapse/type.ts) | N

### Collapse Events

name | params | description
-- | -- | --
change | `(value: CollapseValue)` | \-

### CollapsePanel Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Slot | - | \- | N
disabled | Boolean | undefined | \- | N
expand-icon | Boolean / Slot | undefined | \- | N
external-classes | Array | - | `['t-class', 't-class-header', 't-class-content']` | N
header | String / Slot | - | \- | N
header-right-content | String / Slot | - | \- | N
placement | String | bottom | `0.34.0`。options：bottom/top | N
value | String / Number | - | \- | N
