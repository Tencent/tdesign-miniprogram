const calendarMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

Page({
  data: {
    mode: '',
    dateVisible: false,
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入
    dateText: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
    filter(type, options) {
      if (type === 'year') {
        return options.sort((a, b) => b.value - a.value);
      }
      return options;
    },
    popupProps: {
      usingCustomNavbar: true,
    },

    formatter(item, index) {
      let label = item.label.slice(0, -1);
      if (index === 1) {
        label = calendarMonth[Number(label) - 1];
      }
      if (index === 2) {
        const suffixes = {
          1: 'st',
          2: 'nd',
          3: 'rd',
        };
        label = `${label}${suffixes[label] || 'th'}`;
      }
      return {
        value: item.value,
        label,
      };
    },
  },
  showPicker(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },

  handleClose(e) {
    console.log('handleClose:', e);
  },

  onConfirm(e) {
    const { value } = e.detail;
    const { mode } = this.data;

    console.log('confirm', value);

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });
  },

  onColumnChange(e) {
    console.log('pick', e.detail.value);
  },
});
