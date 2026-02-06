import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
export default class ChatActionbar extends SuperComponent {
    options: ComponentsOptionsType;
    properties: import("./type").TdChatActionbarProps;
    data: {
        actions: any[];
        classPrefix: string;
        pComment: string;
        iconMap: {
            good: string;
            bad: string;
            replay: string;
            copy: string;
            share: string;
            quote: string;
        };
        iconActiveMap: {
            good: string;
            bad: string;
        };
        widthStyle: string;
        popoverStyle: string;
        popoverPosition: string;
        longpressVisible: boolean;
    };
    observers: {
        comment(newVal: any): void;
        'actionBar, pComment, placement'(): void;
        longPressPosition(newVal: any): void;
    };
    methods: {
        filterSpecialChars(content: string): string;
        handleActionClick(e: any): void;
        handleCopy(): void;
        setActions(): void;
        setPComment(newVal: any): void;
        showPopover(pos: any): void;
        hidePopover(): void;
        onVisibleChange(e: any): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
