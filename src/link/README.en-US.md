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


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-link-danger-active-color | @error-color-active | - 
--td-link-danger-color | @error-color | - 
--td-link-danger-disabled-color | @error-color-disabled | - 
--td-link-default-active-color | @brand-color-active | - 
--td-link-default-color | @font-gray-1 | - 
--td-link-default-disabled-color | @text-color-disabled | - 
--td-link-primary-active-color | @brand-color-active | - 
--td-link-primary-color | @brand-color | - 
--td-link-primary-disabled-color | @brand-color-disabled | - 
--td-link-success-active-color | @success-color-active | - 
--td-link-success-color | @success-color | - 
--td-link-success-disabled-color | @success-color-disabled | - 
--td-link-warning-active-color | @warning-color-active | - 
--td-link-warning-color | @warning-color | - 
--td-link-warning-disabled-color | @warning-color-disabled | - 
