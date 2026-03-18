import { ChatMarkdownProps } from '../chat-markdown/index';
export interface TdChatContentProps {
    content: {
        type: ObjectConstructor;
        value?: TdChatContentType;
        required?: boolean;
    };
    markdownProps?: {
        type: ObjectConstructor;
        value?: ChatMarkdownProps;
    };
    role: {
        type: StringConstructor;
        value?: 'user' | 'assistant' | 'system';
        required?: boolean;
    };
    status?: {
        type: StringConstructor;
        value?: 'error' | '';
    };
}
export interface TdChatContentType {
    type: 'text' | 'markdown';
    data: string;
}
