Page({
  data: {
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    items: [
      {
        cls: 'item0',
      },
      {
        cls: 'item1',
      },
      {
        cls: 'item2',
      },
      {
        cls: 'item3',
      },
      {
        cls: 'item4',
      },
    ],
  },
  onChange(e) {
    const {
      detail: { current, source },
    } = e;
    // console.log(e);
    if (source === 'touch') {
      this.setData({
        current,
      });
    }
    // wx.showToast({ title: '你点击了选择', icon: 'none' });
  },
  onAutoplayChange(e) {
    this.setData({
      autoplay: e.detail.value,
    });
  },
  onIntervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
  onDurationChange(e) {
    this.setData({
      duration: e.detail.value,
    });
  },
});
