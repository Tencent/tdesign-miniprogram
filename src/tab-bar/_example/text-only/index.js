Component({
  data: {
    value: 'home',
    list: [
      { value: 'home', label: 'Home' },
      { value: 'app', label: 'App' },
      { value: 'chat', label: 'Chat' },
      { value: 'user', label: 'User' },
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
