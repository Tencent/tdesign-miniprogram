Component({
  data: {
    value: 'home',
    list: [
      { value: 'home', label: '首页' },
      { value: 'app', label: '应用' },
      { value: 'chat', label: '聊天' },
      { value: 'user', label: '我的' },
    ],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
