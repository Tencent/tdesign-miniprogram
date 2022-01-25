Page({
  data: {
    current: 0,
  },
  handleChange({ detail }) {
    console.log(detail.current);
    this.setData({
      current: detail.current,
    });
  },
});
