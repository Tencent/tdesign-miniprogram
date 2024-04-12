Component({
  data: {
    image: 'https://tdesign.gtimg.com/mobile/demos/logo-light.png',
  },

  lifetimes: {
    attached() {
      if (wx.getSystemInfoSync().theme === 'dark') {
        this.setData({ image: 'https://tdesign.gtimg.com/mobile/demos/image-dark.png' });
      }
    },
  },
});
