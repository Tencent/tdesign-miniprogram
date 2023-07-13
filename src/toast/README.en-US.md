:: BASE_DOC ::

## API
### Toast Props

name | type | default | description | required
-- | -- | -- | -- | --
direction | String | row | options：row/column | N
duration | Number | 2000 | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String | - | \- | N
message | String / Slot | - | \- | N
overlay-props | Object | {} | \- | N
placement | String | middle | options： top/middle/bottom | N
prevent-scroll-through | Boolean | false | \- | N
show-overlay | Boolean | false | \- | N
theme | String | - | options：loading/success/error | N

### Toast Events

name | params | description
-- | -- | --
close | \- | \-
destory | \- | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-toast-bg-color | @font-gray-2 | - 
--td-toast-color | @font-white-1 | - 
--td-toast-column-icon-size | 64rpx | - 
--td-toast-max-width | 374rpx | - 
--td-toast-radius | 8rpx | - 
--td-toast-row-icon-size | 48rpx | - 
