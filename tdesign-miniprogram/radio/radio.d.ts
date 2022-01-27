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
        onChange(e: any): void;
        handleInitStatus(): void;
        toggle(): void;
        changeActive(active: boolean): void;
        setDisabled(disabled: Boolean): void;
        setOptionLinked(linked: Boolean): void;
    };
}
