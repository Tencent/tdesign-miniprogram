---
title: Typography
description: Typography is used for the basic layout and styling of text, allowing users to quickly format text content within a page. It works with other components to maintain a consistent style across themes such as dark and light modes.
spline: base
isComponent: true
---


## Import

Recommend using easycom mode. After configuration, you can directly use `<t-text />`, `<t-paragraph />` and `<t-title />` in templates without manual import. See [Getting Started](../getting-started) for details.

For manual import:

```js
import TText from '@tdesign/uniapp/text/text.vue';
import TParagraph from '@tdesign/uniapp/paragraph/paragraph.vue';
import TTitle from '@tdesign/uniapp/title/title.vue';
```

## Demos

### Basic Text

{{ base }}

### Combined Usage

{{ combination }}

### Theme

{{ theme }}

### Copyable

{{ copyable }}

### Ellipsis

{{ ellipsis }}


## API

### Paragraph Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | content of paragraph | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/paragraph/type.ts) | N

### Paragraph Slots

name | Description
-- | --
content | content of paragraph


### Text Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
code | Boolean | false | add code style | N
content | String | - | content of text | N
copyable | Boolean / Object | false | Typescript: `boolean \| TypographyCopyable ` `interface TypographyCopyable { text?: string, suffix?: boolean; }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/text/type.ts) | N
delete | Boolean | false | add delete line style | N
disabled | Boolean | false | add disabled style | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis ` `interface TypographyEllipsis { collapsible?: boolean; expandable?: boolean; row?: number;suffix?: boolean;}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/text/type.ts) | N
italic | Boolean | false | add italic style | N
keyboard | Boolean | false | add keyboard style | N
mark | String / Boolean | false | add mark style | N
strong | Boolean | false | add bold style | N
theme | String | - | theme of text。options: primary/secondary/success/warning/error | N
underline | Boolean | false | add underline style | N

### Text Slots

name | Description
-- | --
content | content of text


### Title Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | content of title | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/title/type.ts) | N
level | String | h1 | level of title。options: h1/h2/h3/h4/h5/h6 | N

### Title Slots

name | Description
-- | --
content | content of title
