Component({
  data: {
    baseRefresh: {
      value: false,
    },
    loadingProps: {
      size: '50rpx',
    },
    rowCol: [
      { width: '100%', height: '342rpx' },
      [
        { width: '340rpx', height: '32rpx' },
        { width: '340rpx', height: '32rpx', marginLeft: '22rpx' },
      ],
      [
        { width: '218rpx', height: '32rpx' },
        { width: '218rpx', height: '32rpx', marginLeft: '144rpx' },
      ],
    ],
  },

  methods: {
    onPullDownRefresh() {
      setTimeout(() => {
        this.setData({ 'baseRefresh.value': false });
      }, 1500);
    },
  },
});
