:: BASE_DOC ::

## API

### Segmented Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
block | Boolean | false | \- | N
disabled | Boolean | - | \- | N
options | Object | [] | Typescript: `string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string; icon?: string \| object; disabled?: boolean }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/segmented/type.ts) | N
value | String / Number | - | `v-model:value` is supported | N
default-value | String / Number | - | uncontrolled property | N

### Segmented Events

name | params | description
-- | -- | --
change | `(context: { value: string \| number, selectedOption: SegmentedItem })` | \-

### Segmented External Classes

className | Description
-- | --
t-class | \-
t-class-item | \-
t-class-thumb | \-
