Component({
  data: {
    right: [
      {
        text: 'Delete',
        className: 'btn delete-btn',
      },
    ],
    left: [
      {
        text: 'Choose',
        className: 'btn favor-btn',
      },
    ],
  },

  methods: {
    onActionClick({ detail }) {
      wx.showToast({ title: `You clicked ${detail.text}`, icon: 'none' });
    },
  },
});
