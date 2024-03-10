import Toast from 'tdesign-miniprogram/toast/index';

Page({
  showText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'Prompt text content',
    });
  },

  showMultiText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'A maximum of ten Chinese characters can be displayed in one line, no more than three lines.',
    });
  },

  showHorizontalText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'With horizontal icon',
      icon: 'check-circle',
    });
  },

  showVerticalText() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'With vertical icon',
      icon: 'check-circle',
      direction: 'column',
    });
  },

  showLoading() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'Loading...',
      theme: 'loading',
      direction: 'column',
    });
  },
});
