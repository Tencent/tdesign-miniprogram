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
    properties: import("./type").TdRadioProps;
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
        classBasePrefix: string;
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
