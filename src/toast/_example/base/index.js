import Toast from 'tdesign-miniprogram/toast/index';

Page({
  showText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '轻提示文字内容',
    });
  },

  showMultiText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '最多一行展示十个汉字宽度限制最多不超过三行文字',
    });
  },

  showHorizontalText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '带横向图标',
      icon: 'check-circle',
    });
  },

  showVerticalText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '带竖向图标',
      icon: 'check-circle',
      direction: 'column',
    });
  },

  showLoading() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '加载中...',
      theme: 'loading',
      direction: 'column',
    });
  },
});
