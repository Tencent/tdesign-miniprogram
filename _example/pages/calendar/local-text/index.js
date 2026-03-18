Component({
  data: {
    visible: false,
    value: new Date(2022, 1, 18).getTime(),
    minDate: new Date(2022, 1, 1).getTime(),
    maxDate: new Date(2022, 2, 15).getTime(),
    localeText: {
      title: 'Select Date',
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthTitle: '{month} {year}',
      confirm: 'Confirm',
      months: [
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
      ],
    },
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },

    handleConfirm(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },

    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
