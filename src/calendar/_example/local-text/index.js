Component({
  data: {
    visible: false,
    note: '',
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
      const format = (val) => {
        const date = new Date(val);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      };

      this.setData({
        note: format(value),
      });
    },
    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
