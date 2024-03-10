Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', icon: 'home', ariaLabel: 'home' },
      { value: 'label_2', icon: 'app', ariaLabel: 'application' },
      { value: 'label_3', icon: 'chat', ariaLabel: 'chat' },
      { value: 'label_4', icon: 'user', ariaLabel: 'user' },
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
