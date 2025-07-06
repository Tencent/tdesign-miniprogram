Component({
  data: {
    visible: false,
    value: null,
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      const { value } = e.detail;
      this.setData({ value });
      console.log(e.detail.value);
    },
  },
});
