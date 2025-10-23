Page({
  data: {
    actions: [
      { key: 'copy', text: '复制', icon: 'copy' },
      { key: 'reply', text: '回复', icon: 'reply' },
      { key: 'forward', text: '转发', icon: 'forward' },
      { key: 'delete', text: '删除', icon: 'delete' }
    ],
    customActions: [
      { key: 'like', text: '点赞', icon: 'heart' },
      { key: 'share', text: '分享', icon: 'share' },
      { key: 'report', text: '举报', icon: 'flag' }
    ]
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
