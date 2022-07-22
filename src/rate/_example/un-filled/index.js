Page({
  data: {
    value: 2,
  },

  onChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
