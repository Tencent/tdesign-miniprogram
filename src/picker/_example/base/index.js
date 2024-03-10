Component({
  data: {
    cityText: '',
    cityValue: [],
    dateText: '',
    dateValue: [],
    citys: [
      { label: 'Beijing', value: 'Beijing' },
      { label: 'Shanghai', value: 'Shanghai' },
      { label: 'Guangzhou', value: 'Guangzhou' },
      { label: 'Shenzheng', value: 'Shenzheng' },
      { label: 'Chengdu', value: 'Chengdu' },
    ],
    years: [
      { label: '2021', value: '2021' },
      { label: '2020', value: '2020' },
      { label: '2019', value: '2019' },
    ],
    seasons: [
      { label: 'spring', value: 'spring' },
      { label: 'summer', value: 'summer' },
      { label: 'autumn', value: 'autumn' },
      { label: 'winter', value: 'winter' },
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

    onCityPicker() {
      this.setData({ cityVisible: true });
    },

    onSeasonPicker() {
      this.setData({ dateVisible: true });
    },
  },
});
