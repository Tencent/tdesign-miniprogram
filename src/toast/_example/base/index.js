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
      case 'text': {
        this.toast({
          message: '轻提示文字内容',
        });
        break;
      }
      case 'horizontal-icon': {
        this.toast({
          message: '带图标横向',
          icon: 'check-circle',
        });
        break;
      }
      case 'vertical-icon': {
        this.toast({
          message: '带图标竖向',
          icon: 'star',
          direction: 'column',
        });
        break;
      }
      case 'text-max': {
        this.toast({
          message: '最多一行展示十个汉字宽度限制最多不超过三行文字行文字行文字',
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
