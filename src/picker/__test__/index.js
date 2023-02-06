const PICKER_KEY = {
  CITY: 'city',
  YEAR_SEASONS: 'yearSeasons',
  DATE: 'date',
};

Component({
  data: {
    PICKER_KEY,

    [`${PICKER_KEY.CITY}Visible`]: false,
    [`${PICKER_KEY.YEAR_SEASONS}Visible`]: false,
    [`${PICKER_KEY.DATE}Visible`]: false,

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

    [`${PICKER_KEY.CITY}Value`]: [],
    [`${PICKER_KEY.YEAR_SEASONS}Value`]: [],
    [`${PICKER_KEY.DATE}Value`]: [],
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },

  methods: {
    joinArray(array) {
      return array.join('-');
    },

    onClickPicker(e) {
      const { key } = e?.currentTarget?.dataset;

      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onPickerChange(e) {
      const { key } = e?.currentTarget?.dataset;
      this.setData({
        [`${key}Value`]: e.detail.value,
        [`${key}CurrentValue`]: this.joinArray(e.detail.value),
      });
    },
    onPickerCancel(e) {
      const { key } = e?.currentTarget?.dataset;
      this.setData({
        [`${key}Visible`]: false,
      });
    },
  },
});
