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
    properties: import("./type").TdCheckboxProps;
    data: {
        classPrefix: string;
        classBasePrefix: string;
        active: boolean;
        halfChecked: boolean;
        optionLinked: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        onChange(e: any): void;
        initStatus(): void;
        toggle(): void;
        setDisabled(disabled: Boolean): void;
        changeActive(active: boolean): void;
        changeCheckAllHalfStatus(active: boolean): void;
        setOptionLinked(linked: Boolean): void;
    };
}
