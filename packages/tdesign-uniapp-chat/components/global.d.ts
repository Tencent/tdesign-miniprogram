declare module 'vue' {
  export interface GlobalComponents {
    TAttachments: typeof import('tdesign-uniapp/attachments/attachments.vue').default;
    TChatActionbar: typeof import('tdesign-uniapp/chat-actionbar/chat-actionbar.vue').default;
    TChatContent: typeof import('tdesign-uniapp/chat-content/chat-content.vue').default;
    TChatList: typeof import('tdesign-uniapp/chat-list/chat-list.vue').default;
    TChatLoading: typeof import('tdesign-uniapp/chat-loading/chat-loading.vue').default;
    TChatMarkdown: typeof import('tdesign-uniapp/chat-markdown/chat-markdown.vue').default;
    TChatMessage: typeof import('tdesign-uniapp/chat-message/chat-message.vue').default;
    TChatSender: typeof import('tdesign-uniapp/chat-sender/chat-sender.vue').default;
    TChatThinking: typeof import('tdesign-uniapp/chat-thinking/chat-thinking.vue').default;
  }
}

export {};
