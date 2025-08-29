:: BASE_DOC ::

## API

### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
current | String / Number | - | `1.9.7` | N
default-current | String / Number | undefined | `1.9.7`。uncontrolled property | N
index-list | Array | - | `0.32.0`。Typescript：`Array<string \| number>` | N
list | Array | [] | `deprecated`。Typescript：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/indexes/type.ts) | N
sticky | Boolean | true | Typescript：`Boolean` | N
sticky-offset | Number | 0 | `1.0.0` | N

### Indexes Events

name | params | description
-- | -- | --
change | `(index: string \| number)` | `0.34.0`
select | `(index: string \| number)` | \-


### IndexesAnchor Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
index | String / Number | - | \- | N

### IndexesAnchor External Classes

className | Description
-- | --
t-class | class name of root node
t-class-sidebar | \-
t-class-sidebar-item | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-indexes-sidebar-active-bg-color | @brand-color | - 
--td-indexes-sidebar-active-color | @text-color-anti | - 
--td-indexes-sidebar-color | @text-color-primary | - 
--td-indexes-sidebar-font-size | 24rpx | - 
--td-indexes-sidebar-item-size | 40rpx | - 
--td-indexes-sidebar-line-height | 40rpx | - 
--td-indexes-sidebar-right | 16rpx | - 
--td-indexes-sidebar-tips-bg-color | @brand-color-light | - 
--td-indexes-sidebar-tips-color | @brand-color | - 
--td-indexes-sidebar-tips-font-size | 40rpx | - 
--td-indexes-sidebar-tips-right | calc(100% + 32rpx) | - 
--td-indexes-sidebar-tips-size | 96rpx | - 
--td-indexes-anchor-active-bg-color | @bg-color-container | - 
--td-indexes-anchor-active-color | @brand-color | - 
--td-indexes-anchor-active-font-weight | 600 | - 
--td-indexes-anchor-bg-color | @bg-color-secondarycontainer | - 
--td-indexes-anchor-border-color | @component-border | - 
--td-indexes-anchor-color | @text-color-primary | - 
--td-indexes-anchor-font-size | 28rpx | - 
--td-indexes-anchor-line-height | 44rpx | - 
--td-indexes-anchor-padding | 8rpx 32rpx | - 
--td-indexes-anchor-top | 0 | -