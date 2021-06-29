/* eslint-disable */

const list_1 = [
  {
    name: 'label_1',
    text: '标签栏一',
    icon: 'location_fill',
  },
  {
    name: 'label_2',
    text: '标签栏二',
    icon: 'tick_fill',
  },
];
const list_2 = [
  ...list_1,
  {
    name: 'label_3',
    text: '标签栏三',
    icon: 'help_fill',
  },
];
const list_3 = [
  ...list_2,
  {
    name: 'label_4',
    text: '标签栏四',
    icon: 'close_fill',
  },
];
const list_4 = [
  ...list_3,
  {
    name: 'label_5',
    text: '标签栏五',
    icon: 'star_fill',
  },
];

const list_5 = [
  ...list_1,
  {
    name: 'label_3',
    text: '此处展开',
    children: [
      {
        name: 'spread_1',
        text: '展开项一',
      },
      {
        name: 'spread_2',
        text: '展开项二',
      },
      {
        name: 'spread_3',
        text: '展开项三',
      },
    ],
  },
];

Page({
  data: {
    value: 0,
    demoList_1: [list_1, list_2, list_3],
    demoList_2: [list_1, list_2, list_3, list_4],
    list_5,
  },
  onChange(event) {
    console.log(event.detail);
  },
});
