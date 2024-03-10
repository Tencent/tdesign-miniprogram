Component({
  data: {
    right: [
      {
        text: 'Edit',
        className: 'btn edit-btn',
      },
      {
        text: 'Delete',
        className: 'btn delete-btn',
      },
    ],
  },
  methods: {
    onActionClick({ detail }) {
      wx.showToast({ title: `You Clicked ${detail.text}`, icon: 'none' });
    },

    onDelete() {
      wx.showToast({ title: 'You Clicked the Delete Button', icon: 'none' });
    },
    onEdit() {
      wx.showToast({ title: 'You Clicked the Edit Button', icon: 'none' });
    },
    onFavor() {
      wx.showToast({ title: 'You Clicked the Collect Button', icon: 'none' });
    },
    onChoice() {
      wx.showToast({ title: 'You Clicked the Choose Button', icon: 'none' });
    },
  },
});
