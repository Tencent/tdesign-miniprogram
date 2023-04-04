Component({
  options: {
    styleIsolation: 'apply-shared',
  },

  data: {
    value: 35,
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
