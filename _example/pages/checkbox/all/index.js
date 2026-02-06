Component({
  data: {
    options: [
      { label: '全选', checkAll: true },
      { label: '多选', value: 1 },
      { label: '多选', value: 2 },
      {
        label: '多选',
        value: 3,
        content: '单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息',
      },
    ],
    checkAllValues: [1, 2, 3, ''],
  },

  methods: {
    onCheckAllChange(event) {
      console.log('checkbox', event.detail.value);
      this.setData({
        checkAllValues: event.detail,
      });
    },
  },
});
