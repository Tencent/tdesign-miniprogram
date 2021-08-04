import Message from '@tencent/tdesign-miniprogram/message/index';

Page({
  showMessage(e) {
    const { type } = e.currentTarget.dataset;
    switch (type) {
      case 'text': {
        Message.info({
          duration: 5000,
          icon: false,
          content: '这是一条纯文字的消息通知 5s消失',
        });
        break;
      }
      case 'icon': {
        Message.info({
          duration: 5000,
          icon: 'sound_fill',
          content: '这是一条带图标的消息通知 5s消失',
        });
        break;
      }
      case 'closeable': {
        Message.info({
          icon: false,
          content: '这是一条带关闭的消息通知 常驻可关闭',
          duration: -1,
          closeBtn: true,
        });
        break;
      }
      case 'scroll': {
        Message.info({
          marquee: { speed: 50, loop: 2, delay: 5000 },
          icon: 'sound_fill',
          content: '这是一条滚动的通知信息',
          duration: -1,
          closeBtn: true,
        });
        break;
      }
      case 'btn': {
        Message.info({
          icon: false,
          content: '这是一条带操作的消息通知',
          duration: -1,
          action: '按钮',
        });
        break;
      }
      case 'info': {
        Message.info({
          duration: -1,
          content: '这是一条普通的通知信息',
        });
        break;
      }
      case 'warning': {
        Message.warning({
          duration: -1,
          content: '这是一条需要用户关注到的警示通知',
        });
        break;
      }
      case 'success': {
        Message.success({
          duration: -1,
          content: '这是一条需要成功的提示消息',
        });
        break;
      }
      case 'error': {
        Message.error({
          duration: -1,
          content: '这是一条错误提示通知',
        });
        break;
      }
      default: {
        break;
      }
    }
  },

  clickMessageBtnHadnle({ detail: { self } }) {
    wx.showToast({ title: '点击按钮' });
    self.hide();
  },
});
