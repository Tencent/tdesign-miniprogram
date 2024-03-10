Component({
  data: {
    right: [
      {
        text: 'Edit',
        icon: {
          name: 'edit',
          size: 16,
        },
        className: 'btn edit-btn',
      },
      {
        text: 'Delete',
        icon: {
          name: 'delete',
          size: 16,
        },
        className: 'btn delete-btn',
      },
    ],
    rightIcon: [
      {
        icon: 'edit',
        className: 'btn edit-btn',
      },
      {
        icon: 'delete',
        className: 'btn delete-btn',
      },
    ],
  },
  methods: {
    onActionClick({ detail }) {
      wx.showToast({ title: `You clicked ${detail.text}`, icon: 'none' });
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
