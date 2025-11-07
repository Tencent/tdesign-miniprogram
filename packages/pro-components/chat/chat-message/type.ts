/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ChatContentProps } from '../chat-content/index';
import { FileItem } from '../attachments/index';

export interface TdChatMessageProps {
  /**
   * 【实验】 是否允许自定义局部消息内容，其他消息内容实用默认样式
   * @default false
   */
  allowContentSegmentCustom?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 动画效果
   * @default skeleton
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient' | 'dots';
  };
  /**
   * 自定义的头像配置
   */
  avatar?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 聊天内容组件的属性
   */
  chatContentProps?: {
    type: ObjectConstructor;
    value?: ChatContentProps;
  };
  /**
   * 聊天消息的唯一标识
   * @default ''
   */
  chatId?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 消息内容，数组中的每一项为一个消息内容对象
   */
  content?: {
    type: ArrayConstructor;
    value?: ChatMessageContent[];
  };
  /**
   * 对话单元的时间配置
   */
  datetime?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义的昵称
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 消息显示位置
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right';
  };
  /**
   * 消息角色
   * @default user
   */
  role?: {
    type: StringConstructor;
    value?: 'user' | 'assistant' | 'system';
  };
  /**
   * 消息状态
   */
  status?: {
    type: StringConstructor;
    value?: 'pending' | 'streaming' | 'complete' | 'stop' | 'error';
  };
  /**
   * 气泡框样式，支持基础、线框、文字三种类型
   * @default base
   */
  variant?: {
    type: StringConstructor;
    value?: 'base' | 'outline' | 'text';
  };
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
