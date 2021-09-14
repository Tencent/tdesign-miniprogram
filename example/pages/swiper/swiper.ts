Page({
  data: {
    current: 1,
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
    navigation1: { type: 'dots-bar' },
    navigation2: { type: 'fraction' },
    navigation3: { type: false, hasNavBtn: true },
    navigation4: { type: 'fraction', hasNavBtn: true },
  },
  onChange(e) {
    const {
      detail: { current, source },
    } = e;
    console.log('受控模式', current, source);
    // 受控模式
    this.setData({
      current,
    });
    // if (source === 'touch') {
    //   this.setData({
    //     current,
    //   });
    // }
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
