:: BASE_DOC ::

## API
### Cell Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | middle | options：top/middle/bottom | N
arrow | Boolean | false | \- | N
bordered | Boolean | true | \- | N
description | String / Slot | - | \- | N
external-classes | Array | - | `['t-class', 't-class-title', 't-class-note', 't-class-description', 't-class-thumb', 't-class-hover', 't-class-left', 't-class-right']` | N
hover | Boolean | - | \- | N
image | String / Slot | - | \- | N
jump-type | String | navigateTo | options：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Slot | - | \- | N
note | String / Slot | - | \- | N
required | Boolean | false | \- | N
right-icon | String / Slot | - | \- | N
title | String / Slot | - | \- | N
url | String | - | \- | N

### Cell Events

name | params | description
-- | -- | --
click | - | \-
