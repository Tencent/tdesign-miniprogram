import Toast from 'tdesign-miniprogram/toast/index';

Page({
  handleToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '禁止滑动和点击',
      direction: 'column',
      duration: 3000,
      preventScrollThrough: true,
      icon: 'poweroff',
    });
  },
});
