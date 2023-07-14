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


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-side-bar-bg-color | @bg-color-secondarycontainer | - 
--td-side-bar-height | 100% | - 
--td-side-bar-width | 206rpx | - 
--td-side-bar-active-color | @brand-color | - 
--td-side-bar-bg-color | @bg-color-secondarycontainer | - 
--td-side-bar-border-radius | 18rpx | - 
--td-side-bar-color | @font-gray-1 | - 
--td-side-bar-disabled-color | @font-gray-4 | - 
--td-side-bar-font-size | 32rpx | - 
--td-side-bar-icon-size | 40rpx | - 
--td-side-bar-item-height | 112rpx | - 
--td-side-bar-item-line-height | 48rpx | - 
