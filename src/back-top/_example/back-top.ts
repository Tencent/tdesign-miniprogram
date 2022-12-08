Page({
  data: {
    round: false,
    halfRound: false,
    showBackTop: false,
    rowCol: [{ size: '163.5px', borderRadius: '12px' }, 1, { width: '61%' }],
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

  onBtnClick(e: any) {
    const source = e.currentTarget.dataset.source as string;
    if (source === 'round') {
      this.setData({
        round: true,
        halfRound: false,
      });
    }

    if (source === 'half-round') {
      this.setData({
        halfRound: true,
        round: false,
      });
    }

    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
