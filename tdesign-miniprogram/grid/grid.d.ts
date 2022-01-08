import { SuperComponent } from '../common/src/index';
export default class Grid extends SuperComponent {
    externalClasses: string[];
    relations: {
        './grid-item': {
            type: "descendant";
        };
    };
    properties: import("./type").TdGridProps;
    data: {
        classPrefix: string;
        contentStyle: string;
    };
    observers: {
        'border,gutter,column,hover,align'(): void;
    };
    lifetimes: {
        attached(): void;
        detached(): void;
        created(): void;
    };
    updateContentStyle(): void;
    getContentMargin(): string;
    destroyed(): void;
}
