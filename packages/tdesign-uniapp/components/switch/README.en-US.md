:: BASE_DOC ::

## API

### Switch Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
custom-value | Array | [true, false] | Typescript：`Array<SwitchValue>` | N
disabled | Boolean | undefined | \- | N
icon | Array | [] | Typescript：`string[]` | N
label | Array | [] | Typescript：`string[]` | N
loading | Boolean | false | \- | N
size | String | medium | options: small/medium/large | N
value | String / Number / Boolean | - | `v-model:value` is supported。Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N
default-value | String / Number / Boolean | - | uncontrolled property。Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N

### Switch Events

name | params | description
-- | -- | --
change | `(context: { value: SwitchValue })` | \-

### Switch External Classes

className | Description
-- | --
t-class | \-
t-class-body | \-
t-class-dot | \-
t-class-label | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-switch-checked-color | @brand-color | - 
--td-switch-checked-disabled-color | @brand-color-disabled | - 
--td-switch-dot-disabled-color | @font-white-1 | - 
--td-switch-dot-horizontal-margin | 6rpx | - 
--td-switch-dot-large-size | 52rpx | - 
--td-switch-dot-plain-horizontal-margin | 10rpx | - 
--td-switch-dot-plain-large-size | 44rpx | - 
--td-switch-dot-plain-size | 36rpx | - 
--td-switch-dot-plain-small-size | 28rpx | - 
--td-switch-dot-shadow | @shadow-1 | - 
--td-switch-dot-size | 44rpx | - 
--td-switch-dot-small-size | 36rpx | - 
--td-switch-height | 56rpx | - 
--td-switch-icon-large-size | 48rpx | - 
--td-switch-icon-size | 40rpx | - 
--td-switch-icon-small-size | 32rpx | - 
--td-switch-label-checked-color | @switch-checked-color | - 
--td-switch-label-color | @bg-color-secondarycontainer-active | - 
--td-switch-label-font-size | 28rpx | - 
--td-switch-label-large-font-size | 32rpx | - 
--td-switch-label-small-font-size | 24rpx | - 
--td-switch-large-height | 64rpx | - 
--td-switch-large-radius | calc(@switch-large-height / 2) | - 
--td-switch-large-width | 104rpx | - 
--td-switch-loading-color | @brand-color | - 
--td-switch-radius | calc(@switch-height / 2) | - 
--td-switch-small-height | 48rpx | - 
--td-switch-small-radius | calc(@switch-small-height / 2) | - 
--td-switch-small-width | 78rpx | - 
--td-switch-unchecked-color | @bg-color-secondarycontainer-active | - 
--td-switch-unchecked-disabled-color | @bg-color-component-disabled | - 
--td-switch-width | 90rpx | -