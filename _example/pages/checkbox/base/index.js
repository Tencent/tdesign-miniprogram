Component({
  data: {
    current: ['checkbox1', 'checkbox2'],
    options: [
      { label: '多选', value: 'checkbox1' },
      { label: '多选', value: 'checkbox2' },
      {
        label: '多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行',
        value: 'checkbox3',
        maxLabelRow: 2,
      },
      {
        label: '多选',
        value: 'checkbox4',
        content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
        maxContentRow: 2,
      },
    ],
  },

  methods: {
    handleGroupChange(event) {
      console.log('group', event.detail.value);
      this.setData({
        current: event.detail.value,
      });
    },
  },
});
