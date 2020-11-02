Page({
  data: {
    vertical: true,
    error: false,
    size: '48px',
    showType: 'all',
    showTypeIdx: 0,
    layout: 'default',
    barLoadingTimeOut: null,
    loading: true,
  },
  toggleVertical() {
    this.resetDefault();
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  toggleError() {
    this.setData({
      error: !this.data.error,
    });
  },
  toggleSize() {
    this.resetDefault();
    this.setData({
      size: this.data.size == '48px' ? '30px' : '48px',
    });
  },
  toggleLayout() {
    if (this.data.layout == 'default') {
      const timeout = setTimeout(() => {
        this.setData({ loading: false });
      }, 10000);
      this.setData({
        layout: 'bar',
        barLoadingTimeOut: timeout,
      });
      this.changeNavBarColor('#000000', '#ffffff');
    } else {
      this.resetDefault();
    }
  },
  toggleShowType() {
    this.resetDefault();
    const types = ['all', 'icon-only', 'text-only'];
    const index = (this.data.showTypeIdx + 1) % types.length;
    this.setData({
      showType: types[index],
      showTypeIdx: index,
    });
  },
  resetDefault() {
    clearTimeout(this.data.barLoadingTimeOut);
    this.changeNavBarColor('#ffffff', '#0052d9');
    this.setData({
      layout: 'default',
      error: false,
      loading: true,
    });
  },
  changeNavBarColor(frontColor, backgroundColor) {
    wx.setNavigationBarColor({
      frontColor,
      backgroundColor,
      animation: {
        duration: 500,
        timingFunc: 'easeIn',
      },
    });
  },
});
