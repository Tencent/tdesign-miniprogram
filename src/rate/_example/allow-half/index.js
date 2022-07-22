Page({
  data: {
    value: 3.5,
  },

  onChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
