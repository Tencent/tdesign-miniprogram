const list = [
  {
    value: 'label_1',
    label: '标签一',
    icon: 'app',
  },
  {
    value: 'label_2',
    label: '标签二',
    icon: 'app',
  },
  {
    value: 'label_3',
    label: '展开项',
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
];

Component({
  data: {
    list,
  },
});
