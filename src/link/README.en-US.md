:: BASE_DOC ::

## API
### Link Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Slot | - | \- | N
navigator-props | Object | - | \- | N
prefix-icon | String / Object / Slot | - | \- | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum` | N
status | String | normal | options：normal/active/disabled | N
disabled | Boolean | false | \- | N
hover | Boolean | - | \- | N
suffix-icon | String / Object / Slot | - | \- | N
theme | String | default | options：default/primary/danger/warning/success | N
underline | Boolean | - | \- | N

### Link Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
success | \- | \-
