Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '标签一' },
      { value: 'label_2', label: '标签二' },
      { value: 'label_3', label: '标签三' },
      { value: 'label_4', label: '标签四' },
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
