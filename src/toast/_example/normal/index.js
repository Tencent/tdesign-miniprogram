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
      case 'horizontal-success': {
        this.toast({
          message: '成功文案',
          theme: 'success',
        });
        break;
      }
      case 'horizontal-warn': {
        this.toast({
          message: '警告文案',
          theme: 'fail',
        });
        break;
      }
      case 'vertical-success': {
        this.toast({
          message: '成功文案',
          theme: 'success',
          direction: 'column',
        });
        break;
      }
      case 'vertical-warn': {
        this.toast({
          message: '警告文案',
          theme: 'fail',
          direction: 'column',
        });
        break;
      }
      case 'loading': {
        this.toast({
          message: '加载中...',
          theme: 'loading',
          direction: 'column',
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
