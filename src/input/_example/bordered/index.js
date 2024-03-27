Component({
  data: {
    style: 'border: 2rpx solid rgba(220,220,220,1);border-radius: 12rpx;',
  },

  lifetimes: {
    attached() {
      const { theme } = wx.getSystemInfoSync();
      console.log('theme', theme);
      if (theme === 'dark') {
        this.setData({
          style: 'border: 2rpx solid #5E5E5E;border-radius: 12rpx;',
        });
      }
    },
  },
});
