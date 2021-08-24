/* eslint-disable */

const list_1 = [
  {
    value: 'label_1',
    label: '文字',
    icon: 'user_fill',
  },
  {
    value: 'label_2',
    label: '文字',
    icon: 'user_fill',
  },
];
const list_2 = [
  ...list_1,
  {
    value: 'label_3',
    label: '文字',
    icon: 'user_fill',
  },
];
const list_3 = [
  ...list_2,
  {
    value: 'label_4',
    label: '文字',
    icon: 'user_fill',
  },
];
const list_4 = [
  ...list_3,
  {
    value: 'label_5',
    label: '文字',
    icon: 'user_fill',
  },
];

const list_5 = [
  ...list_1,
  {
    value: 'label_3',
    label: '此处展开',
    children: [
      {
        value: 'spread_1',
        label: '展开项一',
      },
      {
        value: 'spread_2',
        label: '展开项二',
      },
      {
        value: 'spread_3',
        label: '展开项三',
      },
    ],
  },
];

Page({
  data: {
    value: 'label_1',
    demoList_1: [list_1, list_2, list_3],
    demoList_2: [list_1, list_2, list_3, list_4],
    list_5,
  },
  onChange(event) {
    console.log(event.detail);
  },
});
