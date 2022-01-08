import { SuperComponent } from '../common/src/index';
export default class Badge extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdBadgeProps;
    data: {
        classPrefix: string;
        value: string;
    };
}
