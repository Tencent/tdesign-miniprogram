export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'document', // 普通文档
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        meta: { docType: 'explain' },
        path: '/miniprogram-chat/getting-started',
        component: () => import('@docs/getting-started.md'),
      },
      {
        title: '什么是流式输出',
        name: 'sse',
        path: '/miniprogram-chat/sse',
        component: () => import('@docs/sse.md'),
      },
    ],
  },
  {
    title: '基础',
    type: 'component', // 组件文档
    children: [
      {
        title: 'ChatList 对话列表',
        titleEn: 'ChatList',
        name: 'ChatList 对话列表',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-list',
        component: () => import('@/chat/chat-list/README.md'),
        // componentEn: () => import('@/chat/chat-list/README.en-US.md'),
      },
      {
        title: 'ChatSender 对话输入',
        titleEn: 'ChatSender',
        name: 'ChatSender 对话输入',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-sender',
        component: () => import('@/chat/chat-sender/README.md'),
        // componentEn: () => import('@/chat/chat-sender/README.en-US.md'),
      },
      {
        title: 'ChatMessage 对话消息体',
        titleEn: 'ChatMessage',
        name: 'ChatMessage 对话消息体',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-message',
        component: () => import('@/chat/chat-message/README.md'),
        // componentEn: () => import('@/chat/chat-message/README.en-US.md'),
      },
      {
        title: 'ChatActionbar 对话操作',
        titleEn: 'ChatActionbar',
        name: 'ChatActionbar 对话操作',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-actionbar',
        component: () => import('@/chat/chat-actionbar/README.md'),
        // componentEn: () => import('@/chat/chat-actionbar/README.en-US.md'),
      },
      {
        title: 'ChatMarkdown Markdown内容',
        titleEn: 'ChatMarkdown',
        name: 'ChatMarkdown Markdown内容',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-markdown',
        component: () => import('@/chat/chat-markdown/README.md'),
        // componentEn: () => import('@/chat/chat-markdown/README.en-US.md'),
      },
      {
        title: 'ChatThinking 思考过程',
        titleEn: 'ChatThinking',
        name: 'ChatThinking 思考过程',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-thinking',
        component: () => import('@/chat/chat-thinking/README.md'),
        // componentEn: () => import('@/chat/chat-thinking/README.en-US.md'),
      },
      {
        title: 'ChatLoading 对话加载',
        titleEn: 'ChatLoading',
        name: 'ChatLoading 对话加载',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-loading',
        component: () => import('@/chat/chat-loading/README.md'),
        // componentEn: () => import('@/chat/chat-loading/README.en-US.md'),
      },
      {
        title: 'Attachments 文件附件',
        titleEn: 'Attachments',
        name: 'Attachments 文件附件',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/attachments',
        component: () => import('@/chat/attachments/README.md'),
        // componentEn: () => import('@/chat/chat-attachments/README.en-US.md'),
      },
      {
        title: 'ChatContent 对话正文',
        titleEn: 'ChatContent',
        name: 'ChatContent 对话正文',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-content',
        component: () => import('@/chat/chat-content/README.md'),
        // componentEn: () => import('@/chat/chat-content/README.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };
