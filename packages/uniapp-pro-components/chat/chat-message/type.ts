/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatContentProps as ChatContentProps } from '../chat-content/type';
import type { FileItem } from '../attachments/type';

export interface TdChatMessageProps {
  /**
   * 动画效果
   * @default skeleton
   */
  animation?: 'skeleton' | 'moving' | 'gradient' | 'dots';
  /**
   * 自定义的头像配置
   */
  avatar?: string;
  /**
   * 聊天内容组件的属性
   */
  chatContentProps?: ChatContentProps;
  /**
   * 聊天消息的唯一标识
   * @default ''
   */
  chatId?: string;
  /**
   * 消息内容，数组中的每一项为一个消息内容对象
   */
  content?: ChatMessageContent[];
  /**
   * 对话单元的时间配置
   */
  datetime?: string;
  /**
   * 自定义的昵称
   */
  name?: string;
  /**
   * 消息显示位置
   */
  placement?: 'left' | 'right';
  /**
   * 消息角色
   * @default user
   */
  role?: 'user' | 'assistant' | 'system';
  /**
   * 消息状态
   */
  status?: 'pending' | 'streaming' | 'complete' | 'stop' | 'error';
  /**
   * 气泡框样式，支持基础、线框、文字三种类型
   * @default base
   */
  variant?: 'base' | 'outline' | 'text';
  /**
   * null
   */
  onLongpress?: (context: { e: MouseEvent; id: string }) => void;
}

export type ChatMessageContent = TextContent | MarkdownContent | ThinkingContent | AttachmentContent;

export type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>;

export type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>;

export type MarkdownContent = ChatBaseContent<'markdown', string>;

export type TextContent = ChatBaseContent<'text', string>;

export interface ThinkingContentData {
  title?: string;
  text: string;
}

export interface ChatBaseContent<T extends ChatContentType, TData> {
  type: T;
  data: TData;
}

export type ChatMessageStatus = 'pending' | 'streaming' | 'complete' | 'stop' | 'error';

export type ChatContentType = 'text' | 'markdown' | 'thinking' | 'attachment';
