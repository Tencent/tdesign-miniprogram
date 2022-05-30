/* eslint-disable */

const list_1 = [
  {
    value: 'label_1',
    label: '标签栏一',
    icon: 'app',
  },
  {
    value: 'label_2',
    label: '标签栏二',
    icon: 'app',
  },
];
const list_2 = [
  ...list_1,
  {
    value: 'label_3',
    label: '标签栏三',
    icon: 'app',
  },
];
const list_3 = [
  ...list_2,
  {
    value: 'label_4',
    label: '标签栏四',
    icon: 'app',
  },
];

const list_11 = [
  {
    value: 'label_1',
    label: '文字',
    icon: 'app',
  },
  {
    value: 'label_2',
    label: '文字',
    icon: 'app',
  },
];
const list_21 = [
  ...list_11,
  {
    value: 'label_3',
    label: '文字',
    icon: 'app',
  },
];
const list_31 = [
  ...list_21,
  {
    value: 'label_4',
    label: '文字',
    icon: 'app',
  },
];
const list_41 = [
  ...list_31,
  {
    value: 'label_5',
    label: '文字',
    icon: 'app',
  },
];

const list_5 = [
  ...list_1,
  {
    value: 'label_3',
    label: '此处展开',
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

Page({
  data: {
    value: 'label_1',
    demoList_1: [list_1, list_2, list_3],
    demoList_2: [list_11, list_21, list_31, list_41],
    list_5,
  },
  onChange(event) {
    console.log(event.detail);
  },
});
