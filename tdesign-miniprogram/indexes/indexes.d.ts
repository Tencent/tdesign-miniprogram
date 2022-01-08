import { SuperComponent } from '../common/src/index';
export default class IndexBar extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdIndexesProps;
    observers: {
        list(this: IndexBar, newValue: any): void;
        height(this: IndexBar): void;
    };
    data: {
        classPrefix: string;
        clientHeight: number;
        groups: any[];
        activeGroup: any;
        currentGroup: any;
        showScrollTip: boolean;
    };
    timer: any;
    groupTop: any;
    btnBar: any;
    ready(): void;
    getHeight(): void;
    getDomInfo(): void;
    computedIndex(tapY: any): any;
    computedIndexByScrollTop(scrollTop: number): number;
    activeIndexWhenScroll(scrollTop: number): void;
    scrollToY(tapY: any): void;
    scrollToAnchor(index: any): void;
    switchScrollTip(val: any): void;
    throttleScroll(): Promise<void>;
    onTouchStart(): void;
    onTouchMove(e: any): void;
    onTouchCancel(): void;
    onTouchEnd(e: any): void;
    onCellTap(e: any): void;
    onListScroll(e: any): void;
}
