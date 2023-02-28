import Message from 'tdesign-miniprogram/message/index';

Component({
  methods: {
    showTextMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 5000,
        icon: false,
        content: '这是一条纯文字的消息通知 5s消失',
      });
    },

    showIconMessage() {
      Message.info({
        context: this,
        offset: ['20rpx', '32rpx'],
        duration: 5000,
        content: '这是一条带图标的消息通知 5s消失',
      });
    },

    showCloseMessage() {
      Message.info({
        context: this,
        offset: ['20rpx', 32],
        content: '这是一条带关闭的消息通知',
        duration: -1,
        action: '按钮',
        closeBtn: true,
      });
    },

    showScrollMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        marquee: { speed: 50, loop: -1, delay: 5000 },
        icon: false,
        content: '这是一条滚动的通知信息',
        duration: -1,
      });
    },

    showBtnMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        icon: 'notification-filled',
        content: '这是一条带操作的消息通知',
        duration: -1,
        link: {
          content: '链接',
          navigatorProps: {
            url: '/page/xxx/xxx',
          },
        },
      });
    },
  },
});
