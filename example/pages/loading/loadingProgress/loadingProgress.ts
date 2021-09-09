Page({
  data: {
    progress: 100,
    isLoading: false,
    barLoadingTimeOut: null,
  },

  onLoad() {
    const timeout = setTimeout(() => {
      this.setData({ isLoading: false });
    }, 10000);
    this.setData({
      progress: -1,
      isLoading: true,
      barLoadingTimeOut: timeout,
    });
  },

  onUnload() {
    clearTimeout(this.data.barLoadingTimeOut);
  },
});
