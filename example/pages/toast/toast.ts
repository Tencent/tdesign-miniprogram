import Toast from '@tencent/tdesign-miniprogram/toast/index';
Page({
  tapShowShortTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '轻提示文字内容',
    });
  },
  tapShowIconTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '带图标提示',
      icon: 'tick',
      iconSize: '42rpx',
    });
  },
  tapShowMaxTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '最多一行展示十个汉字宽度限制最多不超过三行文字行文字行文字',
    });
  },
  tapShowRowSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '成功文案',
      icon: 'tick',
      iconSize: '42rpx',
    });
  },
  tapShowRowWarnTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '警告文案',
      icon: 'warning',
      iconSize: '42rpx',
    });
  },
  tapShowColumnSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '成功文案',
      icon: 'tick',
      direction: 'column',
    });
  },
  tapShowColumnWarnTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '警告文案',
      icon: 'warning',
      direction: 'column',
    });
  },
  tapShowLoadingTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '加载中...',
      icon: 'loading',
      direction: 'column',
    });
  },
  tapShowCustomTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      text: '自定义图标自定义图标自定义图标自定义图标图标自定义图标自定义图标自定义图标',
      icon: 'star_fill',
      direction: 'column',
    });
  },
});
