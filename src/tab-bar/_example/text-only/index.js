Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '标签' },
      { value: 'label_2', label: '标签' },
      { value: 'label_3', label: '标签' },
      { value: 'label_4', label: '标签' },
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
