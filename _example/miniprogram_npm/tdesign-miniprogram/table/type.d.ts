import { LoadingProps } from '../loading/index';
import type { ClassName } from '../common/common';
export interface TdBaseTableProps<T extends TableRowData = TableRowData> {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    cellEmptyContent?: {
        type: StringConstructor;
        value?: string;
    };
    columns?: {
        type: ArrayConstructor;
        value?: Array<BaseTableCol<T>>;
    };
    data?: {
        type: ArrayConstructor;
        value?: Array<T>;
    };
    empty?: {
        type: StringConstructor;
        value?: string;
    };
    fixedRows?: {
        type: ArrayConstructor;
        value?: Array<number>;
    };
    footerSummary?: {
        type: StringConstructor;
        value?: string;
    };
    height?: {
        type: null;
        value?: string | number;
    };
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    loadingProps?: {
        type: ObjectConstructor;
        value?: Partial<LoadingProps>;
    };
    maxHeight?: {
        type: null;
        value?: string | number;
    };
    rowKey: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    rowspanAndColspan?: {
        type: undefined;
        value?: TableRowspanAndColspanFunc<T>;
    };
    showHeader?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    stripe?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    tableContentWidth?: {
        type: StringConstructor;
        value?: string;
    };
    tableLayout?: {
        type: StringConstructor;
        value?: 'auto' | 'fixed';
    };
    verticalAlign?: {
        type: StringConstructor;
        value?: 'top' | 'middle' | 'bottom';
    };
}
export interface BaseTableCol<T extends TableRowData = TableRowData> {
    align?: 'left' | 'right' | 'center';
    cell?: string | ((params: BaseTableCellParams<T>) => string);
    className?: TableColumnClassName<T> | TableColumnClassName<T>[];
    colKey?: string;
    fixed?: 'left' | 'right';
    minWidth?: string | number;
    width?: string | number;
}
export declare type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan;
export interface RowspanColspan {
    colspan?: number;
    rowspan?: number;
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
export declare type TableColumnClassName<T> = ClassName | ((context: CellData<T>) => ClassName);
export interface CellData<T> extends BaseTableCellParams<T> {
    type: 'th' | 'td';
}
export declare type DataType = TableRowData;
