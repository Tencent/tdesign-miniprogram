Component({
  pageLifetimes: {
    show: function () {
      const $ele1 = this.selectComponent('#loading-img');
      const $ele2 = this.selectComponent('#loading-img-custom');

      this.setLoadingStatus($ele1);
      this.setLoadingStatus($ele2);
    },
  },
  methods: {
    setLoadingStatus(ele) {
      ele.onLoadError = null;
      ele.onLoaded = null;
      ele.setData({
        isLoading: true,
        isFailed: false,
      });
    },
  },
});
