Component({
  data: {
    visible: false,
    value: new Date(2022, 4, 15).getTime(),
    minDate: new Date(2022, 1, 1).getTime(),
    maxDate: new Date(2022, 10, 27).getTime(),
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      const { value } = e.detail;

      this.setData({ value });
      console.log(value);
    },
  },
});
