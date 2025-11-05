Component({
  data: {
    animation: 'moving',
    content: {
      text: '嗯，用户问牛顿第一定律是不是适用于所有参考系。首先，我得先回忆一下牛顿第一定律的内容。牛顿第一定律，也就是惯性定律，说物体在没有外力作用时会保持静止或匀速直线运动。也就是说， 保持原来的运动状态。',
      title: '思考中···',
    },
    status: 'pending',
  },
  methods: {
    handleCollapsedChange(e) {
      console.log('展开状态变化:', e.detail);
    },
  },
});
