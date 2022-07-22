Page({
  data: {
    value: [4, 5],
    texts: ['1分', '2分', '3分', '4分', '5分'],
  },

  onChange(e) {
    const { index } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`value[${index}]`]: value,
    });
  },
});
