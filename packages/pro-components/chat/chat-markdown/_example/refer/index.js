import markdownData from './mock-nodes.js';
// 内置marked处理
Page({
  data: {
    markdownContent: markdownData,
  },
  handleLinkTap(e) {
    // 打开链接
    console.log('监听点击', e);
    wx.navigateTo({
      url: e.detail.node.href,
    });
  },
});
