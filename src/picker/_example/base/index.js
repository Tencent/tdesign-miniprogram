Component({
  data: {
    cityText: '',
    cityValue: [],
    dateText: '',
    dateValue: [],
    citys: [
      { label: '北京市', value: '北京市' },
      { label: '上海市', value: '上海市' },
      { label: '广州市', value: '广州市' },
      { label: '深圳市', value: '深圳市' },
      { label: '成都市', value: '成都市' },
    ],
    years: [
      { label: '2021年', value: '2021' },
      { label: '2020年', value: '2020' },
      { label: '2019年', value: '2019' },
    ],
    seasons: [
      { label: '春', value: '春' },
      { label: '夏', value: '夏' },
      { label: '秋', value: '秋' },
      { label: '冬', value: '冬' },
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

    onCityPicker() {
      this.setData({ cityVisible: true });
    },

    onSeasonPicker() {
      this.setData({ dateVisible: true });
    },
  },
});
