Component({
  data: {
    value: 3.5,
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
