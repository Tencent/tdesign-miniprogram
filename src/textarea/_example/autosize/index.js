Component({
  data: {
    autosize: {
      maxHeight: 120,
      minHeight: 20,
    },
  },
  lifetimes: {
    created() {
      this.setData({ skylineRender: this.renderer === 'skyline' });
    },
  },
  methods: {
    onLineChange(e) {
      console.log('lineCount: ', e.detail);
    },
  },
});
