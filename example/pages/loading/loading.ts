Page({
  data: {
    barLoadingTimeOut: null,
    loading: false,
    progress: -1,
  },
  showProgressBar() {
    const timeout = setTimeout(() => {
      this.setData({ loading: false });
    }, 10000);
    this.setData({
      progress: -1,
      loading: true,
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
