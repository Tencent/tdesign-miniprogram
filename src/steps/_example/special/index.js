Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    count: 4,
  },
  methods: {
    toNext() {
      this.setData({ count: this.data.count + 1 });
    },
    onCascader(e) {
      const { current } = e.detail;

      this.setData({
        count: current + 1,
      });
    },
  },
});
