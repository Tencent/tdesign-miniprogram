import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class AvatarGroup extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdAvatarGroupProps;
    data: {
        prefix: string;
        classPrefix: string;
        hasChild: boolean;
        length: number;
        className: string;
    };
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    lifetimes: {
        attached(): void;
        ready(): void;
    };
    observers: {
        'cascading, size'(): void;
    };
    methods: {
        setClass(): void;
        handleMax(): void;
        onCollapsedItemClick(e: WechatMiniprogram.CustomEvent): void;
    };
}
