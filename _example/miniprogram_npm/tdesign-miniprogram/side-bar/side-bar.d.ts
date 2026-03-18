import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class SideBar extends SuperComponent {
    externalClasses: string[];
    children: any[];
    relations: RelationsOptions;
    controlledProps: {
        key: string;
        event: string;
    }[];
    properties: import("./type").TdSideBarProps;
    observers: {
        value(v: any): void;
    };
    data: {
        classPrefix: string;
        prefix: string;
    };
    methods: {
        doChange({ value, label }: {
            value: any;
            label: any;
        }): void;
    };
}
