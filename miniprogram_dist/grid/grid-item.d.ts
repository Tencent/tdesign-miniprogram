import { SuperComponent } from '../common/src/index';
export default class GridItem extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    relations: {
        './grid': {
            type: "ancestor";
            linked(this: GridItem, target: WechatMiniprogram.Component.TrivialInstance): void;
        };
    };
    properties: import("./type").TdGridItemProps;
    data: {
        classPrefix: string;
        gridItemStyle: string;
        gridItemWrapperStyle: string;
        gridItemContentStyle: string;
        align: string;
        layout: string;
    };
    updateStyle(): void;
    getWidthStyle(): string;
    getPaddingStyle(): string;
    getBorderStyle(): string;
    onClick(e: any): void;
    jumpLink(): void;
}
