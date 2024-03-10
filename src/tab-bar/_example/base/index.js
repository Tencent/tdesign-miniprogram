Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: 'Home', icon: 'home' },
      { value: 'label_2', label: 'App', icon: 'app' },
      { value: 'label_3', label: 'Chat', icon: 'chat' },
      { value: 'label_4', label: 'User', icon: 'user' },
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
