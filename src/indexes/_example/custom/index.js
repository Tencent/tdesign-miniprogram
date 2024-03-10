const children = new Array(5).fill('List content');

const list = [
  {
    index: 1,
    children,
  },
  {
    index: 3,
    children,
  },
  {
    index: 5,
    children,
  },
  {
    index: 7,
    children,
  },
  {
    index: 8,
    children,
  },
  {
    index: 10,
    children,
  },
  {
    index: '#',
    children,
  },
];

Page({
  data: {
    list,
    indexList: list.map((item) => item.index),
    curIndex: '',
  },

  onChange(e) {
    const { index } = e.detail;

    console.log(index);
    this.setData({
      curIndex: index,
    });
  },
});
