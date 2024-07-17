:: BASE_DOC ::

## API

### Guide Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
back-button-props | Object | - | Typescript：`ButtonProps` | N
current | Number | - | \- | N
default-current | Number | undefined | uncontrolled property | N
finish-button-props | Object | - | Typescript：`ButtonProps` | N
hide-counter | Boolean | false | \- | N
hide-skip | Boolean | false | \- | N
highlight-padding | Number | 8 | \- | N
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

### GuideStep

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
back-button-props | Object | - | Typescript：`ButtonProps` | N
body | String | - | \- | N
element | Function | - | required。Typescript：`StepElement ` `type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult \| null>

`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | Y
finish-button-props | Object | - | Typescript：`ButtonProps` | N
highlight-padding | Number | - | \- | N
mode | String | - | options: popover/dialog | N
next-button-props | Object | - | Typescript：`ButtonProps` | N
offset | Array | - | this api is in discussing. do not use it.。Typescript：`Array<string \| number>` | N
placement | String | 'top' | Typescript：`StepPopoverPlacement ` `type StepPopoverPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\|'center'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | N
show-overlay | Boolean | true | \- | N
skip-button-props | Object | - | Typescript：`ButtonProps` | N
title | String | - | title of current step | N
