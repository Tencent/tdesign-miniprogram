Component({
  methods: {
    reloadPage() {
      wx.redirectTo({
        url: '/pages/loading/loading',
      });
    },
  },
});
