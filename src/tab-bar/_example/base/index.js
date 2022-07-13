Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '文字', icon: 'app' },
      { value: 'label_2', label: '文字', icon: 'app' },
      { value: 'label_3', label: '文字', icon: 'app' },
      { value: 'label_4', label: '文字', icon: 'app' },
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
