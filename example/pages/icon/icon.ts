import icons from './data.js';

Page({
  data: {
    icons: [
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'add-circle',
      'app',
      'arrow-down-rectangle',
      'attach',
      'backtop-rectangle',
      'backtop',
      'backward',
      'barcode',
      'books',
      'browse-off',
      'browse',
      'bulletpoint',
      'calendar',
      'call',
      'caret-down',
      'caret-left',
      'caret-right',
      'caret-up',
      'cart',
      'chart-bar',
      'chart-bubble',
      'chart-pie',
      'chart',
      'chat',
    ],
    prefixIcons: ['a-0', 'a-1h', 'a-2h', 'a-3h'],
  },
  onLoad() {
    this.setData({
      icons,
    });
  },
  onIconTap(event: any) {
    const { icons } = this.data;
    const { index, type } = event.currentTarget.dataset;
    if (type === 'prefix') {
      return;
    }
    wx.setClipboardData({
      data: icons[index],
    });
  },
});
