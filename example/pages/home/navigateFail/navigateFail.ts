Page({
  data: {
    failImage: '/assets/error-circle-filled@2x.png',
  },

  toHome() {
    wx.reLaunch({
      url: '/pages/home/home',
    });
  },
});
