Component({
  data: {
    baseRefresh: {
      value: false,
    },
    loadingProps: {
      size: '50rpx',
    },
    rowCol1: [{ width: '100%', height: '342rpx', borderRadius: '24rpx' }],
    rowCol2: [[{ width: '327rpx' }], [{ width: '200rpx' }], [{ size: '327rpx', borderRadius: '24rpx' }]],
    backTopVisible: false,
  },

  methods: {
    onPullDownRefresh() {
      setTimeout(() => {
        this.setData({ 'baseRefresh.value': false });
      }, 1500);
    },
    onScroll(e) {
      const { scrollTop } = e.detail;

      this.setData({
        backTopVisible: scrollTop > 100,
      });
    },
  },
});
