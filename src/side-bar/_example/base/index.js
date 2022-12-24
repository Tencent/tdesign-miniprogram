const image = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  offsetTopList: [],
  data: {
    sideBarIndex: 0,
    scrollTop: 0,
    categories: [
      {
        label: '选项选项',
        title: '标题',
        items,
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 9),
      },
      {
        label: '选项',
        title: '标题',
        items: items.slice(0, 9),
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          count: 6,
        },
        items: items.slice(0, 6),
      },
      {
        label: '选项',
        title: '标题',
        items: items.slice(0, 3),
      },
    ],
  },
  onLoad() {
    const query = wx.createSelectorQuery().in(this);

    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
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
