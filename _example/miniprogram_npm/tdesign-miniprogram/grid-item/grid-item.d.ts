import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class GridItem extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    properties: import("./type").TdGridItemProps;
    data: {
        prefix: string;
        classPrefix: string;
        gridItemStyle: string;
        gridItemWrapperStyle: string;
        gridItemContentStyle: string;
        align: string;
        column: number;
        describedbyID: string;
    };
    observers: {
        icon(icon: any): void;
    };
    lifetimes: {
        ready(): void;
    };
    updateStyle(): void;
    getWidthStyle(): string;
    getPaddingStyle(): string;
    getBorderStyle(): string;
    onClick(e: any): void;
    jumpLink(): void;
}
