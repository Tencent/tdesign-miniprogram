import { ComponentsOptionsType, SuperComponent } from '../common/src/index';
export default class Drawer extends SuperComponent {
    behaviors: string[];
    externalClasses: any[];
    options: ComponentsOptionsType;
    properties: import("./type").TdDrawerProps;
    data: {
        classPrefix: string;
    };
    methods: {
        onVisibleChange({ detail }: {
            detail: any;
        }): void;
        onItemClick(detail: any): void;
    };
}
