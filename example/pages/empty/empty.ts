Page({
  data: {
    emptyBag: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptybag.png',
    emptyCart: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptycart.png',
  },
  toHome() {
    wx.reLaunch({
      url: '/components-exp/index/index',
    });
  },
});
