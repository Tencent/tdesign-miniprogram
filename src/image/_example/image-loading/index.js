Component({
  pageLifetimes: {
    show: function () {
      const loadingImage = this.selectComponent('#loading-img');
      loadingImage.onLoadError = null;
      loadingImage.onLoaded = null;
      loadingImage.setData({
        isLoading: true,
        isFailed: false,
      });
    },
  },
});
