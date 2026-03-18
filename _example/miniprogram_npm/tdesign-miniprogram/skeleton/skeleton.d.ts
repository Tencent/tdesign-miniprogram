import { SuperComponent } from '../common/src/index';
import { SkeletonRowColObj } from './type';
import { ClassName, Styles } from '../common/common';
export default class Skeleton extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdSkeletonProps;
    timer: any;
    data: {
        prefix: string;
        classPrefix: string;
        parsedRowCols: any[];
    };
    observers: {
        rowCol(): void;
        'loading, delay'(): void;
    };
    lifetimes: {
        attached(): void;
        detached(): void;
    };
    methods: {
        init(): void;
        getColItemClass(obj: SkeletonRowColObj): ClassName;
        getColItemStyle(obj: SkeletonRowColObj): Styles;
        clearTimer(): void;
        isShowSkeleton(): void;
    };
}
