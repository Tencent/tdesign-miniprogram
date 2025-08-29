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
      if (index === 1) {
        const label = item.label.slice(0, -1);
        return {
          value: item.value,
          label: calendarMonth[Number(label) - 1],
        };
      }
      if (index === 2) {
        const [dateValue, weekValue] = item.label.split(' ');
        const dateSuffixes = {
          1: 'st',
          2: 'nd',
          3: 'rd',
        };
        const weekMap = {
          周一: 'Mon.',
          周二: 'Tues.',
          周三: 'Wed.',
          周四: 'Thurs.',
          周五: 'Fri.',
          周六: 'Sat.',
          周日: 'Sun.',
        };
        const label = dateValue.slice(0, -1);

        return {
          value: item.value,
          label: `${label}${dateSuffixes[label] || 'th'} ${weekMap[weekValue]}`,
        };
      }

      return {
        value: item.value,
        label: item.label.slice(0, -1),
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
