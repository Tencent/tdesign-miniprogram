import { SuperComponent } from '../common/src/index';
export default class CheckBox extends SuperComponent {
    externalClasses: string[];
    relations: {
        '../checkbox-group/checkbox-group': {
            type: "ancestor";
        };
    };
    options: {
        multipleSlots: boolean;
    };
    properties: {
        defaultChecked: {
            type: any;
            value: any;
        };
        align?: {
            type: StringConstructor;
            value?: "left" | "right";
            required?: boolean;
        };
        checkAll?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        checked?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        color?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        content?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        contentDisabled?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        externalClasses?: {
            type: ArrayConstructor;
            value?: ["t-class", "t-class-icon", "t-class-label", "t-class-content"];
            required?: boolean;
        };
        icon?: {
            type: ArrayConstructor;
            value?: string[];
            required?: boolean;
        };
        indeterminate?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        label?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        maxContentRow?: {
            type: NumberConstructor;
            value?: number;
            required?: boolean;
        };
        maxLabelRow?: {
            type: NumberConstructor;
            value?: number;
            required?: boolean;
        };
        name?: {
            type: StringConstructor;
            value?: string;
            required?: boolean;
        };
        readonly?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        value?: {
            type: StringConstructor;
            optionalTypes: NumberConstructor[];
            value?: string | number;
            required?: boolean;
        };
    };
    data: {
        classPrefix: string;
        prefix: string;
        active: boolean;
        halfChecked: boolean;
        optionLinked: boolean;
        canCancel: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    observers: {
        checked: (isChecked: any) => void;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    methods: {
        onChange(e: any): void;
        initStatus(): void;
        setCancel(cancel: boolean): void;
        setDisabled(disabled: Boolean): void;
        changeCheckAllHalfStatus(active: boolean): void;
        setOptionLinked(linked: Boolean): void;
    };
}
