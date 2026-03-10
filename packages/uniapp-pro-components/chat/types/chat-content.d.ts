import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatContentProps } from '../chat-content/type';

export type ChatContentProps = ExtractNonOnProps<TdChatContentProps>;
export type ChatContentEmits = TransformEventHandlers<TdChatContentProps, true>;
declare const ChatContentComponent: import('vue').DefineComponent<ChatContentProps, {}, {}, {}, {}, {}, {}, ChatContentEmits, any>;
export default ChatContentComponent;
