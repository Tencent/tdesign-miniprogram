Page({
  data: {
    isCheck: false,
    duration: 800,
  },

  switchChange() {
    const { isCheck } = this.data;
    this.setData({ isCheck: !isCheck });
  },

  durationChange(e) {
    this.setData({ duration: e.detail.value });
  },

  goToProgress() {
    wx.redirectTo({
      url: '/pages/loading/loadingProgress/loadingProgress',
    });
  },

  reloadPage() {
    wx.redirectTo({
      url: '/pages/loading/loading',
    });
  },
});
