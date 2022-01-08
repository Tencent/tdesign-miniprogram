import { SuperComponent } from '../common/src/index';
export default class Icon extends SuperComponent {
    behaviors: ['wx://form-field-icon'];
    externalClasses: string[];
    properties: import("./type").TdIconProps;
    data: {
        classPrefix: string;
        fontSize: string;
    };
    observers: {
        size(val: any): void;
    };
    methods: {
        onTap(event: any): void;
    };
}
