Page({
  data: {
    barLoadingTimeOut: null,
    loadingFirst: false,
    loadingBar: false,
    progress: 100,
    isCheck: false,
    duration: 800,
  },
  switchChange() {
    const { loadingFirst } = this.data;
    this.setData({ loadingFirst: !loadingFirst });
  },

  showProgressBar() {
    const timeout = setTimeout(() => {
      this.setData({ loadingBar: false });
    }, 10000);
    this.setData({
      progress: -1,
      loadingBar: true,
      barLoadingTimeOut: timeout,
    });
  },

  durationChange(e) {
    this.setData({ duration: e.detail.value });
  },

  reloadPage() {
    wx.redirectTo({
      url: '/pages/loading/loading',
    });
  },

  onUnload() {
    clearTimeout(this.data.barLoadingTimeOut);
  },
});
