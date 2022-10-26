import Message from 'tdesign-miniprogram/message/index';

Component({
  data: {
    navigationBottom: 0,
  },
  lifetimes: {
    attached() {
      const { top, height } = wx.getMenuButtonBoundingClientRect();
      const { statusBarHeight } = wx.getSystemInfoSync();

      this.setData({
        navigationBottom: (top - statusBarHeight) * 2 + height + statusBarHeight,
      });
    },
  },
  methods: {
    showTextMessage() {
      const { navigationBottom } = this.data;

      Message.info({
        context: this,
        offset: [`${navigationBottom}px`, 32],
        duration: 5000,
        icon: false,
        content: '这是一条纯文字的消息通知 5s消失',
      });
    },
  },
});
