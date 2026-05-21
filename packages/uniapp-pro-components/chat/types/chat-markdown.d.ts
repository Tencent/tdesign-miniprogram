import type { TdChatMarkdownProps } from '../chat-markdown/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';

export type ChatMarkdownProps = ExtractNonOnProps<TdChatMarkdownProps>;
export type ChatMarkdownEmits = TransformEventHandlers<TdChatMarkdownProps, true>;
declare const ChatMarkdownComponent: import('vue').DefineComponent<ChatMarkdownProps, {}, {}, {}, {}, {}, {}, ChatMarkdownEmits, any>;
export default ChatMarkdownComponent;
