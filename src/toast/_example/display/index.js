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
          message: 'Show at top for 1 second.',
          direction: 'column',
          placement: 'top',
          duration: 1000,
          icon: 'star',
        });
        break;
      }
      case 'middleShow': {
        this.toast({
          message: 'Show at center for 1 second.',
          direction: 'column',
          duration: 2000,
          icon: 'star',
        });
        break;
      }
      case 'bottomShow': {
        this.toast({
          message: 'Show at bottom for 1 second.',
          direction: 'column',
          placement: 'bottom',
          duration: 3000,
          icon: 'star',
        });
        break;
      }

      default: {
        this.toast({
          message: 'Unknown click event.',
        });
      }
    }
  },
});
