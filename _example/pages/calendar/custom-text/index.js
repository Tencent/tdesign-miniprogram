Component({
  data: {
    type: 'single',
    visible: false,
    value: new Date(2022, 1, 18).getTime(),
    singleValue: new Date(2022, 1, 18).getTime(),
    minDate: new Date(2022, 1, 1).getTime(),
    maxDate: new Date(2022, 2, 15).getTime(),
    singleFormat(day) {
      day.suffix = '¥60';
      return day;
    },
    format(day) {
      const { date } = day;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const curDate = date.getDate();

      day.suffix = '¥60';

      if (year === 2022) {
        if (month === 2) {
          const map = {
            1: '初一',
            2: '初二',
            3: '初三',
            14: '情人节',
            15: '元宵节',
          };
          if (curDate in map) {
            day.prefix = map[curDate];
            day.suffix = '¥100';
            day.className = 'is-holiday';
          }
        }
      }

      return day;
    },
  },
  methods: {
    handleCalendar(e) {
      const { type } = e.currentTarget.dataset;
      this.setData({ type, visible: true });
    },

    handleConfirm(e) {
      const { type } = e.currentTarget.dataset;
      const { value } = e.detail;

      if (type === 'single') {
        this.setData({
          singleValue: value,
        });
      } else {
        this.setData({
          value,
        });
      }
      console.log(e.detail.value);
    },
  },
});
