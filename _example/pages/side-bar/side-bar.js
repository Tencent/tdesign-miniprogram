Page({
  toNavigation(e) {
    const { target } = e.target.dataset;

    wx.navigateTo({
      url: `./${target}/index`,
    });
  },
});
