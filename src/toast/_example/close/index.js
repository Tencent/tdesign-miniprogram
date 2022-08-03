import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

Page({
  toast(option) {
    Toast({
      context: this,
      selector: '#t-toast',
      ...option,
    });
  },
  hide() {
    hideToast({
      context: this,
      selector: '#t-toast',
    });
  },
  handleToast(e) {
    switch (e.target.dataset.type) {
      case 'hideToast': {
        this.hide();
        break;
      }
      default: {
        this.toast({
          message: '未知点击事件',
        });
      }
    }
  },
});
