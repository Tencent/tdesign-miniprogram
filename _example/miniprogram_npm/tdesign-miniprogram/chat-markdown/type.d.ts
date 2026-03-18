export interface TdChatMarkdownProps {
    content: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    options?: {
        type: ObjectConstructor;
        value?: TdChatContentMDOptions;
    };
}
export interface TdChatContentMDOptions {
    gfm?: boolean;
    pedantic?: boolean;
    smartLists?: boolean;
    breaks?: boolean;
}
