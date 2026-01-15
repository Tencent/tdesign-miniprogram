:: BASE_DOC ::

## API

### Watermark Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
alpha | Number | 1 | \- | N
content | String | - | \- | N
height | Number | - | \- | N
is-repeat | Boolean | true | \- | N
layout | String | rectangular | options: rectangular/hexagonal | N
line-space | Number | 16 | \- | N
movable | Boolean | false | \- | N
move-interval | Number | 3000 | \- | N
offset | Array | - | Typescript：`Array<number>` | N
removable | Boolean | true | \- | N
rotate | Number | -22 | \- | N
watermark-content | Object / Array | - | Typescript：`WatermarkText\|WatermarkImage\|Array<WatermarkText\|WatermarkImage>` | N
width | Number | - | \- | N
x | Number | - | \- | N
y | Number | - | \- | N
z-index | Number | - | \- | N

### Watermark Slots

name | Description
-- | --
\- | \-
content | \-

### WatermarkText

name | type | default | description | required
-- | -- | -- | -- | --
font-color | String | rgba(0,0,0,0.1) | \- | N
font-family | String | - | font-family configuration for watermark text | N
font-size | Number | 16 | \- | N
font-weight | String | normal | options: normal/lighter/bold/bolder | N
text | String | - | \- | N

### WatermarkImage

name | type | default | description | required
-- | -- | -- | -- | --
is-grayscale | Boolean | false | \- | N
url | String | - | \- | N
