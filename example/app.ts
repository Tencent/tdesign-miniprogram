import gulpError from './utils/gulpError';

App({
  onShow() {
    if (gulpError !== 'gulpErrorPlaceHolder') {
      wx.redirectTo({
        url: `/pages/gulp-error/index?gulpError=${gulpError}`,
      });
    }
    this.globalData.isDarkMode = wx.getSystemInfoSync().theme === 'dark';
  },
  globalData: {
    isDarkMode: false,
  },
});
