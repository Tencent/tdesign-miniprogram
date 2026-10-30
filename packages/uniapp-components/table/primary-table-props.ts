/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPrimaryTableProps } from '../table/type';
export default {
  /** 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用 */
  dragSort: {
    type: String,
    validator(val: TdPrimaryTableProps['dragSort']): boolean {
      if (!val) return true;
      return ['row', 'row-handler', 'col', 'row-handler-col', 'drag-col'].includes(val);
    },
  },
  /** 自定义过滤状态行及清空筛选等 */
  filterRow: {
    type: String,
  },
  /** 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` */
  hideSortTips: Boolean,
  /** 是否支持多列排序 */
  multipleSort: Boolean,
  /** 当前排序列是否显示背景色 */
  showSortColumnBgColor: Boolean,
  /** 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序 */
  sort: {
    type: [Object, Array],
  },
  /** 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序，非受控属性 */
  defaultSort: {
    type: [Object, Array],
  },
};
