declare module 'vue' {
  export interface GlobalComponents {
    TAttachments: typeof import('@tdesign/uniapp-chat/attachments/attachments.vue').default;
    TChatActionbar: typeof import('@tdesign/uniapp-chat/chat-actionbar/chat-actionbar.vue').default;
    TChatContent: typeof import('@tdesign/uniapp-chat/chat-content/chat-content.vue').default;
    TChatList: typeof import('@tdesign/uniapp-chat/chat-list/chat-list.vue').default;
    TChatLoading: typeof import('@tdesign/uniapp-chat/chat-loading/chat-loading.vue').default;
    TChatMarkdown: typeof import('@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue').default;
    TChatMessage: typeof import('@tdesign/uniapp-chat/chat-message/chat-message.vue').default;
    TChatSender: typeof import('@tdesign/uniapp-chat/chat-sender/chat-sender.vue').default;
    TChatThinking: typeof import('@tdesign/uniapp-chat/chat-thinking/chat-thinking.vue').default;
  }
}

export {};
