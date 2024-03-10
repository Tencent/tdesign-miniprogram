Component({
  data: {
    cityText: '',
    city2Text: '',
    cityValue: [],
    city2Value: [],
    cityTitle: '',
    city2Title: '',
    citys: [
      { label: 'Beijing', value: 'Beijing' },
      { label: 'Shanghai', value: 'Shanghai' },
      { label: 'Guangzhou', value: 'Guangzhou' },
      { label: 'Shenzheng', value: 'Shenzheng' },
      { label: 'Chengdu', value: 'Chengdu' },
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
      console.log(e, 'Cancel');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },

    onTitlePicker() {
      this.setData({ cityVisible: true, cityTitle: 'Choose City' });
    },

    onWithoutTitlePicker() {
      this.setData({ city2Visible: true, city2Title: '' });
    },
  },
});
