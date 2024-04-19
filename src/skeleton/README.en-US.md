:: BASE_DOC ::

## API

### Skeleton Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | String | none | options: gradient/flashed/none | N
delay | Number | 0 | \- | N
loading | Boolean | true | \- | N
row-col | Array | - | Typescript：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string;  height?: string; size?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text'; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | options: avatar/image/text/paragraph | N
### Skeleton External Classes

className | Description
-- | --
t-class | \-
t-class-col | \-
t-class-row | \-

### CSS 变量

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-skeleton-animation-flashed | rgba(90%, 90%, 90%, 0.3) | - 
--td-skeleton-animation-gradient | rgba(0, 0, 0, 4%) | - 
--td-skeleton-bg-color | @bg-color-page | - 
--td-skeleton-circle-border-radius | @radius-circle | - 
--td-skeleton-circle-height | 96rpx | - 
--td-skeleton-rect-border-radius | @radius-default | - 
--td-skeleton-rect-height | 32rpx | - 
--td-skeleton-row-spacing | @spacer-2 | - 
--td-skeleton-text-border-radius | @radius-small | - 
--td-skeleton-text-height | 32rpx | -