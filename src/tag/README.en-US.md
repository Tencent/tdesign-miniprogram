:: BASE_DOC ::

## API
### Tag Props

name | type | default | description | required
-- | -- | -- | -- | --
closable | Boolean | false | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String / Object / Slot | - | \- | N
max-width | String / Number | - | \- | N
shape | String | square | options：square/round/mark | N
size | String | medium | options：small/medium/large/extra-large。Typescript：`SizeEnum` | N
theme | String | default | options：default/primary/warning/danger/success | N
variant | String | dark | options：dark/light/outline/light-outline | N

### Tag Events

name | params | description
-- | -- | --
click | - | \-
close | - | \-

### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
checked | Boolean | undefined | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
closable | Boolean | false | `deprecated` | N
content | String / Number / Array / Slot | - | Typescript：`string \| number \| string[]` | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String / Object / Slot | - | \- | N
shape | String | square | `deprecated`。options：square/round/mark | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum` | N
variant | String | dark | `0.26.0`。options：dark/light/outline/light-outline | N

### CheckTag Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-
click | - | \-


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-tag-close-icon-color | @font-gray-3 | - 
--td-tag-danger-color | @error-color | - 
--td-tag-danger-light-color | @error-color-1 | - 
--td-tag-default-color | @bg-color-component | - 
--td-tag-default-font-color | @font-gray-1 | - 
--td-tag-default-light-color | @bg-color-secondarycontainer | - 
--td-tag-disabled-background-color | @bg-color-component-disabled | - 
--td-tag-disabled-border-color | @component-border | - 
--td-tag-disabled-color | @font-gray-4 | - 
--td-tag-extra-large-font-size | @font-size-base | - 
--td-tag-extra-large-height | 80rpx | - 
--td-tag-extra-large-icon-size | 32rpx | - 
--td-tag-extra-large-padding | 32rpx - 1px | - 
--td-tag-large-font-size | @font-size-base | - 
--td-tag-large-height | 56rpx | - 
--td-tag-large-icon-size | 32rpx | - 
--td-tag-large-padding | 16rpx - 1px | - 
--td-tag-mark-border-radius | @tag-round-border-radius | - 
--td-tag-medium-font-size | @font-size-s | - 
--td-tag-medium-height | 48rpx | - 
--td-tag-medium-icon-size | 28rpx | - 
--td-tag-medium-padding | 16rpx - 1px | - 
--td-tag-outline-bg-color | @bg-color-container | - 
--td-tag-primary-color | @brand-color | - 
--td-tag-primary-light-color | @brand-color-light | - 
--td-tag-round-border-radius | 999px | - 
--td-tag-small-font-size | @font-size | - 
--td-tag-small-height | 40rpx | - 
--td-tag-small-icon-size | 24rpx | - 
--td-tag-small-padding | 12rpx - 1px | - 
--td-tag-square-border-radius | 8rpx | - 
--td-tag-success-color | @success-color | - 
--td-tag-success-light-color | @success-color-1 | - 
--td-tag-warning-color | @warning-color | - 
