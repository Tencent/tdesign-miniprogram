:: BASE_DOC ::

## API

### PullDownRefresh Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
disabled | Boolean | false | disabled pull down refresh | N
enable-back-to-top | Boolean | true | \- | N
enable-passive | Boolean | false | \- | N
loading-bar-height | String / Number | 50 | \- | N
loading-props | Object | {} | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | Typescript：`string[]` | N
lower-threshold | String / Number | 50 | \- | N
max-bar-height | String / Number | 80 | \- | N
refresh-timeout | Number | 3000 | \- | N
scroll-into-view | String | - | \- | N
show-scrollbar | Boolean | true | \- | N
success-duration | String / Number | 500 | \- | N
upper-threshold | String / Number | 50 | \- | N
using-custom-navbar | Boolean | false | \- | N
value | Boolean | false | `v-model:value` is supported | N
default-value | Boolean | false | uncontrolled property | N

### PullDownRefresh Events

name | params | description
-- | -- | --
change | `(context: { value: boolean })` | \-
dragend | `(context: TouchEvent)` | \-
dragging | `(context: TouchEvent)` | \-
dragstart | `(context: TouchEvent)` | \-
refresh | \- | \-
scrolltolower | \- | \-
timeout | \- | \-

### PullDownRefresh Slots

name | Description
-- | --
\- | \-
header | \-

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
--td-pull-down-refresh-color | @text-color-placeholder | -