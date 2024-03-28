Component({
  data: {
    image: 'https://tdesign.gtimg.com/mobile/demos/logo1.png',
  },

  lifetimes: {
    attached() {
      const { theme } = wx.getSystemInfoSync();
      if (theme === 'dark') {
        this.setData({ image: 'https://tdesign.gtimg.com/mobile/demos/image-dark.png' });
      }
    },
  },
});
