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
      case 'topShow': {
        this.toast({
          message: '顶部-展示1秒',
          direction: 'column',
          placement: 'top',
          duration: 1000,
          icon: 'star',
        });
        break;
      }
      case 'middleShow': {
        this.toast({
          message: '中间-展示2秒',
          direction: 'column',
          duration: 2000,
          icon: 'star',
        });
        break;
      }
      case 'bottomShow': {
        this.toast({
          message: '底部-展示3秒',
          direction: 'column',
          placement: 'bottom',
          duration: 3000,
          icon: 'star',
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
