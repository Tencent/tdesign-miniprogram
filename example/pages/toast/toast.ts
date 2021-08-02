import Toast from '@tencent/tdesign-miniprogram/toast/index';
Page({
  tapShowShortTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '轻提示文字内容',
    });
  },
  tapShowIconTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '带图标提示',
      icon: 'tick',

    });
  },
  tapShowMaxTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '最多一行展示十个汉字宽度限制最多不超过三行文字行文字行文字',
    });
  },
  tapShowRowSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功文案',
      type: 'success',
    });
  },
  tapShowRowFailTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '失败文案',
      type: 'fail'
    });
  },
  tapShowColumnSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功文案',
      type: 'success',
      direction: 'column',
    });
  },
  tapShowColumnFailTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '失败文案',
      type: 'fail',
      direction: 'column',
    });
  },
  tapShowLoadingTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '加载中...',
      type: 'loading',
      direction: 'column',
    });
  },
  tapShowCustomTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '自定义图标自定义图标自定义图标自定义图标图标自定义图标自定义图标自定义图标',
      icon: 'star_fill',
      direction: 'column',
    });
  },
  tapShowTopTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '顶部-展示1秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'top',
      duration: 1000,
    });
  },
  tapShowMiddleTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '中间-展示3秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'middle',
      duration: 3000,
    });
  },
  tapShowBottomTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '底部-展示5秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'bottom',
      duration: 5000,
    });
  },
  tapShowOverlayTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '禁止滑动和点击',
      icon: 'star_fill',
      direction: 'column',
      position: 'bottom',
      duration: 5000,
      showOverlay: true
    });
  }
});
