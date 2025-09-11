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
        title: '对话',
        titleEn: 'Chat',
        name: 'Chat',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat',
        component: () => import('@/chat/README.md'),
        // componentEn: () => import('@/chat/README.en-US.md'),
      },
      // {
      // title: '对话单元',
      // titleEn: 'ChatMessage',
      // name: 'ChatMessage',
      // meta: { docType: 'base' },
      // path: '/miniprogram-chat/components/chat-message',
      // component: () => import('@/chat-message/README.md'),
      // componentEn: () => import('@/chat-message/README.en-US.md'),
      // },
      // {
      //   title: '对话内容',
      //   titleEn: 'ChatContent',
      //   name: 'ChatContent',
      //   meta: { docType: 'base' },
      //   path: '/miniprogram-chat/components/chat-sender',
      // component: () => import('@/chat-sender/README.md'),
      // componentEn: () => import('@/chat-content/README.en-US.md'),
      // },
      {
        title: '对话输入框',
        titleEn: 'ChatSender',
        name: 'ChatSender',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-content',
        component: () => import('@/chat-content/README.md'),
        // componentEn: () => import('@/chat-content/README.en-US.md'),
      },
      // {
      //   title: '对话Markdown',
      //   titleEn: 'ChatMarkdown',
      //   name: 'ChatMarkdown',
      //   meta: { docType: 'base' },
      //   path: '/miniprogram-chat/components/chat-markdown',
      // component: () => import('@/chat-markdown/README.md'),
      // componentEn: () => import('@/chat-markdown/README.en-US.md'),
      // },
      // {
      //   title: '对话操作栏',
      //   titleEn: 'ChatActionbar',
      //   name: 'ChatActionbar',
      //   meta: { docType: 'base' },
      //   path: '/miniprogram-chat/components/chat-actionbar',
      // component: () => import('@/chat-actionbar/README.md'),
      // componentEn: () => import('@/chat-actionbar/README.en-US.md'),
      // },
      {
        title: '加载中',
        titleEn: 'ChatLoading',
        name: 'ChatLoading',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-loading',
        component: () => import('@/chat-loading/README.md'),
        // componentEn: () => import('@/chat-loading/README.en-US.md'),
      },
      {
        title: '思考过程',
        titleEn: 'ChatThinking',
        name: 'ChatThinking',
        meta: { docType: 'base' },
        path: '/miniprogram-chat/components/chat-thinking',
        component: () => import('@/chat-thinking/README.md'),
        // componentEn: () => import('@/chat-thinking/README.en-US.md'),
      },
      // {
      //   title: '附件',
      //   titleEn: 'ChatAttachments',
      //   name: 'ChatAttachments',
      //   meta: { docType: 'base' },
      //   path: '/miniprogram-chat/components/chat-attachments',
      // component: () => import('@/chat-attachments/README.md'),
      // componentEn: () => import('@/chat-attachments/README.en-US.md'),
      // },
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
