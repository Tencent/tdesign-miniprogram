:: BASE_DOC ::

## API

### Tag Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
closable | Boolean / Object | false | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
max-width | String / Number | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large/extra-large | N
theme | String | default | options: default/primary/warning/danger/success | N
variant | String | dark | options: dark/light/outline/light-outline | N

### Tag Events

name | params | description
-- | -- | --
click | `(context: { e: MouseEvent })` | \-
close | `(context: { e: MouseEvent })` | \-

### Tag Slots

name | Description
-- | --
\- | \-
closable | \-
icon | \-

### Tag External Classes

className | Description
-- | --
t-class | \-


### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
checked | Boolean | - | `v-model:checked` is supported | N
default-checked | Boolean | - | uncontrolled property | N
closable | Boolean | false | \- | N
content | String / Number / Array | - | Typescript：`string \| number \| string[]` | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
variant | String | dark | options: dark/light/outline/light-outline | N

### CheckTag Events

name | params | description
-- | -- | --
change | `(context: { checked: boolean })` | \-
click | \- | \-
close | \- | \-

### CheckTag Slots

name | Description
-- | --
\- | \-
content | \-
icon | \-

### CheckTag External Classes

className | Description
-- | --
t-class | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-tag-close-icon-color | @text-color-placeholder | - 
--td-tag-danger-color | @error-color | - 
--td-tag-danger-light-color | @error-color-1 | - 
--td-tag-default-color | @bg-color-component | - 
--td-tag-default-font-color | @text-color-primary | - 
--td-tag-default-light-color | @bg-color-secondarycontainer | - 
--td-tag-disabled-background-color | @bg-color-component-disabled | - 
--td-tag-disabled-border-color | @component-border | - 
--td-tag-disabled-color | @text-color-disabled | - 
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
--td-tag-warning-light-color | @warning-color-1 | - 
ant
@tag-outline-bg-color: var(--td-tag-outline-bg-color | @bg-color-container | - 
ant = dark | @@theme-color, @@theme-light-color | - 
ant = dark | @text-color-anti, @@theme-color | - 
ant = light | @@theme-light-color, @@theme-color | - 
ant) {
 @themes: default | primary, success, warning, dange | - 
--td-tag-danger-color | @error-color | - 
--td-tag-danger-light-color | @error-color-1 | - 
--td-tag-default-color | @bg-color-component | - 
--td-tag-default-font-color | @text-color-primary | - 
--td-tag-default-light-color | @bg-color-secondarycontainer | - 
--td-tag-disabled-background-color | @bg-color-component-disabled | - 
--td-tag-disabled-border-color | @component-border | - 
--td-tag-disabled-color | @text-color-disabled | - 
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
--td-tag-warning-light-color | @warning-color-1 | - 
ant
@tag-outline-bg-color: var(--td-tag-outline-bg-color | @bg-color-container | - 
ant = dark | @@theme-color, @@theme-light-color | - 
ant = dark | @text-color-anti, @@theme-color | - 
ant = light | @@theme-light-color, @@theme-color | - 
ant) {
 @themes: default | primary, success, warning, dange | -