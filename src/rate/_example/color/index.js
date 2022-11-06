Component({
  data: {
    value: [3, 2.5],
  },
  methods: {
    onChange(e) {
      const { index } = e.currentTarget.dataset;
      const { value } = e.detail;
      this.setData({
        [`value[${index}]`]: value,
      });
    },
  },
});
