import { SuperComponent } from '../../../components/common/src/index';
import { TdChatThinkingProps } from './type';
export declare type ChatThinkingProps = TdChatThinkingProps;
export default class ChatThinking extends SuperComponent {
    behaviors: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: TdChatThinkingProps;
    data: {
        localCollapsed: boolean;
        contentStyle: string;
        classPrefix: string;
    };
    observers: {
        maxHeight(): void;
        collapsed(val: boolean): void;
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
