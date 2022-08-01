Component({
  data: {
    percentage: 88,
  },

  methods: {
    clickAdd() {
      this.setData({
        percentage: Math.min(this.data.percentage + 10, 100),
      });
    },

    clickReduce() {
      this.setData({
        percentage: Math.max(0, this.data.percentage - 10),
      });
    },
  },
});
