Component({
  data: {
    value: '最近',
    valueWithDisabled: 1,
    optionsWithDisabled: [
      { value: 0, label: '周一' },
      { value: 1, label: '周二' },
      { value: 2, label: '周三', disabled: true },
      { value: 3, label: '周四' },
      { value: 4, label: '周五', disabled: true },
    ],
  },
  methods: {
    onChange(e) {
      console.log('change:', e.detail);
      this.setData({ value: e.detail.value });
    },

    onChangeWithDisabled(e) {
      console.log('onChangeWithDisabled:', e.detail);
      this.setData({ valueWithDisabled: e.detail.value });
    },
  },
});
