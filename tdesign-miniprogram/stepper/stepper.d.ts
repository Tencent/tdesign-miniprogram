import { SuperComponent } from '../common/src/index';
export default class Stepper extends SuperComponent {
    externalClasses: string[];
    options: {
        addGlobalClass: boolean;
    };
    properties: import("./type").TdStepperProps;
    observers: {
        value(v: any): void;
    };
    data: {
        currentValue: Number;
        classPrefix: String;
        prefix: String;
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
