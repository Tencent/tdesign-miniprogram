import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    operList4: [
      {
        title: '手动关闭轻提示',
        btns: [
          {
            type: 'hideToast',
            text: '关闭提示',
          },
        ],
      },
    ],
  },
  handleToast(option) {
    Toast({
      context: this,
      selector: '#t-toast',
      ...option,
    });
  },
  hideToast() {
    hideToast({
      context: this,
      selector: '#t-toast',
    });
  },
  clickHandle(e) {
    switch (e.detail) {
      case 'hideToast': {
        this.hideToast();
        break;
      }
      default: {
        this.handleToast({
          message: '未知点击事件',
        });
      }
    }
  },
});
