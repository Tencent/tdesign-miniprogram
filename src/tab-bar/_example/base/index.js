Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '标签一', icon: 'app' },
      { value: 'label_2', label: '标签二', icon: 'app' },
      { value: 'label_3', label: '标签三', icon: 'app' },
      { value: 'label_4', label: '标签四', icon: 'app' },
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
