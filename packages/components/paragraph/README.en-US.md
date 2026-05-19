:: BASE_DOC ::

## API


### Paragraph Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String | - | content of paragraph | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/paragraph/type.ts) | N

### Paragraph Slots

name | Description
-- | --
content | content of paragraph


### Text Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
code | Boolean | false | add code style | N
content | String | - | content of text | N
copyable | Boolean | false | Typescript: `boolean \| TypographyCopyable ` `interface TypographyCopyable { text?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
delete | Boolean | false | add delete line style | N
disabled | Boolean | false | add disabled style | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis ` `interface TypographyEllipsis { collapsible?: boolean; expandable?: boolean; row?: number;}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
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
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String | - | content of title | N
ellipsis | Boolean / Object | false | add ellipsis style。Typescript: `boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/title/type.ts) | N
level | String | h1 | level of title。options: h1/h2/h3/h4/h5/h6 | N

### Title Slots

name | Description
-- | --
content | content of title
