Component({
  data: {
    visible: false,
    confirmBtn: {
      content: 'Confirm',
    },
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
