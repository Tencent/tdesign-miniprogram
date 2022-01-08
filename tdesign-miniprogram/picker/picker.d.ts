import { SuperComponent } from '../common/src/index';
export default class Picker extends SuperComponent {
    /**
     * Component properties
     */
    properties: import("./type").TdPickerProps;
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    relations: {
        './picker-column': {
            type: "child";
        };
    };
    /**
     * Component initial data
     */
    data: {
        classPrefix: string;
    };
    /**
     * Component methods
     */
    methods: {
        getPickerColumns(): any[];
        getSelectedValues(): {
            index: any;
            value: any;
        };
        onConfirm(): void;
        onCancel(): void;
        triggerChange({ column, index, value }: {
            column: any;
            index: any;
            value: any;
        }): void;
    };
    ready(): void;
}
