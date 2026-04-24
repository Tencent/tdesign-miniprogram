import { SuperComponent } from '../common/src/index';
import type { TableRowData } from './type';
export default class Table extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdBaseTableProps<TableRowData>;
    data: {
        prefix: string;
        classPrefix: string;
        tableClasses: string;
        tableContentStyles: string;
        tableElementStyles: string;
        theadClasses: string;
        tbodyClasses: string;
        renderData: any[];
        isEmpty: boolean;
        colStyles: string[];
        thClassNames: string[];
        tdClassNames: string[][];
        hasFixedColumn: boolean;
        scrollableToLeft: boolean;
        scrollableToRight: boolean;
        contentClasses: string;
    };
    observers: {
        'bordered, stripe, verticalAlign, loading, rowspanAndColspan, tableLayout, height, maxHeight, tableContentWidth, showHeader, columns, data, cellEmptyContent, rowKey, fixedRows'(this: any): void;
    };
    lifetimes: {
        attached(this: any): void;
    };
    methods: {
        updateTable(this: any): void;
        measureAndFixStickyPositions(this: any, hasFixedHeader: boolean, fixedTopRows: number, fixedBottomRows: number, dataLen: number): void;
        onRowClick(this: any, e: any): void;
        onCellClick(this: any, e: any): void;
        onScroll(this: any, e: any): void;
    };
}
