Component({
  data: {
    activeValues: [0],
    expandMutex: false,
    defaultExpandAll: false,
    secondDisabled: false,
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
  },
});
