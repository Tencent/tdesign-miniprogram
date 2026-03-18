import { ChatContentProps } from '../chat-content/index';
import { FileItem } from '../attachments/index';
export interface TdChatMessageProps {
    animation?: {
        type: StringConstructor;
        value?: 'skeleton' | 'moving' | 'gradient' | 'dots';
    };
    avatar?: {
        type: StringConstructor;
        value?: string;
    };
    chatContentProps?: {
        type: ObjectConstructor;
        value?: ChatContentProps;
    };
    chatId?: {
        type: StringConstructor;
        value?: string;
    };
    content?: {
        type: ArrayConstructor;
        value?: ChatMessageContent[];
    };
    datetime?: {
        type: StringConstructor;
        value?: string;
    };
    name?: {
        type: StringConstructor;
        value?: string;
    };
    placement?: {
        type: StringConstructor;
        value?: 'left' | 'right';
    };
    role?: {
        type: StringConstructor;
        value?: 'user' | 'assistant' | 'system';
    };
    status?: {
        type: StringConstructor;
        value?: 'pending' | 'streaming' | 'complete' | 'stop' | 'error';
    };
    variant?: {
        type: StringConstructor;
        value?: 'base' | 'outline' | 'text';
    };
}
export declare type ChatMessageContent = TextContent | MarkdownContent | ThinkingContent | AttachmentContent;
export declare type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>;
export declare type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>;
export declare type MarkdownContent = ChatBaseContent<'markdown', string>;
export declare type TextContent = ChatBaseContent<'text', string>;
export interface ThinkingContentData {
    title?: string;
    text: string;
}
export interface ChatBaseContent<T extends ChatContentType, TData> {
    type: T;
    data: TData;
}
export declare type ChatMessageStatus = 'pending' | 'streaming' | 'complete' | 'stop' | 'error';
export declare type ChatContentType = 'text' | 'markdown' | 'thinking' | 'attachment';
