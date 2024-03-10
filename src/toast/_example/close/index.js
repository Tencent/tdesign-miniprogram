import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

Page({
  handleShow() {
    Toast({
      context: this,
      selector: '#t-toast',
      duration: -1,
      message: 'Prompt text content',
    });
  },
  handleHide() {
    hideToast({
      context: this,
      selector: '#t-toast',
    });
  },
});
