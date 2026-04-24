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
    streaming?: {
        type: ObjectConstructor;
        value?: TdChatMarkdownStreamingOptions;
    };
}
export interface TdChatContentMDOptions {
    gfm?: boolean;
    pedantic?: boolean;
    smartLists?: boolean;
    breaks?: boolean;
}
export interface TdChatMarkdownStreamingOptions {
    hasNextChunk?: boolean;
    tail?: boolean | {
        content?: string;
    };
}
