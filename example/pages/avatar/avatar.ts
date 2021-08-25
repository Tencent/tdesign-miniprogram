Page({
  data: {
    pics: [
      'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
      'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-2.jpg',
      'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-3.jpg',
      'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-4.jpg',
      'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-5.jpg',
    ],
  },
  onAddTap() {
    wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
  },
  onLoadError() {
    console.log('自定义错误事件');
  }
});
