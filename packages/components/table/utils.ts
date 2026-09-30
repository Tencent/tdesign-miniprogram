import { classNames } from '../common/utils';
import type { BaseTableCol, TableRowData } from './type';

export function get(obj: any, path: string) {
  if (!obj || !path) return undefined;
  const keys = path.split('.');
  let result = obj;
  keys.forEach((key) => {
    if (result !== undefined && result !== null) {
      result = result[key];
    }
  });
  return result;
}

export function formatCSSUnit(unit: string | number | undefined) {
  if (!unit) return unit;
  return Number.isNaN(Number(unit)) ? unit : `${unit}px`;
}

export function getColumnClassName(col: BaseTableCol, context: Record<string, any>) {
  const columnClassName = col.className || (col as any)['class-name'];

  if (Array.isArray(columnClassName)) {
    return classNames(columnClassName.map((item) => getColumnClassName({ className: item }, context)));
  }

  return classNames(typeof columnClassName === 'function' ? columnClassName(context) : columnClassName);
}

// ------- 合并单元格（rowspan / colspan） -------

export interface SkipSpansValue {
  rowspan?: number;
  colspan?: number;
  skipped?: boolean;
}

export type SkipSpansMap = Map<string, SkipSpansValue>;

export interface CellSpanResult {
  rowspan?: number;
  colspan?: number;
  skipped: boolean;
}

/** 单元格唯一标识：优先取 rowKey 对应值，缺省时回退 rowIndex，避免 key 冲突 */
export function getCellKey(row: TableRowData, rowKey: string, colKey: string, rowIndex: number, colIndex: number) {
  const rowVal = get(row, rowKey || 'id');
  const rowPart = rowVal === undefined || rowVal === null || rowVal === '' ? `r${rowIndex}` : rowVal;
  const colPart = colKey || colIndex;
  return `${rowPart}_${colPart}`;
}

/** 计算合并单元格映射表 */
export function getSkipSpansMap(
  data: TableRowData[],
  columns: BaseTableCol[],
  rowKey: string,
  rowspanAndColspan: Function,
): SkipSpansMap {
  const skipSpansMap: SkipSpansMap = new Map();
  if (!rowspanAndColspan || !data?.length || !columns?.length) return skipSpansMap;

  const rowLen = data.length;
  const colLen = columns.length;

  for (let i = 0; i < rowLen; i += 1) {
    const row = data[i];
    for (let j = 0; j < colLen; j += 1) {
      const col = columns[j];
      const cellKey = getCellKey(row, rowKey, col.colKey, i, j);
      const state = skipSpansMap.get(cellKey) || {};
      const o = rowspanAndColspan({ row, col, rowIndex: i, colIndex: j }) || {};
      if (o.rowspan || o.colspan || state.rowspan || state.colspan) {
        if (o.rowspan) state.rowspan = o.rowspan;
        if (o.colspan) state.colspan = o.colspan;
        skipSpansMap.set(cellKey, state);
      }
      // 标记被合并覆盖的单元格（仅 rowspan / colspan > 1 时），并对越界跨度做裁剪
      if ((state.rowspan && state.rowspan > 1) || (state.colspan && state.colspan > 1)) {
        const maxRowIndex = Math.min(i + (state.rowspan || 1), rowLen);
        const maxColIndex = Math.min(j + (state.colspan || 1), colLen);
        for (let ri = i; ri < maxRowIndex; ri += 1) {
          for (let ci = j; ci < maxColIndex; ci += 1) {
            if (ri !== i || ci !== j) {
              const key = getCellKey(data[ri], rowKey, columns[ci].colKey, ri, ci);
              const s = skipSpansMap.get(key) || {};
              s.skipped = true;
              skipSpansMap.set(key, s);
            }
          }
        }
      }
    }
  }
  return skipSpansMap;
}

/** 获取单元格合并状态，仅 rowspan / colspan > 1 时才视为合并 */
export function handleCellSpan(cellKey: string, skipSpansMap?: SkipSpansMap): CellSpanResult {
  const result: CellSpanResult = { skipped: false };
  const spanState = skipSpansMap?.get(cellKey);
  if (!spanState) return result;
  if (spanState.rowspan && spanState.rowspan > 1) result.rowspan = spanState.rowspan;
  if (spanState.colspan && spanState.colspan > 1) result.colspan = spanState.colspan;
  if (spanState.skipped) result.skipped = true;
  return result;
}

/** 合并单元格场景：是否为最后一行（用于移除底部边框） */
export function isLastRowInSpan(rowIndex: number, rowspan?: number, totalDataLength?: number): boolean {
  return !!(rowspan && totalDataLength && rowIndex + rowspan === totalDataLength);
}

/** 合并单元格场景：是否为第一列（用于移除左边框） */
export function isFirstColumnInSpan(colIndex: number): boolean {
  return colIndex === 0;
}

// ------- 超出省略（ellipsis / ellipsisTitle） -------

export interface EllipsisResult {
  /** 是否开启超出省略 */
  enabled: boolean;
  /** 浮层展示内容，缺省时回退为单元格/表头完整内容 */
  content?: string;
  /** 透传给 Popover 组件的属性 */
  props: Record<string, any>;
}

/**
 * 解析 `ellipsis` / `ellipsisTitle` 配置。
 * 支持 `boolean` / `Object`（透传 Popover）/ `{ props, content }` / `Function`（按单元格动态返回）。
 * `ellipsisTitle` 优先级高于 `ellipsis`，由调用方决定取值。
 */
export function resolveEllipsis(value: any, params: Record<string, any>): EllipsisResult {
  const disabled: EllipsisResult = { enabled: false, props: {} };
  let result = value;

  if (typeof value === 'function') {
    try {
      result = value(params);
    } catch (err) {
      // 函数可能依赖行数据（表头场景没有 row），异常时按未开启超出省略处理
      return disabled;
    }
  }

  if (result === false || result === null || result === undefined) return disabled;
  if (typeof result === 'string') return { enabled: true, content: result, props: {} };
  if (typeof result !== 'object') return { enabled: !!result, props: {} };

  // `{ props, content }` 中 props 透传 Popover；其余形式整体作为 Popover 属性透传
  const props: Record<string, any> = result.props && typeof result.props === 'object' ? { ...result.props } : {};
  if (!result.props) {
    Object.keys(result).forEach((key) => {
      if (key !== 'content') props[key] = result[key];
    });
  }

  const content = typeof result.content === 'function' ? result.content() : result.content;
  return { enabled: true, content: typeof content === 'string' ? content : undefined, props };
}

/** 是否存在列开启了超出省略 */
export function hasEllipsisColumn(columns: BaseTableCol[]): boolean {
  return (columns || []).some((col) => !!col.ellipsis || !!col.ellipsisTitle);
}
