import { SuperComponent } from '../../../components/common/src/index';
export default class ChatThinking extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdChatThinkingProps;
    data: {
        localCollapsed: boolean;
        contentStyle: string;
        classPrefix: string;
    };
    observers: {
        maxHeight(): void;
    };
    methods: {
        handleCollapse(): void;
        setContentStyle(): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
