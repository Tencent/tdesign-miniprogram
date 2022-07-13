Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '标签栏一' },
      { value: 'label_2', label: '标签栏二' },
      { value: 'label_3', label: '标签栏三' },
      { value: 'label_4', label: '标签栏四' },
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
