Page({
  data: {
    imgUrl: 'https://cdn-we-retail.ym.tencent.com/miniapp/home/home-default-logo.png',
  },
  onReady() {
    const loadingImage = this.selectComponent('#loading-img');
    loadingImage.onLoadError = null;
    loadingImage.onLoaded = null;
    loadingImage.setData({
      isLoading: true,
      isFailed: false,
    });
    const loadingImageCustom = this.selectComponent('#loading-img-custom');
    loadingImageCustom.onLoadError = null;
    loadingImageCustom.onLoaded = null;
    loadingImageCustom.setData({
      isLoading: true,
      isFailed: false,
    });
  },
});
