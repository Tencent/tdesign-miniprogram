Page({
  data: {
    pics6: [
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    ],
  },
  onAddTap() {
    wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
  },
});
