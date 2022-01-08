import { SuperComponent } from '../common/src/index';
export default class Skeleton extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdSkeletonProps;
    observers: {
        rowCol(this: any, val: any): void;
    };
    data: {
        classPrefix: string;
        isNumList: any[];
        rowStyles: any[];
    };
}
