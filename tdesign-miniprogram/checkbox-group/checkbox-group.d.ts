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
    properties: {
        defaultValue: {
            type: any;
            value: any;
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        max?: {
            type: NumberConstructor;
            value?: number;
            required?: boolean;
        };
        name?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        options?: {
            type: ArrayConstructor;
            value?: import("../checkbox/type").CheckboxOption[];
            required?: boolean;
        };
        value?: {
            type: ArrayConstructor;
            value?: import("../checkbox/type").CheckboxGroupValue;
            required?: boolean;
        };
    };
    observers: {
        value: () => void;
    };
    lifetimes: {
        attached(): void;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    methods: {
        getChilds(): any;
        updateChildren(): void;
        updateValue({ name, checked }: {
            name: any;
            checked: any;
        }): void;
        handleCreateMulCheckbox(): void;
        handleCheckAll(e: any): void;
        handleHalfCheck(len: number): void;
        handleOptionLinked(): void;
    };
}
