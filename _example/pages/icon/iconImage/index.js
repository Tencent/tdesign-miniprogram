Component({
  data: {
    imageIconList: [
      'https://tdesign.gtimg.com/mobile/demos/icon1.png',
      'https://tdesign.gtimg.com/mobile/demos/icon2.png',
    ],
  },

  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') return;
      wx.showToast({ title: name, icon: 'none', duration: 1000 });
    },
  },
});
