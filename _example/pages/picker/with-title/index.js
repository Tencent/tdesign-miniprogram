Component({
  data: {
    cityText: '',
    city2Text: '',
    cityValue: [],
    city2Value: [],
    cityTitle: '',
    city2Title: '',
    citys: [
      { label: '北京市', value: '北京市' },
      { label: '上海市', value: '上海市' },
      { label: '广州市', value: '广州市' },
      { label: '深圳市', value: '深圳市' },
      { label: '成都市', value: '成都市' },
    ],
  },

  methods: {
    onColumnChange(e) {
      console.log('picker pick:', e);
    },

    onPickerChange(e) {
      const { key } = e.currentTarget.dataset;
      const { value } = e.detail;

      console.log('picker change:', e.detail);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: value,
        [`${key}Text`]: value.join(' '),
      });
    },

    onPickerCancel(e) {
      const { key } = e.currentTarget.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },

    onTitlePicker() {
      this.setData({ cityVisible: true, cityTitle: '选择城市' });
    },

    onWithoutTitlePicker() {
      this.setData({ city2Visible: true, city2Title: '' });
    },
  },
});
