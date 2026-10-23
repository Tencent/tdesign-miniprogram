/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPrimaryTableProps } from './type';
const props: TdPrimaryTableProps = {
  /** 列配置，泛型 T 指表格数据类型 */
  columns: {
    type: Array,
    value: [],
  },
  /** 列配置功能中，当前显示的列 */
  displayColumns: {
    type: Array,
    value: null,
  },
  /** 列配置功能中，当前显示的列，非受控属性 */
  defaultDisplayColumns: {
    type: Array,
  },
  /** 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用 */
  dragSort: {
    type: String,
  },
  /** 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable) */
  dragSortOptions: {
    type: Object,
  },
  /** 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider` */
  expandIcon: {
    type: Boolean,
    value: true,
  },
  /** 是否允许点击行展开 */
  expandOnRowClick: {
    type: Boolean,
  },
  /** 展开行内容，泛型 T 指表格数据类型 */
  expandedRow: {
    type: String,
  },
  /** 展开行 */
  expandedRowKeys: {
    type: Array,
    value: null,
  },
  /** 展开行，非受控属性 */
  defaultExpandedRowKeys: {
    type: Array,
    value: [],
  },
  /** 自定义过滤状态行及清空筛选等 */
  filterRow: {
    type: String,
  },
  /** 过滤数据的值 */
  filterValue: {
    type: Object,
    value: null,
  },
  /** 过滤数据的值，非受控属性 */
  defaultFilterValue: {
    type: Object,
  },
  /** 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` */
  hideSortTips: {
    type: Boolean,
  },
  /** 半选状态行。选中行请更为使用 `selectedRowKeys` 控制 */
  indeterminateSelectedRowKeys: {
    type: Array,
  },
  /** 是否支持多列排序 */
  multipleSort: {
    type: Boolean,
    value: false,
  },
  /** 行选中功能，是否在分页时保留上一页选中结果不清空。分页场景下，会全选所有页数据，保留跨分页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页。 */
  reserveSelectedRowOnPaginate: {
    type: Boolean,
    value: true,
  },
  /** 是否在点击整行时选中 */
  selectOnRowClick: {
    type: Boolean,
  },
  /** 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制 */
  selectedRowKeys: {
    type: Array,
    value: null,
  },
  /** 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制，非受控属性 */
  defaultSelectedRowKeys: {
    type: Array,
    value: [],
  },
  /** 当前排序列是否显示背景色 */
  showSortColumnBgColor: {
    type: Boolean,
    value: false,
  },
  /** 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序 */
  sort: {
    type: null,
    value: null,
  },
  /** 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序，非受控属性 */
  defaultSort: {
    type: null,
  },
};

export default props;
