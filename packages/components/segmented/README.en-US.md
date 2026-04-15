:: BASE_DOC ::

## API

### Segmented Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
block | Boolean | false | \- | N
disabled | Boolean | - | \- | N
options | Object | [] | Typescript: `string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string; icon?: string \| object; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/segmented/type.ts) | N
value | String / Number | - | \- | N
default-value | String / Number | undefined | uncontrolled property | N

### Segmented Events

name | params | description
-- | -- | --
change | `(value: string \| number, selectedOption: SegmentedItem)` | \-

### Segmented External Classes

className | Description
-- | --
t-class | \-
t-class-item | \-
t-class-thumb | \-
