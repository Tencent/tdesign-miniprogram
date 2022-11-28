Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    value: [0, 1],
    value1: [0, 1],
  },
  methods: {
    onChange(e) {
      this.setData({ value: e.detail.value });
    },
    onChange1(e) {
      this.setData({ value1: e.detail.value });
    },
  },
});
