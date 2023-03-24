Component({
  data: {
    current: 1,
    options: [
      { value: 0, label: '单选' },
      { value: 1, label: '单选' },
      { value: 2, label: '单选单选单选单选单选单选单选单选单选单选单选单选单选单选' },
      {
        value: 3,
        label: '单选',
        content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
      },
    ],
  },
  methods: {
    onChange(event) {
      const { value } = event.detail;

      this.setData({ current: value });
    },
  },
});
