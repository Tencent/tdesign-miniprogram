Page({
  data: {
    pics: [
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-1.jpg',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-2.jpg',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-3.jpg',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-4.jpg',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-5.jpg',
    ],
  },
  onAddTap() {
    wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
  },
});
