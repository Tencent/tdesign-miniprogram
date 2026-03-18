import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import { TdChatContentProps } from './type';
export interface ChatContentProps extends TdChatContentProps {
}
export default class ChatContent extends SuperComponent {
    options: ComponentsOptionsType;
    properties: TdChatContentProps;
    data: {
        classPrefix: string;
        textInfo: string;
    };
    observers: {
        content(): void;
    };
    methods: {
        getEscapeReplacement(ch: any): any;
        escape(html: any, encode?: boolean): any;
        setTextInfo(): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
