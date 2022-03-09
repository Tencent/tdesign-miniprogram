import { SuperComponent } from '../common/src/index';
export default class Radio extends SuperComponent {
    externalClasses: string[];
    relations: {
        '../radio-group/radio-group': {
            type: "ancestor";
        };
    };
    options: {
        multipleSlots: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    properties: {
        align?: {
            type: StringConstructor;
            value?: "left" | "right";
            required?: boolean;
        };
        checked?: {
            type: BooleanConstructor;
            value?: boolean;
            required?: boolean;
        };
        defaultChecked?: {
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
            type: StringConstructor;
            optionalTypes: ArrayConstructor[];
            value?: string[] | "fill-circle" | "stroke-line";
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
        value?: {
            type: StringConstructor;
            optionalTypes: (NumberConstructor | BooleanConstructor)[];
            value?: import("./type").RadioValue;
            required?: boolean;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        checked(isChecked: Boolean): void;
    };
    data: {
        prefix: string;
        active: boolean;
        classPrefix: string;
        customIcon: boolean;
        optionLinked: boolean;
        iconVal: any[];
    };
    methods: {
        handleTap(e: any): void;
        initStatus(): void;
        setDisabled(disabled: Boolean): void;
    };
}
