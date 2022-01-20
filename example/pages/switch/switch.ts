Page({
  data: {
    defaultVal: true,
  },
  handleChange(e) {
    this.setData({
      defaultVal: e.detail.value,
    });
  },
});
