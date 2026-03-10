:: BASE_DOC ::

## API

### Cell Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
align | String | middle | options: top/middle/bottom | N
arrow | Boolean / Object | false | \- | N
bordered | Boolean | true | \- | N
description | String | - | \- | N
hover | Boolean | - | \- | N
image | String | - | \- | N
jump-type | String | navigateTo | options: switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | \- | N
note | String | - | \- | N
note-style | String / Object | - | \- | N
required | Boolean | false | \- | N
right-icon | String / Object | - | \- | N
right-icon-style | String / Object | - | \- | N
title | String | - | \- | N
title-style | String / Object | - | \- | N
url | String | - | \- | N

### Cell Events

name | params | description
-- | -- | --
click | `(e: MouseEvent)` | \-

### Cell Slots

name | Description
-- | --
description | \-
image | \-
left-icon | \-
note | \-
right-icon | \-
title | \-

### Cell External Classes

className | Description
-- | --
t-class | \-
t-class-center | \-
t-class-description | \-
t-class-hover | \-
t-class-image | \-
t-class-left | \-
t-class-left-icon | \-
t-class-note | \-
t-class-right | \-
t-class-right-icon | \-
t-class-title | \-


### CellGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
bordered | Boolean | false | \- | N
theme | String | default | options: default/card | N
title | String | - | \- | N

### CellGroup Slots

name | Description
-- | --
\- | \-

### CellGroup External Classes

className | Description
-- | --
t-class | \-
t-class-title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-cell-group-border-color | @component-stroke | -
--td-cell-group-title-bg-color | @bg-color-secondarycontainer | -
--td-cell-group-title-color | @text-color-placeholder | -
--td-cell-group-title-font-size | 28rpx | -
--td-cell-group-title-line-height | 90rpx | -
--td-cell-group-title-padding-left | 32rpx | -
--td-cell-bg-color | @bg-color-container | -
--td-cell-border-color | @component-stroke | -
--td-cell-border-left-space | @cell-horizontal-padding | -
--td-cell-border-right-space | 0 | -
--td-cell-border-width | 1px | -
--td-cell-description-color | @text-color-secondary | -
--td-cell-description-font | @font-body-medium | -
--td-cell-height | auto | -
--td-cell-horizontal-padding | 32rpx | -
--td-cell-hover-color | @bg-color-secondarycontainer | -
--td-cell-image-height | 96rpx | -
--td-cell-image-width | 96rpx | -
--td-cell-left-icon-color | @brand-color | -
--td-cell-left-icon-size | 48rpx | -
--td-cell-note-color | @text-color-placeholder | -
--td-cell-note-font-size | @font-size-m | -
--td-cell-required-color | @error-color | -
--td-cell-required-font-size | @font-size-m | -
--td-cell-right-icon-color | @text-color-placeholder | -
--td-cell-right-icon-size | 48rpx | -
--td-cell-title-color | @text-color-primary | -
--td-cell-title-font | @font-body-large | -
--td-cell-vertical-padding | 32rpx | -
