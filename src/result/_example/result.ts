Page({
  data: {
    image: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/empty__demo-image.png',
    // image: '/Users/anlyyao/Documents/work/TDesigne/tdesign-miniprogram/example/assets/illustration@2x.png',
  },
  goResultPage() {
    wx.navigateTo({ url: './result-page' });
  },
});
