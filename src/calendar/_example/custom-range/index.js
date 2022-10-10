Component({
  data: {
    visible: false,
    value: new Date(2022, 1, 15).getTime(),
    minDate: new Date(2022, 1, 1).getTime(),
    maxDate: new Date(2022, 1, 27).getTime(),
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      console.log(e.detail.value);
    },
  },
});
