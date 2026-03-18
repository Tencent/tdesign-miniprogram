import { SuperComponent } from '../common/src/index';
export default class ScrollView extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    properties: {
        scrollIntoView: {
            type: StringConstructor;
        };
    };
}
