:: BASE_DOC ::

## API

### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
check-strictly | Boolean | false | \- | N
close-btn | Boolean | true | \- | N
filterable | Boolean | false | Enable searching. When on, a search box is shown at the top; typing switches the panel to a flat list of matched paths | N
filter | Function | - | Custom filter function. Typescript: `(keyword: string, option: CascaderOption, path: CascaderOption[]) => boolean`. Falls back to a case-insensitive built-in matcher on label/text | N
filter-placeholder | String | - | Placeholder text of the search box, falls back to global locale | N
keys | Object | - | Typescript: `CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts) | N
options | Array | [] | Typescript: `Array<CascaderOption>` | N
placeholder | String | - | \- | N
sub-titles | Array | [] | Typescript: `Array<string>` | N
theme | String | step | options: step/tab | N
title | String | - | \- | N
value | String / Number | null | \- | N
default-value | String / Number | undefined | uncontrolled property | N
visible | Boolean | false | \- | N

### Cascader Events

name | params | description
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`
close | `(trigger: CascaderTriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, label: string, index: number, level: number)` | `1.0.1`

### Cascader Slots

name | Description
-- | --
close-btn | \-
header | `1.9.1`
middle-content | `1.12.2`
title | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description
-- | -- | --
--td-cascader-active-color | @brand-color | -
--td-cascader-bg-color | @bg-color-container | -
--td-cascader-border-color | @component-stroke | -
--td-cascader-content-height | 78vh | -
--td-cascader-disabled-color | @text-color-disabled | -
--td-cascader-filter-empty-color | @text-color-placeholder | -
--td-cascader-filter-empty-padding | 96rpx @spacer-2 | -
--td-cascader-filter-highlight-color | @brand-color | -
--td-cascader-filter-item-color | @text-color-primary | -
--td-cascader-filter-item-disabled-color | @text-color-disabled | -
--td-cascader-filter-item-hover-bg | @bg-color-secondarycontainer | -
--td-cascader-filter-item-padding | 24rpx 32rpx | -
--td-cascader-filter-padding | 0 @spacer-2 @spacer-1 | -
--td-cascader-options-height | calc(100% - @cascader-step-height) | -
--td-cascader-options-title-color | @text-color-placeholder | -
--td-cascader-step-arrow-color | @text-color-placeholder | -
--td-cascader-step-dot-size | 16rpx | -
--td-cascader-step-height | 88rpx | -
--td-cascader-title-color | @text-color-primary | -
--td-cascader-title-font | @font-title-large | -
--td-cascader-title-padding | @spacer-2 | -
