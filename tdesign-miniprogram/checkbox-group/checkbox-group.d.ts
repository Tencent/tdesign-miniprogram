import { SuperComponent } from '../common/src/index';
export default class CheckBoxGroup extends SuperComponent {
    externalClasses: string[];
    relations: {
        '../checkbox/checkbox': {
            type: "descendant";
            linked(): void;
        };
    };
    data: {
        classPrefix: string;
        checkboxOptions: any[];
    };
    properties: import("../checkbox/type").TdCheckboxGroupProps;
    observers: {
        value: () => void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        updateChildren(type?: string): void;
        updateValue({ name, checked }: {
            name: any;
            checked: any;
        }, type?: string): void;
        handleCreateMulCheckbox(): void;
        handleCheckAll(e: any): void;
        handleHalfCheck(type: string, len: number): void;
        handleOptionLinked(): void;
    };
}
