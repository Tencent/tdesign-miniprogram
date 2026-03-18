import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
export default class ChatMessage extends SuperComponent {
    options: ComponentsOptionsType;
    properties: import("./type").TdChatMessageProps;
    data: {
        classPrefix: string;
        article: string;
        showAvatar: any;
        showName: any;
        showDateTime: any;
        contentClasses: any[];
        chatItemClass: any[];
    };
    observers: {
        avatar(): void;
        name(): void;
        datetime(): void;
        classPrefix(): void;
        'classPrefix, variant, placement, showDateTime'(): void;
    };
    methods: {
        handleLongPress(e: any): void;
        setShowAvatar(): void;
        setShowName(): void;
        setShowDateTime(): void;
        setContentClasses(): void;
        setChatItemClass(): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
