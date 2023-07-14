:: BASE_DOC ::

## API
### Navbar Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | Boolean | true | \- | N
capsule | Slot | - | \- | N
delta | Number | 1 | \- | N
external-classes | Array | - | `['t-class', 't-class-title', 't-class-left', 't-class-center', 't-class-capsule']` | N
fixed | Boolean | true | \- | N
left | Slot | - | `0.26.0` | N
left-arrow | Boolean | false | `0.26.0` | N
title | String / Slot | - | page title | N
title-max-length | Number | - | \- | N
visible | Boolean | true | \- | N

### Navbar Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
go-back | \- | \-
success | \- | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-navbar-bg-color | @bg-color-container | - 
--td-navbar-capsule-border-color | #e3e6ea | - 
--td-navbar-capsule-border-radius | 32rpx | - 
--td-navbar-capsule-height | 64rpx | - 
--td-navbar-capsule-width | 176rpx | - 
--td-navbar-color | @font-gray-1 | - 
--td-navbar-height | 96rpx | - 
--td-navbar-left-arrow-size | 48rpx | - 
--td-navbar-title-font-size | 36rpx | - 
--td-navbar-title-font-weight | 600 | - 
