import Toast from 'tdesign-miniprogram/toast/index';

Page({
  toast(option) {
    Toast({
      context: this,
      selector: '#t-toast',
      ...option,
    });
  },
  handleToast(e) {
    switch (e.target.dataset.type) {
      case 'disableSlideAndClick': {
        this.toast({
          message: '禁止滑动和点击',
          direction: 'column',
          placement: 'bottom',
          duration: 5000,
          preventScrollThrough: true,
          icon: 'poweroff',
        });
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
