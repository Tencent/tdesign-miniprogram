Component({
  methods: {
    options: {
      styleIsolation: 'apply-shared',
    },
    onBack() {
      wx.navigateBack();
    },
    onGoHome() {
      wx.reLaunch({
        url: '/pages/home/home',
      });
    },
  },
});
