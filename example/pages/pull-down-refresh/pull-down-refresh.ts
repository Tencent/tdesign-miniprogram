Page({
  data: {
    baseRefresh: {
      value: false,
    },
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

  onPullDownRefresh() {
    setTimeout(() => {
      this.setData({ 'baseRefresh.value': false });
    }, 1500);
  },

  handleTimeout() {
    wx.showToast({
      title: '时间超时',
      icon: 'none',
    });
  },
});
