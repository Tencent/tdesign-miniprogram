import markdownData from '../base/mock2.js';

const CHUNK_SIZE = 5;
const INTERVAL_MS = 80;

Page({
  data: {
    segmentedOptions: [
      { value: 0, label: '光标' },
      { value: 1, label: '圆点' },
      { value: 2, label: '省略号' },
      { value: 3, label: '无动画' },
    ],
    selectedSegment: -1, // 初始不选中任何分段
    content: '',
    streaming: { hasNextChunk: false, tail: true },
  },

  onLoad() {
    this._timer = null;
  },

  startStreaming(segmentValue) {
    // 停止上一个定时器
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }

    // 先将 selectedSegment 设为 -1，强制销毁所有 t-chat-markdown 节点
    this.setData({ content: '', selectedSegment: -1 });

    // 下一帧再挂载新节点并开始播放
    setTimeout(() => {
      let index = 0;

      // 无动画：不传 streaming，仅更新 content
      if (segmentValue === 3) {
        this.setData({ selectedSegment: segmentValue });
        this._timer = setInterval(() => {
          index += CHUNK_SIZE;
          const isDone = index >= markdownData.length;
          this.setData({ content: markdownData.slice(0, index) });
          if (isDone) {
            clearInterval(this._timer);
            this._timer = null;
          }
        }, INTERVAL_MS);
        return;
      }

      this.setData({
        selectedSegment: segmentValue,
        streaming: { hasNextChunk: true, tail: true },
      });

      this._timer = setInterval(() => {
        index += CHUNK_SIZE;
        const isDone = index >= markdownData.length;
        this.setData({
          content: markdownData.slice(0, index),
          streaming: { hasNextChunk: !isDone, tail: true },
        });
        if (isDone) {
          clearInterval(this._timer);
          this._timer = null;
        }
      }, INTERVAL_MS);
    }, 0);
  },

  // 分段切换事件处理
  handleSegmentChange(e) {
    const segmentValue = e.detail.value;
    this.startStreaming(segmentValue);
  },

  handleNodeTap(e) {
    const { node } = e.detail;
    if (node && node.type === 'image') {
      wx.previewImage({ urls: [node.href], current: node.href });
    }
  },
});
