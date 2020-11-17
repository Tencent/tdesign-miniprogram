Page({
  data: {
    value: true,
    valueSmall: 2,
    valueDefault: 'baby',
    valueLarge: false,
  },
  onLoad() {
  },
  onswitchchange(e) {
    this.setData({
      value: e.detail.value
    });
  },
  onswitchchangesmall(e) {
    this.setData({
      valueSmall: e.detail.value
    });
  },
  onswitchchangedefault(e) {
    this.setData({
      valueDefault: e.detail.value
    });
  },
  onswitchchangelarge(e) {
    this.setData({
      valueLarge: e.detail.value
    });
  },
});
