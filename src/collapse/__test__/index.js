Component({
  data: {
    activeValues: [0],
    expandMutex: false,
    defaultExpandAll: false,
    secondDisabled: false,
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
  },
});
