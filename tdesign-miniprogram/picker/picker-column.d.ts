import { SuperComponent } from '../common/src/index';
export default class PickerColumn extends SuperComponent {
    relations: {
        './picker': {
            type: "parent";
        };
    };
    properties: import("./type").TdPickerItemProps;
    observers: {
        value(this: PickerColumn): void;
        options(this: PickerColumn): void;
    };
    data: {
        prefix: string;
        offset: number;
        duration: number;
    };
    methods: {
        onTouchStart(event: any): void;
        onTouchMove(event: any): void;
        onTouchEnd(): void;
        updateColumns(): void;
        resetOrigin(): void;
        getCount(): any;
    };
    created(): void;
}
