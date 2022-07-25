Page({
  data: {
    value: 3,
  },

  onChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
