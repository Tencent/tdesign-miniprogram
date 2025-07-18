:: BASE_DOC ::

## API

### Navbar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | Boolean | true | \- | N
capsule | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
delta | Number | 1 | \- | N
fixed | Boolean | true | \- | N
left | Slot | - | `0.26.0`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
left-arrow | Boolean | false | `0.26.0` | N
title | String / Slot | - | page title。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
title-max-length | Number | - | \- | N
visible | Boolean | true | \- | N

### Navbar Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
go-back | \- | \-
success | \- | \-
### Navbar External Classes

className | Description
-- | --
t-class | \-
t-class-capsule | \-
t-class-center | \-
t-class-home-icon | \-
t-class-left | \-
t-class-left-icon | \-
t-class-nav-btn | \-
t-class-title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-navbar-padding-top | 20px | - 
--td-navbar-right | 95px | - 
--td-navbar-background | @navbar-bg-color | - 
--td-navbar-bg-color | @bg-color-container | - 
--td-navbar-capsule-border-color | @border-level-1-color | - 
--td-navbar-capsule-border-radius | 16px | - 
--td-navbar-capsule-height | 32px | - 
--td-navbar-capsule-width | 88px | - 
--td-navbar-center-left | @navbar-right | - 
--td-navbar-center-width | --td-navbar-center-width | - 
--td-navbar-color | @text-color-primary | - 
--td-navbar-height | 48px | - 
--td-navbar-left-arrow-size | 24px | - 
--td-navbar-left-max-width | --td-navbar-left-max-width | - 
--td-navbar-title-font-size | 18px | - 
--td-navbar-title-font-weight | 600 | - 
