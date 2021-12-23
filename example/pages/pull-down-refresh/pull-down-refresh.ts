Page({
  pullDownRefresh0: null as WechatMiniprogram.Component.TrivialInstance | null,
  pullDownRefresh1: null as WechatMiniprogram.Component.TrivialInstance | null,
  data: {
    error: false,
    loadingProps0: {
      size: '50rpx',
    },
    loadingProps1: {
      size: '60rpx',
    },
    rowCol: [
      { width: '100%', height: '342rpx' },
      [
        { width: '332.26rpx', height: '32rpx' },
        { width: '332.26rpx', height: '32rpx', marginLeft: '21.5rpx' },
      ],
      [
        { width: '213.04rpx', height: '32rpx' },
        { width: '213.04rpx', height: '32rpx', marginLeft: '140.72rpx' },
      ],
    ],
  },
  onLoad() {
    this.pullDownRefresh0 = this.selectComponent('#pull-down-refresh-0');
    this.pullDownRefresh1 = this.selectComponent('#pull-down-refresh-1');
  },
  // 监听页面滚动事件，并调用pull-down-refresh组件的onPageScroll方法
  // 组件内根据页面滚动距离来判定页面是否到顶部，页面回到顶部后才能下拉刷新
  onPageScroll(e) {
    this.pullDownRefresh0 && this.pullDownRefresh0.onPageScroll(e);
    this.pullDownRefresh1 && this.pullDownRefresh1.onPageScroll(e);
  },

  onPullDownRefresh0(e) {
    // 模拟1秒刷新完成
    const { callback } = e.detail;

    if (callback) {
      setTimeout(() => {
        callback();
      }, 1000);
    }
  },

  timeoutCallback() {
    console.log('timeout');
  },

  onPullDownRefresh1(e) {
    // 模拟2秒刷新完成
    const { callback } = e.detail;

    if (callback) {
      setTimeout(() => {
        callback();
      }, 2000);
    }
  },

  toggleError() {
    this.setData({
      error: !this.data.error,
    });
  },
});
