/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
import { TdChatLoadingProps } from '../chat-loading/type';
import { TdChatAttachmentsProps, FileItem } from '../attachments/type';

export type ChatContentType =
  | 'text'
  | 'markdown'
  | 'thinking'
  | 'attachment'

export type ChatMessageStatus = 'pending' | 'streaming' | 'complete' | 'stop' | 'error';

/**
 * 基础内容结构，所有内容类型都遵循此结构
 */
export interface ChatBaseContent<T extends ChatContentType, TData> {
  type: T;
  data: TData;
}

/**
 * 思考内容数据结构
 */
export interface ThinkingContentData {
  /**
   * 思考标题
   */
  title?: string;
  /**
   * 思考内容文本
   */
  text: string;
}

/**
 * 文本内容类型
 */
export type TextContent = ChatBaseContent<'text', string>;

/**
 * Markdown内容类型
 */
export type MarkdownContent = ChatBaseContent<'markdown', string>;

/**
 * 思考内容类型
 */
export type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>;

/**
 * 附件内容类型
 */
export type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>;

/**
 * 消息内容联合类型
 */
export type MessageContent = TextContent | MarkdownContent | ThinkingContent | AttachmentContent;

export type TdChatContentThinkProps = {
  maxHeight?: number;
  animation?: TdChatLoadingProps['animation'];
  collapsed?: boolean;
  layout?: 'block' | 'border';
  status?: 'pending' | 'complete' ;
};

export type TdChatContentProps = {
  thinking?: TdChatContentThinkProps;
} & Partial<Record<Exclude<ChatContentType, 'attachment' | 'thinking'>, any>>;

export interface TdChatMessageProps {
  /**
   * 聊天消息的唯一标识
   * @default ''
   */
  chatId?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义的头像配置。支持字符串、对象、插槽或函数
   * @default ''
   */
  avatar?: {
    type: null;
    value?: any;
  };
  /**
   * 自定义的昵称。支持字符串、插槽或函数
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 对话单元的时间配置。支持字符串、插槽或函数
   * @default ''
   */
  datetime?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 气泡框样式，支持基础、线框、文字三种类型
   * @default base
   */
  variant?: {
    type: StringConstructor;
    value?: 'base' | 'outline' | 'text';
  };
  /**
   * 消息内容对象，支持多种内容类型的数组
   * - 用户消息：TextContent | AttachmentContent
   * - AI消息：TextContent | MarkdownContent | ThinkingContent | AttachmentContent
   * @default []
   */
  content?: {
    type: ArrayConstructor;
    value?: MessageContent[];
  };
  role?: {
    type: StringConstructor;
    value?: 'user' | 'assistant' | 'system';
  };
  /**
   * 消息显示位置
   * @default ''
   */
  placement?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 消息状态
   * @default ''
   */
  status?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种
   * @default skeleton
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient';
  };
  /**
   * 聊天内容组件的属性
   * @default {}
   */
  chatContentProps?: {
    type: ObjectConstructor;
    value?: TdChatContentProps;
  };
}
