Component({
  data: {
    avatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
    actions: [
      { key: 'reply', content: '回复', placement: 'start' },
      { key: 'like', content: '6', icon: 'thumb-up', placement: 'end', disabled: true },
      { key: 'dislike', icon: 'uncomfortable-1', placement: 'end' },
    ],
  },
  methods: {
    onAction(e) {
      const { action } = e.detail;
      console.log('action:', action);
    },
  },
});
