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
    properties: {
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        name?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        options?: {
            type: ArrayConstructor;
            value?: import("../radio/type").RadioOption[];
            required?: boolean;
        };
        value?: {
            type: StringConstructor;
            optionalTypes: (NumberConstructor | BooleanConstructor)[];
            value?: import("../radio/type").RadioValue;
            required?: boolean;
        };
        defaultValue?: {
            type: StringConstructor;
            value?: import("../radio/type").RadioValue;
            required?: boolean;
        };
    };
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
