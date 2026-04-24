import { SuperComponent } from '../common/src/index';
export default class Text extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdTextProps;
    data: {
        prefix: string;
        classPrefix: string;
        className: string;
        isExpanded: boolean;
        isCopied: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    observers: {
        'theme, disabled'(): void;
    };
    methods: {
        updateClass(): void;
        onExpand(): void;
        onCollapse(): void;
        onCopy(): void;
    };
}
