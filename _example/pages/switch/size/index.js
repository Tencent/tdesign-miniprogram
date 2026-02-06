Component({
  data: {
    defaultVal: true,
  },
  methods: {
    handleChange(e) {
      this.setData({
        defaultVal: e.detail.value,
      });
    },
  },
});
