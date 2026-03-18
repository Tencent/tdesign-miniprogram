import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class SideBarItem extends SuperComponent {
    externalClasses: string[];
    properties: {
        tId: {
            type: StringConstructor;
        };
        badgeProps?: {
            type: ObjectConstructor;
            value?: import("../badge").BadgeProps;
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        icon?: {
            type: null;
            value?: string | object;
        };
        label?: {
            type: StringConstructor;
            value?: string;
        };
        value?: {
            type: null;
            value?: string | number;
        };
    };
    relations: RelationsOptions;
    observers: {
        icon(v: any): void;
        disabled(v: any): void;
    };
    data: {
        classPrefix: string;
        prefix: string;
        active: boolean;
        isPre: boolean;
        isNext: boolean;
    };
    methods: {
        updateActive(value: any): void;
        handleClick(): void;
    };
}
