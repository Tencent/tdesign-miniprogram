Component({
  data: {
    value: 4,
    texts: ['非常糟糕', '有些糟糕', '可以尝试', '可以前往', '推荐前往'],
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
