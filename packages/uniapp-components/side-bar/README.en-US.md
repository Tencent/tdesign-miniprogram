:: BASE_DOC ::

## API

### SideBar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
value | String / Number | - | `v-model:value` is supported | N
default-value | String / Number | - | uncontrolled property | N

### SideBar Events

name | params | description
-- | -- | --
change | `(context: { value: number \| string, label: string })` | \-
click | `(context: { value: number \| string; label: string })` | \-

### SideBar Slots

name | Description
-- | --
\- | \-


### SideBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/side-bar-item/type.ts) | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
label | String | - | \- | N
value | String / Number | - | \- | N

### SideBarItem Slots

name | Description
-- | --
\- | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-side-bar-bg-color | @bg-color-secondarycontainer | -
--td-side-bar-height | 100% | -
--td-side-bar-width | 206rpx | -
--td-side-bar-active-color | @brand-color | -
--td-side-bar-border-radius | 18rpx | -
--td-side-bar-color | @text-color-primary | -
--td-side-bar-disabled-color | @text-color-disabled | -
--td-side-bar-font | @font-body-large | -
--td-side-bar-icon-size | 40rpx | -
--td-side-bar-item-height | auto | -
