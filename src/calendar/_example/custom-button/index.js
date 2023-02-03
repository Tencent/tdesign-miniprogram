Component({
  data: {
    visible: false,
    min: new Date(2022, 0, 2).getTime(),
    note: '',
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    onChange(e) {
      const { value } = e.detail;
      const format = (val) => {
        const date = new Date(val);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
      };

      this.setData({
        note: `${format(value)}`,
      });
    },
  },
});
