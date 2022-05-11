Page({
  data: {
    percentage: 88,
  },

  clickAdd() {
    this.setData({
      percentage: this.data.percentage + 10,
    });
  },

  clickReduce() {
    this.setData({
      percentage: Math.max(0, this.data.percentage - 10),
    });
  },
});
