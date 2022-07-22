Page({
  data: {
    value: 1,
  },

  onChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
