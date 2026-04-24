import type { BaseTableCol, TableRowData } from './type';
export declare function get(obj: any, path: string): any;
export declare function formatCSSUnit(unit: string | number | undefined): string | number;
export declare function getColumnClassName(col: BaseTableCol, context: Record<string, any>): any;
export interface SkipSpansValue {
    rowspan?: number;
    colspan?: number;
    skipped?: boolean;
}
export declare type SkipSpansMap = Map<string, SkipSpansValue>;
export interface CellSpanResult {
    rowspan?: number;
    colspan?: number;
    skipped: boolean;
}
export declare function getCellKey(row: TableRowData, rowKey: string, colKey: string, rowIndex: number, colIndex: number): string;
export declare function getSkipSpansMap(data: TableRowData[], columns: BaseTableCol[], rowKey: string, rowspanAndColspan: Function): SkipSpansMap;
export declare function handleCellSpan(cellKey: string, skipSpansMap?: SkipSpansMap): CellSpanResult;
export declare function isLastRowInSpan(rowIndex: number, rowspan?: number, totalDataLength?: number): boolean;
export declare function isFirstColumnInSpan(colIndex: number): boolean;
