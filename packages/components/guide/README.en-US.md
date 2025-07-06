:: BASE_DOC ::

## API

### Guide Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
back-button-props | Object | - | Typescript：`ButtonProps` | N
counter | String / Function | - | Typescript：`string \| ((params: { total: number; current: number }) => string)` | N
current | Number | - | \- | N
default-current | Number | undefined | uncontrolled property | N
finish-button-props | Object | - | Typescript：`ButtonProps` | N
hide-back | Boolean | false | \- | N
hide-counter | Boolean | false | \- | N
hide-skip | Boolean | false | \- | N
highlight-padding | Number | 16 | \- | N
mode | String | popover | options: popover/dialog | N
next-button-props | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | N
show-overlay | Boolean | true | \- | N
skip-button-props | Object | - | Typescript：`ButtonProps` | N
steps | Array | - | Typescript：`Array<GuideStep>` | N
using-custom-navbar | Boolean | false | \- | N
z-index | Number | 999999 | \- | N

### Guide Events

name | params | description
-- | -- | --
back | `(detail: { current: number, total: number  })` | \-
change | `(current: number, context?: {  total: number })` | \-
finish | `(detail: { current: number, total: number  })` | \-
next-step-click | `(detail: { next: number, current: number, total: number  })` | \-
skip | `(detail: { current: number, total: number  })` | \-

### Guide External Classes

className | Description
-- | --
t-class | \-
t-class-back | \-
t-class-body | \-
t-class-finish | \-
t-class-footer | \-
t-class-next | \-
t-class-popover | \-
t-class-reference | \-
t-class-skip | \-
t-class-title | \-
t-class-tooltip | \-

### GuideStep

name | type | default | description | required
-- | -- | -- | -- | --
back-button-props | Object | - | Typescript：`ButtonProps` | N
body | String | - | \- | N
element | Function | - | required。Typescript：`StepElement` `type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | Y
finish-button-props | Object | - | Typescript：`ButtonProps` | N
highlight-padding | Number | - | \- | N
mode | String | - | options: popover/dialog | N
next-button-props | Object | - | Typescript：`ButtonProps` | N
offset | Array | - | this api is in discussing. do not use it。Typescript：`Array<string \| number>` | N
placement | String | 'top' | Typescript：`StepPopoverPlacement ` `type StepPopoverPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\|'center'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | N
show-overlay | Boolean | true | \- | N
skip-button-props | Object | - | Typescript：`ButtonProps` | N
title | String | - | title of current step | N

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-guide-body-color | @font-gray-2 | - 
--td-guide-body-font-weight | 400 | - 
--td-guide-dialog-body-font-size | @font-size-m | - 
--td-guide-dialog-body-line-height | 48rpx | - 
--td-guide-dialog-body-margin-top | 16rpx | - 
--td-guide-dialog-body-text-align | center | - 
--td-guide-dialog-border-radius | @radius-extra-large | - 
--td-guide-dialog-footer-button-padding | 0 @spacer-3 | - 
--td-guide-dialog-padding | @spacer-3 0 | - 
--td-guide-dialog-title-font-size | 36rpx | - 
--td-guide-dialog-title-line-height | 52rpx | - 
--td-guide-dialog-title-text-align | center | - 
--td-guide-dialog-width | 622rpx | - 
--td-guide-footer-button-space | @spacer-1 | - 
--td-guide-footer-margin-top | @spacer-3 | - 
--td-guide-footer-text-align | right | - 
--td-guide-popover-bg-color | @font-white-1 | - 
--td-guide-popover-body-font-size | @font-size-base | - 
--td-guide-popover-body-line-height | 44rpx | - 
--td-guide-popover-body-margin-top | 8rpx | - 
--td-guide-popover-body-text-align | left | - 
--td-guide-popover-border | 2rpx solid @gray-color-4 | - 
--td-guide-popover-border-radius | @radius-large | - 
--td-guide-popover-max-width | 540rpx | - 
--td-guide-popover-min-width | 480rpx | - 
--td-guide-popover-padding | @spacer-2 | - 
--td-guide-popover-shadow | @shadow-3 | - 
--td-guide-popover-title-font-size | @font-size-m | - 
--td-guide-popover-title-line-height | 48rpx | - 
--td-guide-popover-title-text-align | left | - 
--td-guide-reference-border | 4rpx solid @brand-color | - 
--td-guide-reference-border-radius | @radius-default | - 
--td-guide-reference-mask-color | @font-gray-2 | - 
--td-guide-title-color | @font-gray-1 | - 
--td-guide-title-font-weight | 600 | -