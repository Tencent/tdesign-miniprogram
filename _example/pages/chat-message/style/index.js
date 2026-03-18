Component({
  properties: {
    userMessage: {
      type: Object,
      value: {
        role: 'user',
        content: [
          {
            type: 'text',
            data: '牛顿第一定律是否适用于所有参考系？',
          },
        ],
      },
    },
  },
});
