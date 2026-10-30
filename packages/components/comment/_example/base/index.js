Component({
  data: {
    avatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
  },
  methods: {
    onAction(e) {
      const { action } = e.detail;
      console.log('action:', action);
    },
  },
});
