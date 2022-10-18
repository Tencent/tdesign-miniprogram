Component({
  data: {
    visible: false,
    value: new Date(2022, 1, 15, 0).getTime(),
    minDate: new Date(2022, 1, 1, 0).getTime(),
    maxDate: new Date(2022, 1, 27, 0).getTime(),
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
