Page({
  data: {
    type: 'round',
    showBackTop: false,
    rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
  },

  onPageScroll(e) {
    this.setData({ showBackTop: e.scrollTop > 100 });
  },

  onBtnClick(e: any) {
    const { source: type } = e.currentTarget.dataset;

    this.setData({
      type,
    });

    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
