Page({
  data: {
    showBackTop: false,
    rowCols: [
      { width: '332rpx', height: '342rpx' },
      { width: '332rpx', height: '32rpx' },
      { width: '214rpx', height: '32rpx' },
      [
        { width: '186rpx', height: '32rpx' },
        { width: '64rpx', height: '32rpx', marginLeft: '82rpx' },
      ],
    ],
  },

  windowHeight: null,

  onPageScroll(e) {
    if (!this.windowHeight) {
      this.windowHeight = wx.getSystemInfoSync().windowHeight - 200;
    }
    const isShowBackTop = e.scrollTop > this.windowHeight;
    if (isShowBackTop !== this.data.showBackTop) {
      this.setData({ showBackTop: isShowBackTop });
    }
  },

  onBtnClick() {
    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
