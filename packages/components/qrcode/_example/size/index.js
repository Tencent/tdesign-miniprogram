Component({
  data: {
    size: 160,
    minSize: 80,
    maxSize: 240,
  },
  methods: {
    changeSize(e) {
      const newSize = this.data.size + e.currentTarget.dataset.step;
      if (newSize >= this.data.minSize && newSize <= this.data.maxSize) {
        this.setData({ size: newSize });
      }
    },
  },
});
