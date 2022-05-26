import Message from 'tdesign-miniprogram/message/index';

Page({
  data: {
    operList1: [
      {
        title: '弹窗内容为纯文本、标题和副标题、带输入框',
        btns: [
          {
            type: 'text',
            text: '纯文字通知',
          },
          {
            type: 'icon',
            text: '带图标通知',
          },
          {
            type: 'closeable',
            text: '带关闭通知',
          },
          {
            type: 'scroll',
            text: '滚动通知',
          },
          {
            type: 'btn',
            text: '带按钮通知',
          },
        ],
      },
    ],
    operList2: [
      {
        title: '弹窗状态为普通弹窗、警示提示弹窗、成功提示弹窗、错误提示弹窗。',
        btns: [
          {
            type: 'info',
            text: '普通通知',
          },
          {
            type: 'warning',
            text: '警示提示通知',
          },
          {
            type: 'success',
            text: '成功提示通知',
          },
          {
            type: 'error',
            text: '错误提示通知',
          },
        ],
      },
    ],
  },
  showMessage(e) {
    switch (e.detail) {
      case 'text': {
        Message.info({
          offset: [20, 32],
          duration: 5000,
          icon: false,
          content: '这是一条纯文字的消息通知 5s消失',
        });
        break;
      }
      case 'icon': {
        Message.info({
          offset: ['20rpx', '32rpx'],
          duration: 5000,
          icon: 'error-circle',
          content: '这是一条带图标的消息通知 5s消失',
        });
        break;
      }
      case 'closeable': {
        Message.info({
          offset: ['20rpx', 32],
          icon: 'error-circle',
          content: '这是一条带关闭的消息通知 常驻可关闭',
          duration: -1,
          closeBtn: true,
        });
        break;
      }
      case 'scroll': {
        Message.info({
          offset: [20, 32],
          marquee: { speed: 50, loop: -1, delay: 5000 },
          icon: false,
          content: '这是一条滚动的通知信息',
          duration: -1,
        });
        break;
      }
      case 'btn': {
        Message.info({
          offset: [20, 32],
          icon: 'notification',
          content: '这是一条带操作的消息通知',
          duration: -1,
          action: '按钮',
        });
        break;
      }
      case 'info': {
        Message.info({
          offset: [20, 32],
          duration: 5000,
          content: '这是一条普通通知信息',
        });
        break;
      }
      case 'warning': {
        Message.warning({
          offset: [20, 32],
          duration: -1,
          content: '这是一条需要用户关注到的警示通知',
        });
        break;
      }
      case 'success': {
        Message.success({
          offset: [20, 32],
          duration: -1,
          content: '这是一条需要成功的提示消息',
        });
        break;
      }
      case 'error': {
        Message.error({
          offset: [20, 32],
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
