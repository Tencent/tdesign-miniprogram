import Toast from 'tdesign-miniprogram/toast/index';

Page({
  handleToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'Disable swipes and clicks.',
      direction: 'column',
      duration: 3000,
      preventScrollThrough: true,
      icon: 'poweroff',
    });
  },
});
