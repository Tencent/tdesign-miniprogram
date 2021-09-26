Page({
  data: {
    picker1Visible: false,
    picker2Visible: false,
    picker3Visible: false,
    pickerTitle: '',
    citys: [
      { label: '北京', value: '北京' },
      { label: '上海', value: '上海' },
      { label: '广州', value: '广州' },
      { label: '深圳', value: '深圳' },
      { label: '成都', value: '成都' },
    ],
    years: [
      { label: '2021年', value: '2021' },
      { label: '2020年', value: '2020' },
      { label: '2019年', value: '2019' },
    ],
    months: Array.from(new Array(12), (_, index) => ({
      label: `${index + 1}月`,
      value: index + 1,
    })),
    days: Array.from(new Array(31), (_, index) => ({ label: `${index + 1}日`, value: index + 1 })),
    seasons: [
      { label: '春', value: '春' },
      { label: '夏', value: '夏' },
      { label: '秋', value: '秋' },
      { label: '冬', value: '冬' },
    ],
    selectedCityValue: '广州',
    selectedYears: '',
    selectedSeason: '',
    selectedMonth: '',
    selectedDay: '',
  },

  onColumnChange(e) {
    console.log('column change:', e.detail);
  },

  onClickPicker(e) {
    const { index, title } = e?.currentTarget?.dataset;

    this.setData({
      pickerTitle: title || '',
      [`picker${index}Visible`]: true,
    });
  },

  onPickerChange(e) {
    console.log('picker change:', e.detail);
  },

  /** **********************Picker1*************************** */
  onPicker1Confirm(e) {
    console.log('picker1 confirm:', e.detail);
    this.setData({
      picker1Visible: false,
      selectedCityValue: e.detail.value[0].value,
    });
  },
  onPicker1Cancel() {
    console.log('picker1 cancel:');
    this.setData({
      picker1Visible: false,
    });
  },
  /** **********************Picker1*************************** */

  /** **********************Picker2*************************** */
  onPicker2Confirm(e) {
    console.log('picker2 confirm:', e.detail);
    this.setData({
      picker2Visible: false,
      selectedYears: e.detail.value[0]?.value,
      selectedSeason: e.detail.value[1]?.value,
    });
  },
  onPicker2Cancel() {
    console.log('picker2 cancel:');
    this.setData({
      picker2Visible: false,
    });
  },
  /** **********************Picker2*************************** */

  /** **********************Picker2*************************** */
  onPicker3Confirm(e) {
    console.log('picker3 confirm:', e.detail);
    this.setData({
      picker3Visible: false,
      selectedYears: e.detail.value[0]?.value,
      selectedMonth: e.detail.value[1]?.value,
      selectedDay: e.detail.value[2]?.value,
    });
  },

  onPicker3Cancel() {
    console.log('picker3 cancel:');
    this.setData({
      picker3Visible: false,
    });
  },
  /** **********************Picker2*************************** */
});
