Component({
  data: {
    loadingProps: {
      size: '60rpx',
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
    handleTimeout() {
      wx.showToast({
        title: '时间超时',
        icon: 'none',
      });
    },
  },
});
