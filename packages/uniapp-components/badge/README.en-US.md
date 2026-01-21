:: BASE_DOC ::

## API

### Badge Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
color | String | - | \- | N
content | String | - | \- | N
count | String / Number | 0 | \- | N
dot | Boolean | false | \- | N
max-count | Number | 99 | \- | N
offset | Array | - | Typescript: `Array<string \| number>` | N
shape | String | circle | options: circle/square/bubble/ribbon/ribbon-right/ribbon-left/triangle-right/triangle-left | N
show-zero | Boolean | false | \- | N
size | String | medium | options: medium/large | N

### Badge Slots

name | Description
-- | --
\- | \-
count | \-

### Badge External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-count | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-badge-basic-height | 32rpx | -
--td-badge-basic-padding | 8rpx | -
--td-badge-basic-width | 32rpx | -
--td-badge-bg-color | @error-color | -
--td-badge-border-radius | 4rpx | -
--td-badge-bubble-border-radius | 20rpx 20rpx 20rpx 1px | -
--td-badge-content-text-color | @text-color-primary | -
--td-badge-dot-size | 16rpx | -
--td-badge-font | @font-mark-extraSmall | -
--td-badge-large-font | @font-mark-small | -
--td-badge-large-height | 40rpx | -
--td-badge-large-padding | 10rpx | -
--td-badge-text-color | @text-color-anti | -
--td-line-height-mark-extraSmall | 32rpx | -
--td-line-height-mark-small | 40rpx | -
