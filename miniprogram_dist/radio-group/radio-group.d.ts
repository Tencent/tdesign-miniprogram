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
            linked(): void;
        };
    };
    properties: import("../radio/type").TdRadioGroupProps;
    lifetimes: {
        attached(): void;
    };
    observers: {
        value: () => void;
    };
    methods: {
        updateChildren(): void;
        updateValue(item: any): void;
        handleGroupSelect(e: any): void;
        handleOptionLinked(): void;
        handleCreateMulRadio(): void;
    };
}
