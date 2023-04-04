Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: 'value1', icon: 'app' },
      { value: 'label_2', label: 'value2', icon: 'app' },
      {
        value: 'label_3',
        label: 'value3',
        icon: 'app',
        children: [
          {
            value: 'spread_3',
            label: '展开项三',
          },
          {
            value: 'spread_2',
            label: '展开项二',
          },
          {
            value: 'spread_1',
            label: '展开项一',
          },
        ],
      },
      { value: undefined, label: 'value4', icon: 'app' },
    ],
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
