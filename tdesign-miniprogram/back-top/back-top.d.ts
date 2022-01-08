import { SuperComponent } from '../common/src/index';
export default class BackTop extends SuperComponent {
    /**
     * Component properties
     */
    externalClasses: string[];
    properties: import("./type").TdBackTopProps;
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
    toTop(): void;
}
