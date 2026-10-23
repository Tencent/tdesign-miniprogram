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
loading-mode | String | pull-refresh | Data Loading Mode。options: pull-refresh/pagination | N
loading-props | Object | - | Typescript: `Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
max-height | String / Number | - | table max height | N
pagination | Object | - | you can use all props of pagination component with paginationProps。Typescript: `PaginationProps` `interface PaginationProps { current?: number; defaultCurrent?: number; disabled?: boolean; foldedMaxPageBtn?: number; maxPageBtn?: number; pageEllipsisMode?: 'mid' \| 'both-ends'; pageSize?: number; defaultPageSize?: number; pageSizeOptions?: Array<number \| { label: string; value: number }>; showFirstAndLastPageBtn?: boolean; showJumper?: boolean; showPageNumber?: boolean; showPageSize?: boolean; showPreviousAndNextBtn?: boolean; size?: 'small' \| 'medium'; theme?: 'default' \| 'simple'; total?: number; totalContent?: string; onChange?: (pageInfo: PageInfo) => void; onCurrentChange?: (current: number, pageInfo: PageInfo) => void; onPageSizeChange?: (pageSize: number, pageInfo: PageInfo) => void; }` `interface PageInfo { current: number; previous: number; pageSize: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-attributes | Object / Array / Function | - | `tr` attributes。Typescript: `TableRowAttributes<T>` `type TableRowAttributes<T> = HTMLElementAttributes \| ((params: { row: T; rowIndex: number; type: 'body' \| 'foot' }) => HTMLElementAttributes) \| Array<TableRowAttributes<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-class-name | String / Object / Array / Function | - | table `th` classname。Typescript: `ClassName \| ((params: RowClassNameParams<T>) => ClassName)` `interface RowClassNameParams<T> { row: T; rowIndex: number; rowKey?: string; type?: 'body' \| 'foot' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-key | String | 'id' | required。unique key for each row data | Y
rowspan-and-colspan | Function | - | rowspan and colspan。Typescript: `TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T extends TableRowData = TableRowData> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
show-header | Boolean | true | show table header | N
stripe | Boolean | false | show stripe style | N
table-content-width | String | - | \- | N
table-layout | String | fixed | table-layout css properties, [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout). set value to be `fixed` on `resizable=true` please。options: auto/fixed | N
vertical-align | String | middle | vertical align。options: top/middle/bottom | N

### BaseTable Events

name | params | description
-- | -- | --
cell-click | `(detail: BaseTableCellEventContext<T>)` | trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface BaseTableCellEventContext<T extends TableRowData = TableRowData> { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number;}`<br/>
row-click | `(detail: RowEventContext<T>)` | trigger on row click。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface RowEventContext<T extends TableRowData = TableRowData> { row: T; index: number;}`<br/>

### BaseTable Slots

name | Description
-- | --
cell-empty-content | \-
empty | empty text or empty element
footer-summary | footer summary content
loading | loading state table

### BaseTable External Classes

className | Description
-- | --
t-class | \-
t-class-footer | \-
t-class-header | \-

### BaseTableCol

name | type | default | description | required
-- | -- | -- | -- | --
align | String | left | align type。options: left/right/center | N
cell | String / Function | - | use cell to render table cell。Typescript: `string \| ((params: BaseTableCellParams<T>) => string)` `interface BaseTableCellParams<T extends TableRowData = TableRowData> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
class-name | String / Object / Array / Function | - | cell classnames。Typescript: `TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T extends TableRowData = TableRowData> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T extends TableRowData = TableRowData> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
col-key | String | - | unique key for column | N
ellipsis | Boolean / Object | false | ellipsis cell content | N
ellipsis-title | Boolean / Object | - | ellipsis title content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
fixed | String | left | fixed current column to left or right。options: left/right | N
min-width | String / Number | - | add CSS property `min-width` to HTML Element `<col>`，Browsers with [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview)  support `minWidth` | N
title | String | - | th content。Typescript: `string` | N
width | String / Number | - | column width | N
### BaseTableCol

name | Description
-- | --
ellipsis | ellipsis cell content
ellipsis-title | ellipsis title content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)


### PrimaryTable Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
columns | Array | [] | table column configs。Typescript: `Array<PrimaryTableCol<T>>` | N
display-columns | Array | - | Typescript: `CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-display-columns | Array | undefined | uncontrolled property。Typescript: `CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
drag-sort | String | - | dag sort。options: row/row-handler/col/row-handler-col/drag-col | N
drag-sort-options | Object | - | drag sort params。Typescript: `SortableOptions` | N
expand-icon | Boolean | true | to show expand icon. expand icon is set in first column。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
expand-on-row-click | Boolean | - | expand row on click | N
expanded-row | String | - | table expanded row, to show more detail information。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
expanded-row-keys | Array | [] | expanded row keys, row key value is from data[rowKey]。Typescript: `Array<string \| number>` | N
default-expanded-row-keys | Array | undefined | expanded row keys, row key value is from data[rowKey]。uncontrolled property。Typescript: `Array<string \| number>` | N
filter-row | String | - | filter value | N
filter-value | Object | - | filter value。Typescript: `FilterValue` `type FilterValue = { [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-filter-value | Object | undefined | filter value。uncontrolled property。Typescript: `FilterValue` `type FilterValue = { [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
hide-sort-tips | Boolean | - | hide sort tips | N
indeterminate-selected-row-keys | Array | - | indeterminate selected row keys, row key is from data[rowKey]。Typescript: `Array<string \| number>` | N
multiple-sort | Boolean | false | support multiple column fields sort | N
reserve-selected-row-on-paginate | Boolean | true | Controls whether selected rows are retained across pagination. When enabled, selections persist across all pages, allowing batch operations on multi-page data. If set to `false`, selections are confined to the current page and do not extend to other pages. | N
select-on-row-click | Boolean | - | select row data on row click | N
selected-row-keys | Array | [] | selected row keys, row key is from data[rowKey]。Typescript: `Array<string \| number>` | N
default-selected-row-keys | Array | undefined | selected row keys, row key is from data[rowKey]。uncontrolled property。Typescript: `Array<string \| number>` | N
show-sort-column-bg-color | Boolean | false | column shows sort bg color | N
sort | Object / Array | - | sort configs。Typescript: `TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-sort | Object / Array | undefined | sort configs。uncontrolled property。Typescript: `TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N

### PrimaryTable Events

name | params | description
-- | -- | --
cell-click | `(detail: PrimaryTableCellEventContext<T>)` | trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number;}`<br/>
change | `(data: TableChangeData, context: TableChangeContext<T>)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/>
column-change | `(detail: PrimaryTableColumnChange<T>)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: ChangeEvent }`<br/>
data-change | `(data: Array<T>, context: TableDataChangeContext)` | trigger on data changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/>
display-columns-change | `(value: CheckboxGroupValue)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/>
drag-sort | `(detail: DragSortContext<T>)` | trigger on drag sort。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/>
expand-change | `(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>)` | trigger on expand row keys changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/>
filter-change | `(filterValue: FilterValue, context: TableFilterChangeContext<T>)` | trigger on filter value changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableFilterChangeContext<T> { col?: PrimaryTableCol<T>; trigger: 'filter-change' \| 'confirm' \| 'reset' \| 'clear' }`<br/>
select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | trigger on select changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | trigger on sort changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>

### PrimaryTable Slots

name | Description
-- | --
expand-icon | to show expand icon. expand icon is set in first column。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)
expanded-row | table expanded row, to show more detail information。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)
filter-icon | filter icon
filter-row | filter value
sort-icon | sort icon

### PrimaryTableCol

name | type | default | description | required
-- | -- | -- | -- | --
check-props | Object / Function | - | checkbox or radio component properties。Typescript: `CheckProps<T>` `type CheckProps<T> = CheckboxProps \| RadioProps \| ((options: { row: T; rowIndex: number }) => CheckboxProps \| RadioProps)` `import { CheckboxProps } from '@Checkbox'`，[Radio API Documents](./radio?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
children | Array | - | grouping table head。Typescript: `Array<PrimaryTableCol<T>>` | N
col-key | String | - | unique key for column | N
disabled | Function | - | disable table select action。Typescript: `(options: {row: T; rowIndex: number }) => boolean` | N
filter | Object | - | filter rules config。Typescript: `TableColumnFilter` | N
sort-type | String | all | sort options。options: desc/asc/all。Typescript: `SortType` `type SortType = 'desc' \| 'asc' \| 'all'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
sorter | Boolean / Function | false | sort configs。Typescript: `boolean \| SorterFun<T>` `type SorterFun<T> = (a: T, b: T) => number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
title | String | - | to render table head。Typescript: `string` | N
type | String | single | row select type。options: single/multiple | N

### TableColumnFilter

name | type | default | description | required
-- | -- | -- | -- | --
attrs | Object | - | html attributes of component。Typescript: `HTMLElementAttributes`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
class-names | String | - | component class names。Typescript: `ClassName`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
confirm-events | Array | - | Typescript: `string[]` | N
label | String / Function | - | filter column title text, used to be showed in filter row。Typescript: `string` | N
list | Array | - | Typescript: `Array<OptionData>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
popup-props | Object | - | Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
props | Object | - | Typescript: `FilterProps` `type FilterProps = RadioProps \| CheckboxProps \| InputProps \| { [key: string]: any }`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
show-confirm-and-reset | Boolean | false | \- | N
type | String | - | Typescript: `FilterType` `type FilterType = 'input' \| 'single' \| 'multiple'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description
-- | -- | --
--td-table-body-text-color | @text-color-primary | -
--td-table-border-color | @component-border | -
--td-table-fixed-cell-border-color | @component-border | -
--td-table-font-size | @font-body-medium | -
--td-table-header-bg-color | @bg-color-container | -
--td-table-header-text-color | @text-color-placeholder | -
--td-table-loading-bg-color | rgba(255, 255, 255, 0.55) | -
--td-table-row-height | 82rpx | -
--td-table-stripe-bg-color | @bg-color-secondarycontainer | -
--td-table-td-padding | @spacer @spacer-1 | -
--td-table-th-padding | @spacer @spacer-1 | -
