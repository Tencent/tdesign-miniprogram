Page({
  data: {
    currentTheme: 'light',
    actionCountIndex: 2,
    actionCountOptions: ['2个', '3个', '4个', '5个'],
    actionCountValues: [2, 3, 4, 5],
    layoutIndex: 0,
    layoutOptions: ['水平', '垂直', '网格'],
    layoutValues: ['horizontal', 'vertical', 'grid'],
    allActions: [
      { key: 'copy', text: '复制', icon: 'copy' },
      { key: 'reply', text: '回复', icon: 'reply' },
      { key: 'forward', text: '转发', icon: 'forward' },
      { key: 'delete', text: '删除', icon: 'delete' },
      { key: 'like', text: '点赞', icon: 'heart' },
      { key: 'share', text: '分享', icon: 'share' },
      { key: 'report', text: '举报', icon: 'flag' },
      { key: 'edit', text: '编辑', icon: 'edit' }
    ],
    actions: [
      { key: 'copy', text: '复制', icon: 'copy' },
      { key: 'reply', text: '回复', icon: 'reply' },
      { key: 'forward', text: '转发', icon: 'forward' },
      { key: 'delete', text: '删除', icon: 'delete' }
    ]
  },

  toggleTheme() {
    const newTheme = this.data.currentTheme === 'light' ? 'dark' : 'light';
    this.setData({
      currentTheme: newTheme
    });
  },

  onActionCountChange(e) {
    const index = e.detail.value;
    const count = this.data.actionCountValues[index];
    const actions = this.data.allActions.slice(0, count);

    this.setData({
      actionCountIndex: index,
      actions: actions
    });
  },

  onLayoutChange(e) {
    const index = e.detail.value;
    this.setData({
      layoutIndex: index
    });
  },

  onAction(e) {
    const { key } = e.detail;
    console.log('执行操作:', key);

    wx.showToast({
      title: `执行了${key}操作`,
      icon: 'success'
    });
  }
});
