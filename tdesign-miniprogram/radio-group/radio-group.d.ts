import { SuperComponent } from '../common/src/index';
export default class RadioGroup extends SuperComponent {
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
        radioOptions: any[];
    };
    relations: {
        '../radio/radio': {
            type: "descendant";
            linked(target: any): void;
        };
    };
    properties: import("../radio/type").TdRadioGroupProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    lifetimes: {
        attached(): void;
    };
    observers: {
        value(): void;
    };
    methods: {
        getChilds(): any;
        updateValue(value: any): void;
        handleRadioChange(e: any): void;
        initWithOptions(): void;
    };
}
