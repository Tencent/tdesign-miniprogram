import { SuperComponent } from '../common/src/index';
export default class Switch extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    properties: import("./type").TdSwitchProps;
    data: {
        prefix: string;
        classPrefix: string;
        checked: boolean;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(val: any): void;
    };
    methods: {
        handleSwitch(): void;
    };
}
