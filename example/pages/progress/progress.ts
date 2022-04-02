Page({
  data: {
    percentage: 88,
  },

  clickAdd() {
    this.setData({
      percentage: this.data.percentage + 10 >= 100 ? 100 : this.data.percentage + 10,
    });
  },

  clickReduce() {
    this.setData({
      percentage: this.data.percentage - 10 <= 0 ? 0 : this.data.percentage - 10,
    });
  },
});
