Page({
  data: {
    active1: ['1'],
    active2: 0,
    panels: [
      {
        title: '基础面板',
        name: '0',
        content:
          '一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字',
      },
      {
        title: '内容列表',
        name: '1',
        content: [
          '一段很长很长的内容文字',
          '一段很长很长的内容文字',
          '一段很长很长的内容文字',
        ],
      },
      {
        title: '内容带标签',
        extra: '预设文本',
        content: [
          { label: '标题1', content: '预设文本' },
          { label: '类目标题2', content: '预设文本' },
          {
            label: '很长很长很长的内容标题',
            content:
              '一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字',
          },
        ],
      },
      {
        title: '内容带标签 - 宽度固定',
        extra: '预设文本',
        labelWidth: 80,
        content: [
          { label: '标题1', content: '预设文本' },
          {
            label: '很长很长很长的内容标题',
            content:
              '一段很长很长的内容文字一段很长很长的内容文字一段很长很长的内容文字',
          },
        ],
      },
    ],
  },
  changeBaseDemo(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({
      [key]: event.detail,
    });
  },
});
