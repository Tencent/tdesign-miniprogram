Component({
  data: {
    logoList: [
      {
        icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
        title: '品牌名称',
      },
      {
        url: 'https://tdesign.gtimg.com/mobile/demos/logo1.png',
      },
    ],
  },

  lifetimes: {
    attached() {
      if (getApp().globalData.isDarkMode) {
        const updateKeyName = 'logoList[1].url';
        this.setData({ [updateKeyName]: 'https://tdesign.gtimg.com/mobile/demos/footer-logo-dark.png' });
      }
    },
  },
});
