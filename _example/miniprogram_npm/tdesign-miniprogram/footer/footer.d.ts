import { SuperComponent } from '../common/src/index';
export default class Footer extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdFooterProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
}
