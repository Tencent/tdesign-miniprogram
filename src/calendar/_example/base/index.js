Component({
  data: {
    visible: false,
    note: '',
    confirmBtn: {
      content: 'Confirm',
    },
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      const { value } = e.detail;
      const format = (val) => {
        const date = new Date(val);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      };

      this.setData({
        note: format(value),
      });
    },
    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
