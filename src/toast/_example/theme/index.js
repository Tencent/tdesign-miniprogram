import Toast from 'tdesign-miniprogram/toast/index';

Page({
  showSuccessToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功文案',
      theme: 'success',
      direction: 'column',
    });
  },

  showWarningToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '警告文案',
      theme: 'warning',
      direction: 'column',
    });
  },

  showErrorToast() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '错误文案',
      theme: 'error',
      direction: 'column',
    });
  },
});
