import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Grid extends SuperComponent {
    externalClasses: string[];
    relations: RelationsOptions;
    properties: import("./type").TdGridProps;
    data: {
        prefix: string;
        classPrefix: string;
        contentStyle: string;
    };
    observers: {
        'column,hover,align,gutter,border'(): void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        doForChild(action: (item: WechatMiniprogram.Component.TrivialInstance) => void): void;
        updateContentStyle(): void;
        getContentMargin(): string;
    };
}
