Component({
  data: {
    visible: false,
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
