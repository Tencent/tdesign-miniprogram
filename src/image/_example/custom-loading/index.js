Component({
  lifetimes: {
    attached() {
      const loadingImageCustom = this.selectComponent('#loading-img-custom');
      loadingImageCustom.onLoadError = null;
      loadingImageCustom.onLoaded = null;
      loadingImageCustom.setData({
        isLoading: true,
        isFailed: false,
      });
    },
  },
});
