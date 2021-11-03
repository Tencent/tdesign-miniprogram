Page({
  data: {
    isLoading: false,
    isCheck: false,
    duration: 800,
  },

  switchChange() {
    const { isLoading } = this.data;
    this.setData({ isLoading: !isLoading });
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
