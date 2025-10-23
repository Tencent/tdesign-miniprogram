Component({
  data: {
    layout: 'border',
    animation: 'moving',
    content: {
      text: '111111111',
      title: '思考过程',
    },
  },
  methods: {
    handleLayoutChange(e) {
      this.setData({
        layout: e.detail.value,
      });
    },
    handleAnimationChange(e) {
      this.setData({
        animation: e.detail.value,
      });
    },
  },
});
