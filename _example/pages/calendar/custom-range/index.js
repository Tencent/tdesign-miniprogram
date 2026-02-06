Component({
  data: {
    visible: false,
    value: new Date(2022, 1, 18).getTime(),
    minDate: new Date(2022, 1, 18).getTime(),
    maxDate: new Date(2022, 2, 1).getTime(),
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
