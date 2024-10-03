:: BASE_DOC ::

## API

### PullDownRefresh Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
disabled | Boolean | false | disabled pull down refresh | N
enable-back-to-top | Boolean | true | `1.1.5` | N
enable-passive | Boolean | false | `1.1.5` | N
header | Slot | - | `1.2.10`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
loading-bar-height | String / Number | 50 | \- | N
loading-props | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | Typescript：`string[]` | N
lower-threshold | String / Number | 50 | `1.1.5` | N
max-bar-height | String / Number | 80 | \- | N
refresh-timeout | Number | 3000 | \- | N
scroll-into-view | String | - | `1.1.5` | N
show-scrollbar | Boolean | true | \- | N
upper-threshold | String / Number | 50 | `1.1.5` | N
value | Boolean | false | \- | N
default-value | Boolean | undefined | uncontrolled property | N

### PullDownRefresh Events

name | params | description
-- | -- | --
change | `(value: boolean)` | \-
dragend | `(scrollTop: number, scrollLeft: number)` | `1.2.10`
dragging | `(scrollTop: number, scrollLeft: number)` | `1.2.10`
dragstart | `(scrollTop: number, scrollLeft: number)` | `1.2.10`
refresh | \- | \-
scrolltolower | \- | \-
timeout | \- | \-
### PullDownRefresh External Classes

className | Description
-- | --
t-class | \-
t-class-indicator | \-
t-class-loading | \-
t-class-text | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description
-- | -- | --
--td-pull-down-refresh-color | @font-gray-3 | -