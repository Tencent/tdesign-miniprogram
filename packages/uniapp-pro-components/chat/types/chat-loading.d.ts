import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatLoadingProps } from '../chat-loading/type';

export type ChatLoadingProps = ExtractNonOnProps<TdChatLoadingProps>;
export type ChatLoadingEmits = TransformEventHandlers<TdChatLoadingProps, true>;
declare const ChatLoadingComponent: import('vue').DefineComponent<ChatLoadingProps, {}, {}, {}, {}, {}, {}, ChatLoadingEmits, any>;
export default ChatLoadingComponent;
