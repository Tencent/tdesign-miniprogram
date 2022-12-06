Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', icon: 'home', ariaLabel: '首页' },
      { value: 'label_2', icon: 'app' },
      { value: 'label_3', icon: 'chat' },
      { value: 'label_4', icon: 'user' },
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
