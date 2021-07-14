Page({
  data: {
    barLoadingTimeOut: null,
    loadingFirst: false,
    loadingBar: false,
    progress: -1,
    isCheck: false,
  },
  switchChange() {
    const { loadingFirst } = this.data;
    this.setData({ loadingFirst: !loadingFirst });
  },

  showProgressBar() {
    const timeout = setTimeout(() => {
      this.setData({ loadingBar: false });
    }, 1000);
    this.setData({
      progress: -1,
      loadingBar: true,
      barLoadingTimeOut: timeout,
    });
    this.changeNavBarColor('#000000', '#ffffff');
  },
  changeNavBarColor(frontColor, backgroundColor) {
    wx.setNavigationBarColor({
      frontColor,
      backgroundColor,
      animation: {
        duration: 500,
        timingFunc: 'easeIn',
      },
    });
  },

  reloadPage() {
    wx.redirectTo({
      url: '/pages/loading/loading',
    });
  },
});
