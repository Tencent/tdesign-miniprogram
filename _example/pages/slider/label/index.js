Component({
  data: {
    value: 35,
    label(value, position) {
      const symbols = { min: '%', max: '%', start: '%', end: '%' };
      return `${value}${symbols[position]}`;
    },
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
