Component({
  data: {
    size: 160,
    maxSize: 300,
    minSize: 80,
  },
  methods: {
    increaseSize() {
      if (this.data.size < this.data.maxSize) {
        this.setData({
          size: this.data.size + 10,
        });
      } else {
        this.setData({
          size: this.data.maxSize,
        });
      }
    },
    decreaseSize() {
      if (this.data.size > this.data.minSize) {
        this.setData({
          size: this.data.size - 10,
        });
      } else {
        this.setData({
          size: this.data.minSize,
        });
      }
    },
  },
});
