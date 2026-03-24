import markdownData from './mock.js';
// 内置marked处理
Page({
  data: {
    markdownContent: markdownData,
  },
  handleNodeTap(e) {
    // 打印节点信息
    console.log('点击节点', e.detail.node);
  },
});
