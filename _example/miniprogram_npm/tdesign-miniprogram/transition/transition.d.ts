import { SuperComponent } from '../common/src/index';
export default class Transition extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    data: {
        classPrefix: string;
    };
}
