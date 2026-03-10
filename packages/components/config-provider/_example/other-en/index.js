Component({
  data: {
    // rate
    rateValue: 3,

    // calendar
    visible: false,
    value: null,

    // date-time-picker
    mode: '',
    dateVisible: false,
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入
    dateText: '',
    popupProps: {
      usingCustomNavbar: true,
    },
  },
  methods: {
    // rate
    onRateChange(e) {
      const { value } = e.detail;
      this.setData({
        rateValue: value,
      });
    },

    // calendar
    handleCalendar() {
      this.setData({ visible: true });
    },

    handleCalendarConfirm(e) {
      const { value } = e.detail;
      console.log(value);
      this.setData({
        value,
      });
    },

    onCalendarClose({ detail }) {
      console.log(detail.trigger);
    },

    // date-time-picker
    showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },

    handlePickerClose(e) {
      console.log('handleClose:', e);
    },

    onPickerConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;

      console.log('confirm', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });
    },

    onPickerColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  },
});
