Component({
  data: {
    valueWithIcon: 0,
    optionsWithIcon: [
      { value: 0, label: 'home', icon: 'home' },
      { value: 1, label: 'categeray', icon: 'app' },
      { value: 2, label: 'mine', icon: 'user' },
    ],
  },
  methods: {
    onChangeWithIcon(e) {
      console.log('onChangeWithIcon:', e.detail);
      this.setData({ valueWithIcon: e.detail.value });
    },
  },
});
