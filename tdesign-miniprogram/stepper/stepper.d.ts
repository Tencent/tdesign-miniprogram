import { SuperComponent } from '../common/src/index';
export default class Stepper extends SuperComponent {
    externalClasses: string[];
    options: {
        addGlobalClass: boolean;
    };
    properties: import("./type").TdStepperProps;
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
    attached(): void;
    isDisabled(type: any): boolean;
    format(value: any): number;
    setValue(value: any): void;
    minusValue(): boolean;
    plusValue(): boolean;
    changeValue(e: any): void;
    blurHandler(e: any): void;
}
