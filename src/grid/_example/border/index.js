Component({
  data: {
    img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
    img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    border: {
      color: '#E7E7E7',
    },
  },

  lifetimes: {
    attached() {
      if (getApp().globalData.isDarkMode) {
        this.setData({ border: { color: '#383838' } });
      }
    },
  },
});
