/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
import { TdChatLoadingProps } from '../chat-loading/type';
import { TdChatAttachmentsProps } from '../attachments/type';

export type ChatContentType = 'text' | 'markdown' | 'search' | 'thinking' | 'suggestion' | 'attachment';

// todo: 下个版本
// export interface TdChatMarkdownContentProps {
//   content: string;
//   [key: string]: any;
// }

// export interface TdChatContentSearchProps {
//   query: string;
//   results: any[];
//   [key: string]: any;
// }

export type TdChatContentThinkProps = {
  maxHeight?: number;
  animation?: TdChatLoadingProps['animation'];
  collapsed?: boolean;
  layout?: 'block' | 'border';
};
export type TdChatContentAttachmentProps = {
  imageProps?: TdChatAttachmentsProps['imageProps'];
};

export type TdChatContentProps = {
  thinking?: TdChatContentThinkProps;
  attachment?: TdChatContentAttachmentProps;
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
   * 消息内容对象 todo: 需要完善
   * @default {}
   */
  content?: {
    type: ArrayConstructor;
    value?: Array<any>;
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
