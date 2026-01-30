import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatMarkdownProps } from '../chat-markdown/type';

export type ChatMarkdownProps = ExtractNonOnProps<TdChatMarkdownProps>;
export type ChatMarkdownEmits = TransformEventHandlers<TdChatMarkdownProps, true>;
declare const ChatMarkdownComponent: import('vue').DefineComponent<ChatMarkdownProps, {}, {}, {}, {}, {}, {}, ChatMarkdownEmits, any>;
export default ChatMarkdownComponent;
