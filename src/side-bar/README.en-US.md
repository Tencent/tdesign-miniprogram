:: BASE_DOC ::

## API
### SideBar Props

name | type | default | description | required
-- | -- | -- | -- | --
value | String / Number | - | \- | N
default-value | String / Number | undefined | uncontrolled property | N

### SideBar Events

name | params | description
-- | -- | --
change | `(value: number \| string, label: string)` | \-
click | `(value: number \| string, label: string)` | \-

### SideBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
badge-props | Object | - | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | `1.0.0-rc.1` | N
label | String | - | \- | N
value | String / Number | - | \- | N
