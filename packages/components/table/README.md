---
title: Table 表格
description: 表格常用于展示同类结构下的多种数据，易于组织、对比和分析等，并可对数据进行搜索、筛选、排序等操作。一般包括表头、数据行和表尾三部分。
spline: data
isComponent: true
toc: false
---

<div style="background: #ecf2fe; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <div style="border-left: 2px solid #c6c6c6; padding: 0 8px;margin-bottom: 16px">该组件于 1.14.0 版本上线，请留意版本</div>
  <div style="border-left: 2px solid #0052d9; padding: 0 8px">渲染框架支持情况：WebView</div>
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-table": "tdesign-miniprogram/table/table"
}
```



## 代码演示

<a href="https://developers.weixin.qq.com/s/5A8ZsBmV8r8L" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型

#### 基础表格

{{ base }}

#### 横向平铺可滚动表格

{{ scroll }}

#### 带斑马纹表格样式

{{ stripe }}

#### 带边框表格样式

{{ bordered }}

#### 带合并单元格的表格

{{ rowspan-colspan }}


## API

### BaseTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bordered | Boolean | false | 是否显示表格边框 | N
cell-empty-content | String | - | 单元格数据为空时呈现的内容 | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N
data | Array | [] | 数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N
empty | String | '' | 空表格呈现样式，支持全局配置 `GlobalConfigProvider` | N
fixed-rows | Array | - | 固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行。TS 类型：`Array<number>` | N
footer-summary | String | - | 表尾总结行 | N
height | String / Number | - | 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight` | N
loading | Boolean | undefined | 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态 | N
loading-mode | String | pull-refresh | 数据加载模式。可选项：pull-refresh/pagination | N
loading-props | Object | - | 透传加载组件全部属性。TS 类型：`Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
max-height | String / Number | - | 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px | N
pagination | Object | - | 分页配置，值为空则不显示。具体 API 参考分页组件。当 `data` 数据长度超过分页大小时，会自动对本地数据 `data` 进行排序，如果不希望对于 `data` 进行排序，可以设置 `disableDataPage = true`。TS 类型：`PaginationProps` `interface PaginationProps { current?: number; defaultCurrent?: number; disabled?: boolean; foldedMaxPageBtn?: number; maxPageBtn?: number; pageEllipsisMode?: 'mid' \| 'both-ends'; pageSize?: number; defaultPageSize?: number; pageSizeOptions?: Array<number \| { label: string; value: number }>; showFirstAndLastPageBtn?: boolean; showJumper?: boolean; showPageNumber?: boolean; showPageSize?: boolean; showPreviousAndNextBtn?: boolean; size?: 'small' \| 'medium'; theme?: 'default' \| 'simple'; total?: number; totalContent?: string; onChange?: (pageInfo: PageInfo) => void; onCurrentChange?: (current: number, pageInfo: PageInfo) => void; onPageSizeChange?: (pageSize: number, pageInfo: PageInfo) => void; }` `interface PageInfo { current: number; previous: number; pageSize: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-attributes | Object / Array / Function | - | HTML 标签 `tr` 的属性。类型为 Function 时，参数说明：`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body` 表示属性作用于 `tbody` 中的元素；`params.type=foot` 表示属性作用于 `tfoot` 中的元素。<br />示例一：{ draggable: true }，<br />示例二：[{ draggable: true }, { title: '超出省略显示' }]。<br /> 示例三：() => [{ draggable: true }]。TS 类型：`TableRowAttributes<T>` `type TableRowAttributes<T> = HTMLElementAttributes \| ((params: { row: T; rowIndex: number; type: 'body' \| 'foot' }) => HTMLElementAttributes) \| Array<TableRowAttributes<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-class-name | String / Object / Array / Function | - | 行类名，泛型 T 指表格数据类型。`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body`  表示类名作用于 `tbody` 中的元素；`params.type= tfoot` 表示类名作用于 `tfoot` 中的元素。TS 类型：`ClassName \| ((params: RowClassNameParams<T>) => ClassName)` `interface RowClassNameParams<T> { row: T; rowIndex: number; rowKey?: string; type?: 'body' \| 'foot' }`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
row-key | String | 'id' | 必需。唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法 | Y
rowspan-and-colspan | Function | - | 用于自定义合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`。TS 类型：`TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T extends TableRowData = TableRowData> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
show-header | Boolean | true | 是否显示表头 | N
stripe | Boolean | false | 是否显示斑马纹 | N
table-content-width | String | - | 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度 | N
table-layout | String | fixed | 表格布局方式。可选项：auto/fixed | N
vertical-align | String | middle | 行内容上下方向对齐。可选项：top/middle/bottom | N

### BaseTable Events

名称 | 参数 | 描述
-- | -- | --
cell-click | `(detail: BaseTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface BaseTableCellEventContext<T extends TableRowData = TableRowData> { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number;}`<br/>
row-click | `(detail: RowEventContext<T>)` | 行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface RowEventContext<T extends TableRowData = TableRowData> { row: T; index: number;}`<br/>

### BaseTable Slots

名称 | 描述
-- | --
cell-empty-content | 自定义 `cell-empty-content` 显示内容
empty | 自定义 `empty` 显示内容
footer-summary | 自定义 `footer-summary` 显示内容
loading | 自定义 `loading` 显示内容

### BaseTable External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-footer | 表尾总结行样式类
t-class-header | 表头行样式类

### BaseTableCol

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | left | 列横向对齐方式。可选项：left/right/center | N
cell | String / Function | - | 自定义单元格渲染。默认使用 `colKey` 的值作为自定义当前列的插槽名称。<br/>如果 `cell` 值类型为 Function 表示以函数形式渲染单元格。优先级高于 `render`。泛型 T 指表格数据类型。TS 类型：`string \| ((params: BaseTableCellParams<T>) => string)` `interface BaseTableCellParams<T extends TableRowData = TableRowData> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
class-name | String / Object / Array / Function | - | 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型。TS 类型：`TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T extends TableRowData = TableRowData> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T extends TableRowData = TableRowData> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
col-key | String | - | 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列 | N
ellipsis | Boolean / Object | false | 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。<br/> 值为 `true`，则超出省略浮层默认显示单元格内容；<br/>值类型为 `Function` 则自定义超出省略浮中层显示的内容。<br /> 请注意单元格超出省略的两个基本点：1. 内容元素是内联元素或样式（自定义单元格内容时需特别注意）；2. 内容超出父元素 | N
ellipsis-title | Boolean / Object | - | 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。<br/>值为 `true`，则超出省略的浮层默认显示表头全部内容；<br/>值类型为 `Function` 用于自定义超出省略浮层显示的表头内容。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
fixed | String | left | 固定列显示位置。可选项：left/right | N
min-width | String / Number | - | 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth` | N
title | String | - | 自定义表头渲染，优先级高于 render。TS 类型：`string` | N
width | String / Number | - | 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果 | N
### BaseTableCol

名称 | 描述
-- | --
ellipsis | 自定义 `ellipsis` 显示内容
ellipsis-title | 自定义 `ellipsis-title` 显示内容。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)


### PrimaryTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N
display-columns | Array | - | 列配置功能中，当前显示的列。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-display-columns | Array | undefined | 列配置功能中，当前显示的列。非受控属性。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
drag-sort | String | - | 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用。可选项：row/row-handler/col/row-handler-col/drag-col | N
drag-sort-options | Object | - | 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable)。TS 类型：`SortableOptions` | N
expand-icon | Boolean | true | 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
expand-on-row-click | Boolean | - | 是否允许点击行展开 | N
expanded-row | String | - | 展开行内容，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
expanded-row-keys | Array | [] | 展开行。TS 类型：`Array<string \| number>` | N
default-expanded-row-keys | Array | undefined | 展开行。非受控属性。TS 类型：`Array<string \| number>` | N
filter-row | String | - | 自定义过滤状态行及清空筛选等 | N
filter-value | Object | - | 过滤数据的值。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-filter-value | Object | undefined | 过滤数据的值。非受控属性。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
hide-sort-tips | Boolean | - | 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` | N
indeterminate-selected-row-keys | Array | - | 半选状态行。选中行请更为使用 `selectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N
multiple-sort | Boolean | false | 是否支持多列排序 | N
reserve-selected-row-on-paginate | Boolean | true | 行选中功能，是否在分页时保留上一页选中结果不清空。分页场景下，会全选所有页数据，保留跨分页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页。 | N
select-on-row-click | Boolean | - | 是否在点击整行时选中 | N
selected-row-keys | Array | [] | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N
default-selected-row-keys | Array | undefined | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。非受控属性。TS 类型：`Array<string \| number>` | N
show-sort-column-bg-color | Boolean | false | 当前排序列是否显示背景色 | N
sort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
default-sort | Object / Array | undefined | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。非受控属性。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N

### PrimaryTable Events

名称 | 参数 | 描述
-- | -- | --
cell-click | `(detail: PrimaryTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number;}`<br/>
change | `(data: TableChangeData, context: TableChangeContext<T>)` | 分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/>
column-change | `(detail: PrimaryTableColumnChange<T>)` | 确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: ChangeEvent }`<br/>
data-change | `(data: Array<T>, context: TableDataChangeContext)` | 本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/>
display-columns-change | `(value: CheckboxGroupValue)` | 确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/>
drag-sort | `(detail: DragSortContext<T>)` | 拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/>
expand-change | `(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>)` | 展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/>
filter-change | `(filterValue: FilterValue, context: TableFilterChangeContext<T>)` | 过滤参数发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface TableFilterChangeContext<T> { col?: PrimaryTableCol<T>; trigger: 'filter-change' \| 'confirm' \| 'reset' \| 'clear' }`<br/>
select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | 选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | 排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>

### PrimaryTable Slots

名称 | 描述
-- | --
expand-icon | 自定义 `expand-icon` 显示内容。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)
expanded-row | 自定义 `expanded-row` 显示内容。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts)
filter-icon | 自定义过滤图标，支持全局配置 `GlobalConfigProvider`
filter-row | 自定义 `filter-row` 显示内容
sort-icon | 自定义排序图标，支持全局配置 `GlobalConfigProvider`

### PrimaryTableCol

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
check-props | Object / Function | - | 透传参数，`colKey` 值为 `row-select` 时，配置有效。具体定义参考 Checkbox 组件 和 Radio 组件。泛型 T 指表格数据类型。TS 类型：`CheckProps<T>` `type CheckProps<T> = CheckboxProps \| RadioProps \| ((options: { row: T; rowIndex: number }) => CheckboxProps \| RadioProps)` `import { CheckboxProps } from '@Checkbox'`，[Radio API Documents](./radio?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
children | Array | - | 用于多级表头，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N
col-key | String | - | 渲染列所需字段，必须唯一。值为 `row-select` 表示当前列为行选中操作列。值为 `drag` 表示当前列为拖拽排序操作列。值为 `serial-number` 表示当前列为「序号」列 | N
disabled | Function | - | 是否禁用行选中，`colKey` 值为 `row-select` 时，配置有效。TS 类型：`(options: {row: T; rowIndex: number }) => boolean` | N
filter | Object | - | 过滤规则，支持多选(multiple)、单选(single)、输入框(input) 等三种形式。想要自定义过滤组件，可通过 `filter.component` 实现，自定义过滤组件需要包含参数 value 和事件 change。更多信息请查看当前页面中 `TableColumnFilter` 的详细文档。TS 类型：`TableColumnFilter` | N
sort-type | String | all | 当前列支持排序的方式，desc 表示当前列只能进行降序排列；asc 表示当前列只能进行升序排列；all 表示当前列既可升序排列，又可以降序排列。可选项：desc/asc/all。TS 类型：`SortType` `type SortType = 'desc' \| 'asc' \| 'all'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
sorter | Boolean / Function | false | 该列是否支持排序。值为 true 表示该列支持排序；值类型为函数，表示对本地数据 `data` 进行排序，返回值参考 [MDN Array.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)。泛型 T 指表格数据类型。TS 类型：`boolean \| SorterFun<T>` `type SorterFun<T> = (a: T, b: T) => number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
title | String | - | 自定义表头渲染。值类型为 string 表示使用插槽渲染，插槽名称为 title 的值。优先级高于 render。TS 类型：`string` | N
type | String | single | `colKey` 值为 `row-select` 时表示行选中列，有两种模式：单选和多选。 `type=single` 表示单选，`type=multiple` 表示多选。可选项：single/multiple | N

### TableColumnFilter

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attrs | Object | - | 用于透传筛选器属性到自定义组件 `component`，HTML 原生属性。TS 类型：`HTMLElementAttributes`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
class-names | String | - | 透传类名到自定义组件 `component`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
confirm-events | Array | - | 哪些事件触发后会进行过滤搜索（确认按钮无需配置，会默认触发搜索）。输入框组件示例：`confirmEvents: ['onEnter']`。TS 类型：`string[]` | N
label | String / Function | - | 过滤项标题文本，显示在“过滤结果行”中的列标题描述。一般用于表头标题和过滤文本行中的列标题不一样的场景。TS 类型：`string` | N
list | Array | - | 用于配置当前筛选器可选值有哪些，仅当 `filter.type` 等于 `single` 或 `multiple` 时有效。TS 类型：`Array<OptionData>`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
popup-props | Object | - | 透传 Popup 组件全部属性到筛选器浮层。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
props | Object | - | 用于透传筛选器属性到自定义组件 `component`，可以对筛选器进行任何原组件支持的属性配置。TS 类型：`FilterProps` `type FilterProps = RadioProps \| CheckboxProps \| InputProps \| { [key: string]: any }`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N
show-confirm-and-reset | Boolean | false | 是否显示重置和确认。值为真，过滤事件（filter-change）会在确定时触发；值为假，则数据变化时会立即触发过滤事件 | N
type | String | - | 用于设置筛选器类型：单选按钮筛选器、复选框筛选器、输入框筛选器。更多复杂组件，请更为使用 `component` 自定义任意组件。TS 类型：`FilterType` `type FilterType = 'input' \| 'single' \| 'multiple'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/table/type.ts) | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
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
