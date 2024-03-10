import Message from 'tdesign-miniprogram/message/index';

Component({
  methods: {
    showTextMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 5000,
        icon: false,
        content: 'Message notification content.',
      });
    },

    showIconMessage() {
      Message.info({
        context: this,
        offset: ['20rpx', '32rpx'],
        duration: 5000,
        content: 'Message notification content.',
      });
    },

    showCloseMessage() {
      Message.info({
        context: this,
        offset: ['20rpx', 32],
        content: 'Message notification content.',
        duration: -1,
        link: {
          content: 'Button',
          navigatorProps: {
            url: '/page/xxx/xxx',
          },
        },
        closeBtn: true,
      });
    },

    showScrollMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        marquee: { speed: 50, loop: -1, delay: 5000 },
        icon: false,
        content: 'Message notification content.',
        duration: -1,
      });
    },

    showBtnMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        icon: 'notification-filled',
        content: 'Message notification content.',
        duration: -1,
        link: {
          content: 'Link',
          navigatorProps: {
            url: '/page/xxx/xxx',
          },
        },
      });
    },
  },
});
