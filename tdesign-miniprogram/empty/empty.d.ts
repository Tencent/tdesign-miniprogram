import { SuperComponent } from '../common/src/index';
export default class extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdEmptyProps;
    data: {
        classPrefix: string;
    };
}
