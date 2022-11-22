Page({
  data: {
    iconProps: {
      size: '160rpx',
    },
  },
  goBack() {
    wx.navigateBack({ delta: 1 });
  },
});
