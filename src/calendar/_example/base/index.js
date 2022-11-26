Component({
  data: {
    visible: false,
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      this.setData({ visible: false });
      console.log(e.detail.value);
    },
  },
});
