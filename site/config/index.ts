export default {
  navs: {
    components: {
      title: '组件',
      url: 'components',
      docs: [
        {
          title: '开始',
          type: 'document', // 普通文档
          children: [
            {
              title: '安装',
              name: 'install',
              component: () => import('@/../README.md'),
            },
            {
              title: '开发指南',
              name: 'develop',
              component: () => import('@/../CONTRIBUTING.md'),
            },
            // {
            //   title: '更新日志',
            //   name: 'changelog',
            //   component: () => import('../CHANGELOG.md'),
            // },
          ],
        },
        {
          title: '基础组件',
          type: 'component', // 组件文档
          children: [
            {
              title: 'Icon 图标',
              name: 'icon',
              component: () => import('@/icon/README.md'),
            },
            {
              title: 'Button 按钮',
              name: 'button',
              component: () => import('@/button/README.md'),
            },
            {
              title: 'Rate 评分',
              name: 'rate',
              component: () => import('@/rate/README.md'),
            },
            {
              title: 'Switch 选择器',
              name: 'switch',
              component: () => import('@/switch/README.md'),
            },
            {
              title: 'Picker 选择器',
              name: 'picker',
              component: () => import('@/picker/README.md'),
            },
            {
              title: 'Radio 单选框',
              name: 'radio',
              component: () => import('@/radio/README.md'),
            },
            {
              title: 'Progress 进度条',
              name: 'progress',
              component: () => import('@/progress/README.md'),
            },
            {
              title: 'Tag 标签',
              name: 'tag',
              component: () => import('@/tag/README.md'),
            },
            {
              title: 'CheckBox 复选框',
              name: 'check-box',
              component: () => import('@/check-box/README.md'),
            },
            {
              title: 'Mask',
              name: 'mask',
              component: () => import('@/mask/README.md'),
            },
            {
              title: 'Stepper 步进器',
              name: 'stepper',
              component: () => import('@/stepper/README.md'),
            },
          ],
        },
        {
          title: '消息提醒',
          type: 'component', // 组件文档
          children: [
            {
              title: 'Toast 轻提示',
              name: 'toast',
              component: () => import('@/toast/README.md'),
            },
            {
              title: 'Message 消息',
              name: 'message',
              component: () => import('@/message/README.md'),
            },
            {
              title: 'NoticeBar 公告栏',
              name: 'notice-bar',
              component: () => import('@/notice-bar/README.md'),
            },
            {
              title: 'Dialog 对话框',
              name: 'dialog',
              component: () => import('@/dialog/README.md'),
            },
          ],
        },
      ],
    },
  },
};
