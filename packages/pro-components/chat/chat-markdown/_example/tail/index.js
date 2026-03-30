import markdownData from '../base/mock2.js';

const CHUNK_SIZE = 5;
const INTERVAL_MS = 80;

Page({
  data: {
    content: '',
    streaming: { hasNextChunk: false, tail: true },
  },

  onLoad() {
    this.startStreaming();
  },

  startStreaming() {
    let index = 0;

    this.setData({
      content: '',
      streaming: { hasNextChunk: true, tail: true },
    });

    const timer = setInterval(() => {
      index += CHUNK_SIZE;
      const isDone = index >= markdownData.length;
      this.setData({
        content: markdownData.slice(0, index),
        streaming: { hasNextChunk: !isDone, tail: true },
      });
      if (isDone) clearInterval(timer);
    }, INTERVAL_MS);
  },

  handleReplay() {
    this.startStreaming();
  },

  handleNodeTap(e) {
    const { node } = e.detail;
    if (node && node.type === 'image') {
      wx.previewImage({ urls: [node.href], current: node.href });
    }
  },
});
