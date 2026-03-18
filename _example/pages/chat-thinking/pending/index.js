Component({
  data: {
    animation: 'moving',
    content: {
      text: '嗯，用户问牛顿第一定律是不是适用于所有参考系。首先，我得先回忆一下牛顿第一定律的内容。牛顿第一定律',
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
