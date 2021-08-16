Page({
  data: {
    imgUrl: 'https://cdn-we-retail.ym.tencent.com/miniapp/home/home-default-logo.png',
  },
  onReady() {
    const loadingImage = this.selectComponent('#loading-img');
    loadingImage.onLoadError = null;
    loadingImage.onLoaded = null;
    loadingImage.setData({
      loading: true,
      failed: false,
    });
  },
});
