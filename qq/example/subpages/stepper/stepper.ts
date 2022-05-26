Page({
  data: {
    value: 20,
  },

  handleChange(e) {
    const { value } = e.detail;

    console.log(value);
    this.setData({
      value,
    });
  },
});
