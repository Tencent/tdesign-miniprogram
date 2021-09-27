/*
 * @Author: shiyanzhang
 * @Date: 2021-08-24 15:56:07
 * @Description:
 * @FilePath: /tdesign-miniprogram/example/pages/empty/empty.ts
 */
Page({
  data: {
    emptyBag: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptybag.png',
    emptyCart: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptycart.png',
  },
  toHome() {
    wx.reLaunch({
      url: '/pages/home/home',
    });
  },
});
