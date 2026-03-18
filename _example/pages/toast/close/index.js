import Toast, { hideToast } from 'tdesign-miniprogram/toast';

Component({
  methods: {
    handleShow() {
      Toast({
        context: this,
        selector: '#t-toast',
        duration: -1,
        message: '轻提示文字内容',
      });
    },
    handleHide() {
      hideToast({
        context: this,
        selector: '#t-toast',
      });
    },
  },
});
