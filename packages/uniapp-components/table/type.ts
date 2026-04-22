/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdLoadingProps as LoadingProps } from '../loading/type';
import type { ClassName } from '../common/common';

export interface TdBaseTableProps<T extends TableRowData = TableRowData> {
  /**
   * 是否显示表格边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 单元格数据为空时呈现的内容
   */
  cellEmptyContent?: string;
  /**
   * 列配置，泛型 T 指表格数据类型
   * @default []
   */
  columns?: Array<BaseTableCol<T>>;
  /**
   * 数据源，泛型 T 指表格数据类型
   * @default []
   */
  data?: Array<T>;
  /**
   * 空表格呈现样式，支持全局配置 `GlobalConfigProvider`
   * @default ''
   */
  empty?: string;
  /**
   * 固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行
   */
  fixedRows?: Array<number>;
  /**
   * 表尾总结行
   */
  footerSummary?: string;
  /**
   * 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight`
   */
  height?: string | number;
  /**
   * 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态
   */
  loading?: boolean | null;
  /**
   * 透传加载组件全部属性
   */
  loadingProps?: Partial<LoadingProps>;
  /**
   * 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px
   */
  maxHeight?: string | number;
  /**
   * 唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法
   * @default 'id'
   */
  rowKey: string;
  /**
   * 用于自定义合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`
   */
  rowspanAndColspan?: TableRowspanAndColspanFunc<T>;
  /**
   * 是否显示表头
   * @default true
   */
  showHeader?: boolean;
  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: boolean;
  /**
   * 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度
   * @default ''
   */
  tableContentWidth?: string;
  /**
   * 表格布局方式
   * @default fixed
   */
  tableLayout?: 'auto' | 'fixed';
  /**
   * 行内容上下方向对齐
   * @default middle
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
  /**
   * 单元格点击时触发
   */
  onCellClick?: (context: BaseTableCellEventContext<T>) => void;
  /**
   * 行点击时触发，泛型 T 指表格数据类型
   */
  onRowClick?: (context: RowEventContext<T>) => void;
}

export interface BaseTableCol<T extends TableRowData = TableRowData> {
  /**
   * 列横向对齐方式
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /**
   * 自定义单元格渲染。默认使用 `colKey` 的值作为自定义当前列的插槽名称。<br/>如果 `cell` 值类型为 Function 表示以函数形式渲染单元格。值类型为 string 表示使用插槽渲染，插槽名称为 cell 的值。优先级高于 `render`。泛型 T 指表格数据类型
   */
  cell?: string | ((params: BaseTableCellParams<T>) => string);
  /**
   * 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型
   */
  className?: TableColumnClassName<T> | TableColumnClassName<T>[];
  /**
   * 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列
   * @default ''
   */
  colKey?: string;
  /**
   * 固定列显示位置
   * @default left
   */
  fixed?: 'left' | 'right';
  /**
   * 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth`
   */
  minWidth?: string | number;
  /**
   * 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果
   */
  width?: string | number;
}

export type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan;

export interface RowspanColspan {
  colspan?: number;
  rowspan?: number;
}

export interface BaseTableCellEventContext<T> {
  row: T;
  col: BaseTableCol;
  rowIndex: number;
  colIndex: number;
  e: MouseEvent;
}

export interface RowEventContext<T> {
  row: T;
  index: number;
  e: MouseEvent;
}

export interface TableRowData {
  [key: string]: any;
  children?: TableRowData[];
}

export interface BaseTableCellParams<T> {
  row: T;
  rowIndex: number;
  col: BaseTableCol<T>;
  colIndex: number;
}

export type TableColumnClassName<T> = ClassName | ((context: CellData<T>) => ClassName);

export interface CellData<T> extends BaseTableCellParams<T> {
  type: 'th' | 'td';
}

export type DataType = TableRowData;
