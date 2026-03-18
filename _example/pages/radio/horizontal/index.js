Page({
  data: {
    checked: false,
  },
  handleChange(e) {
    this.setData({
      checked: e.detail.checked,
    });
  },
});
