import Toast from 'tdesign-miniprogram/toast/index';

Page({
  showSuccessToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'success',
      theme: 'success',
      direction: 'column',
    });
  },

  showWarningToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'warning',
      theme: 'warning',
      direction: 'column',
    });
  },

  showErrorToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'error',
      theme: 'error',
      direction: 'column',
    });
  },
});
