Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', icon: 'app' },
      { value: 'label_2', icon: 'app' },
      { value: 'label_3', icon: 'app' },
      { value: 'label_4', icon: 'app' },
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
