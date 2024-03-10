const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: 'Title', image }, 0, 12);

Page({
  offsetTopList: [],
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
    categories: [
      {
        label: 'Option 1',
        title: 'Title 1',
        badgeProps: {},
        items,
      },
      {
        label: 'Option 2',
        title: 'Title 2',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 10),
      },
      {
        label: 'Option 3',
        title: 'Title 3',
        badgeProps: {},
        items: items.slice(0, 6),
      },
      {
        label: 'Option 4',
        title: 'Title 4',
        badgeProps: {
          count: 8,
        },
        items: items.slice(0, 8),
      },
      {
        label: 'Option 5',
        title: 'Title 5',
        badgeProps: {},
        disabled: true,
        items: [],
      },
    ],
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value, scrollTop: 0 });
  },
});
