:: BASE_DOC ::

## API

### BaseTable Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
bordered | Boolean | false | show table bordered | N
cell-empty-content | String | - | \- | N
columns | Array | [] | table column configs。Typescript: `Array<BaseTableCol<T>>` | N
data | Array | [] | table data。Typescript: `Array<T>` | N
empty | String | '' | empty text or empty element | N
fixed-rows | Array | - | Typescript: `Array<number>` | N
footer-summary | String | - | footer summary content | N
height | String / Number | - | table height | N
loading | Boolean | undefined | loading state table | N
loading-props | Object | - | Typescript: `Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
max-height | String / Number | - | table max height | N
row-key | String | 'id' | required。unique key for each row data | Y
rowspan-and-colspan | Function | - | rowspan and colspan。Typescript: `TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
show-header | Boolean | true | show table header | N
stripe | Boolean | false | show stripe style | N
table-content-width | String | - | \- | N
table-layout | String | fixed | table-layout css properties, [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout). set value to be `fixed` on `resizable=true` please。options: auto/fixed | N
vertical-align | String | middle | vertical align。options: top/middle/bottom | N

### BaseTable Events

name | params | description
-- | -- | --
cell-click | `(context: BaseTableCellEventContext<T>)` | trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number;}`<br/>
row-click | `(context: RowEventContext<T>)` | trigger on row click。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface RowEventContext<T> { row: T; index: number;}`<br/>

### BaseTable Slots

name | Description
-- | --
cell-empty-content | \-
empty | empty text or empty element
footer-summary | footer summary content
loading | loading state table

### BaseTableCol

name | type | default | description | required
-- | -- | -- | -- | --
align | String | left | align type。options: left/right/center | N
cell | String / Function | - | use cell to render table cell。Typescript: `string \| ((params: BaseTableCellParams<T>) => string)` `interface BaseTableCellParams<T> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
class-name | String / Object / Array / Function | - | cell classnames。Typescript: `TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
col-key | String | - | unique key for column | N
fixed | String | left | fixed current column to left or right。options: left/right | N
min-width | String / Number | - | add CSS property `min-width` to HTML Element `<col>`，Browsers with [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview)  support `minWidth` | N
width | String / Number | - | column width | N
