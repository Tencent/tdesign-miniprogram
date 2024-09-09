Component({
  data: {
    pics: [
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    ],
  },

  methods: {
    onAddTap() {
      wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
    },
    onClickCollapsedAvatar() {
      console.log('click collapsed avatar');
    },
  },
});
