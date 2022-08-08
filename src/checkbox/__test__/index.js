Component({
  data: {
    value: ['1'],
    single: false,
    max: 2,
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
