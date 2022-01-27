import { SuperComponent } from '../common/src/index';
export default class Switch extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdSwitchProps;
    data: {
        classPrefix: string;
        isActive: boolean;
        bodyStyle: string;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        switchChange(): void;
        handleColorChange(): void;
        onTapBackground(): void;
        onTapDot(): void;
    };
}
