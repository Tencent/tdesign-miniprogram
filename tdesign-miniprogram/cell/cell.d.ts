import { SuperComponent } from '../common/src/index';
export default class Cell extends SuperComponent {
    /**
     * Component properties
     */
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdCellProps;
    /**
     * Component initial data
     */
    data: {
        prefix: string;
        classPrefix: string;
    };
    /**
     * Component methods
     */
    onClick(e: any): void;
    jumpLink(urlKey?: string, link?: string): void;
}
