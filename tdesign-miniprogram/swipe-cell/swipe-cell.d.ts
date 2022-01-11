import { SuperComponent } from '../common/src/index';
export default class SwiperCell extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSwipeCellProps;
    data: {
        wrapperStyle: string;
        closed: boolean;
        opened: boolean;
        classPrefix: string;
    };
    attached(): void;
    setSwipeWidth(): Promise<void>;
    detached(): void;
    open(): void;
    close(): void;
    closeOther(): void;
    onTap(): void;
    onActionTap(event: any): void;
}
