Component({
  data: {
    right: [
      {
        text: '删除',
        className: 'btn delete-btn',
      },
    ],
    left: [
      {
        text: '选择',
        className: 'btn favor-btn',
      },
    ],
  },

  methods: {
    onActionClick({ detail }) {
      wx.showToast({ title: `你点击了${detail.text}`, icon: 'none' });
    },
  },
});
