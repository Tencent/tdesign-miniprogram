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
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        meta: { docType: 'explain' },
        path: '/miniprogram-chat/changelog',
        component: () => import('@tdesign-miniprogram-chat/CHANGELOG.md'),
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
        title: 'Chat 对话',
        titleEn: 'Chat',
        name: 'Chat',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat',
        component: () => import('@/chat/chat/README.md'),
        // componentEn: () => import('@/chat/chat/README.en-US.md'),
      },
      {
        title: 'ChatMessage 对话单元',
        titleEn: 'ChatMessage',
        name: 'ChatMessage',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-message',
        component: () => import('@/chat/chat-message/README.md'),
        // componentEn: () => import('@/chat/chat-message/README.en-US.md'),
      },
      {
        title: 'ChatContent 对话内容',
        titleEn: 'ChatContent',
        name: 'ChatContent',
        meta: { docType: 'base' },
<<<<<<< HEAD
        path: '/miniprogram-chat/components/chat-sender',
        component: () => import('@/chat/chat-sender/README.md'),
=======
        path: '/miniprogram-chat/components/chat-content',
        component: () => import('@/chat/chat-content/README.md'),
>>>>>>> 3c509c4f054cef0ff75e0bdb675fad6fbf13d2c2
        // componentEn: () => import('@/chat/chat-content/README.en-US.md'),
      },
      {
        title: 'ChatSender 对话输入框',
        titleEn: 'ChatSender',
        name: 'ChatSender',
        meta: { docType: 'base' },
<<<<<<< HEAD
        path: '/miniprogram-chat/components/chat-content',
        component: () => import('@/chat/chat-content/README.md'),
        // componentEn: () => import('@/chat/chat-content/README.en-US.md'),
=======
        path: '/miniprogram-chat/components/chat-sender',
        component: () => import('@/chat/chat-sender/README.md'),
        // componentEn: () => import('@/chat/chat-sender/README.en-US.md'),
>>>>>>> 3c509c4f054cef0ff75e0bdb675fad6fbf13d2c2
      },
      {
        title: 'Markdown 对话 ',
        titleEn: 'ChatMarkdown',
        name: 'ChatMarkdown',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-markdown',
        component: () => import('@/chat/chat-markdown/README.md'),
        // componentEn: () => import('@/chat/chat-markdown/README.en-US.md'),
      },
      {
        title: 'ChatActionbar 对话操作栏',
        titleEn: 'ChatActionbar',
        name: 'ChatActionbar',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-actionbar',
        component: () => import('@/chat/chat-actionbar/README.md'),
        // componentEn: () => import('@/chat/chat-actionbar/README.en-US.md'),
      },
      {
        title: 'ChatLoading 加载中',
        titleEn: 'ChatLoading',
        name: 'ChatLoading',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-loading',
        component: () => import('@/chat/chat-loading/README.md'),
        // componentEn: () => import('@/chat/chat-loading/README.en-US.md'),
      },
      {
        title: 'ChatThinking 思考过程',
        titleEn: 'ChatThinking',
        name: 'ChatThinking',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-thinking',
        component: () => import('@/chat/chat-thinking/README.md'),
        // componentEn: () => import('@/chat/chat-thinking/README.en-US.md'),
      },
      {
        title: 'Attachments 附件',
        titleEn: 'Attachments',
        name: 'Attachments',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/attachments',
        component: () => import('@/chat/attachments/README.md'),
        // componentEn: () => import('@/chat/chat-attachments/README.en-US.md'),
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
