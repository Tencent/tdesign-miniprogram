import { SuperComponent } from '../common/src/index';
export default class Stepper extends SuperComponent {
    externalClasses: string[];
    properties: {
        disableInput?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        inputWidth?: {
            type: NumberConstructor;
            value?: number;
        };
        integer?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        max?: {
            type: NumberConstructor;
            value?: number;
        };
        min?: {
            type: NumberConstructor;
            value?: number;
        };
        size?: {
            type: StringConstructor;
            value?: import("../common/common").SizeEnum;
        };
        step?: {
            type: NumberConstructor;
            value?: number;
        };
        theme?: {
            type: StringConstructor;
            value?: "outline" | "filled" | "normal";
        };
        value?: {
            type: null;
            value?: string | number;
        };
        defaultValue?: {
            type: null;
            value?: string | number;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(v: any): void;
    };
    data: {
        currentValue: number;
        classPrefix: string;
        prefix: string;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        isDisabled(type: any): boolean;
        getLen(num: number): number;
        add(a: number, b: number): number;
        format(value: any): string;
        setValue(value: any): void;
        minusValue(): boolean;
        plusValue(): boolean;
        filterIllegalChar(value: string | number): string;
        updateCurrentValue(value: any): void;
        handleFocus(e: any): void;
        handleInput(e: any): void;
        handleBlur(e: any): void;
    };
}
