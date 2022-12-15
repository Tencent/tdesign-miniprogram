Component({
  data: {
    value: 2,
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
