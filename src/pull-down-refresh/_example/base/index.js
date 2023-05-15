Component({
  data: {
    enable: false,
    loadingProps: {
      size: '50rpx',
    },
    rowCol1: [{ width: '100%', height: '342rpx', borderRadius: '24rpx' }],
    rowCol2: [[{ width: '327rpx' }], [{ width: '200rpx' }], [{ size: '327rpx', borderRadius: '24rpx' }]],
    backTopVisible: false,
  },

  ready() {
    setTimeout(() => {
      this.setData({ enable: true });
    }, 1000);
  },

  methods: {
    onRefresh() {
      this.setData({ enable: true });
      setTimeout(() => {
        this.setData({ enable: false });
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
