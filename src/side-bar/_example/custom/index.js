const image = 'https://tdesign.gtimg.com/mobile/demos/example1.png';
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
        items: items.slice(0, 9),
      },
      {
        label: 'Option 3',
        title: 'Title 3',
        badgeProps: {},
        items: items.slice(0, 9),
      },
      {
        label: 'Option 4',
        title: 'Title 4',
        badgeProps: {
          count: 6,
        },
        items: items.slice(0, 6),
      },
      {
        label: 'Option 5',
        title: 'Title 5',
        badgeProps: {},
        items: items.slice(0, 3),
      },
    ],
  },
  onLoad() {
    const query = wx.createSelectorQuery().in(this);
    const { sideBarIndex } = this.data;

    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
        this.setData({ scrollTop: rects[sideBarIndex].top });
      })
      .exec();
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value, scrollTop: this.offsetTopList[value] });
  },
  onScroll(e) {
    const { scrollTop } = e.detail;
    const threshold = 50; // 下一个标题与顶部的距离

    if (scrollTop < threshold) {
      this.setData({ sideBarIndex: 0 });
      return;
    }

    const index = this.offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);

    if (index > -1) {
      this.setData({ sideBarIndex: index });
    }
  },
});
