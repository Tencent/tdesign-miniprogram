Component({
  data: {
    prefixIcons: ['a-0', 'a-1h', 'a-2h', 'a-3h'],
  },
  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') {
        return;
      }
      wx.setClipboardData({
        data: name,
      });
    },
  },
});
