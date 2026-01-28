import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatActionbarProps } from '../chat-actionbar/type';

export type ChatActionbarProps = ExtractNonOnProps<TdChatActionbarProps>;
export type ChatActionbarEmits = TransformEventHandlers<TdChatActionbarProps, true>;
declare const ChatActionbarComponent: import('vue').DefineComponent<ChatActionbarProps, {}, {}, {}, {}, {}, {}, ChatActionbarEmits, any>;
export default ChatActionbarComponent;
