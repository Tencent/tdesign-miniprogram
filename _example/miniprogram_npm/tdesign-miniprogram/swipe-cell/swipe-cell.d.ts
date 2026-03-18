import { SuperComponent } from '../common/src/index';
export default class SwiperCell extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSwipeCellProps;
    data: {
        prefix: string;
        wrapperStyle: string;
        closed: boolean;
        classPrefix: string;
        skipMove: boolean;
    };
    observers: {
        'left, right'(): void;
    };
    lifetimes: {
        attached(): void;
        ready(): void;
        detached(): void;
    };
    setSwipeWidth(): void;
    skipMove(): void;
    catchMove(): void;
    open(): void;
    close(): void;
    closeOther(): void;
    onTap(): void;
    onActionTap(event: any): void;
}
