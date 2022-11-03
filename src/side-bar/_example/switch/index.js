const image = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  offsetTopList: [],
  data: {
    sideBarIndex: 0,
    scrollTop: 0,
    categories: [
      {
        label: '选项',
        title: '标题',
        items,
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 10),
      },
      {
        label: '选项',
        title: '标题',
        disabled: true,
        items: [],
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          count: 8,
        },
        items: items.slice(0, 8),
      },
      {
        label: '选项',
        title: '标题',
        items: items.slice(0, 6),
      },
    ],
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value });
  },
});
