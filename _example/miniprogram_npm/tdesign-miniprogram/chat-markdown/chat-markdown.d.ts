import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import { TdChatMarkdownProps } from './type';
export interface ChatMarkdownProps extends TdChatMarkdownProps {
}
export default class ChatMarkdown extends SuperComponent {
    options: ComponentsOptionsType;
    properties: TdChatMarkdownProps;
    data: {
        classPrefix: string;
        nodes: any[];
        name: string;
    };
    observers: {
        content: (markdown: string) => void;
    };
    methods: {
        parseMarkdown(markdown: string): void;
    };
    lifetimes: {
        attached(): void;
    };
}
