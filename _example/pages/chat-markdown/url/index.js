import markdownData from './mock.js';
// 内置marked处理
Page({
  data: {
    markdownContent: markdownData,
  },
  handleNodeTap(e) {
    const { node } = e.detail;
    // 打印节点信息
    console.log('点击节点', node);
    // 图片节点预览
    if (node && node.type === 'image') {
      wx.previewImage({
        urls: [node.href],
        current: node.href,
      });
    }
  },
});
