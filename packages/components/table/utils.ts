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
