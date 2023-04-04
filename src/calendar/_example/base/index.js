Component({
  data: {
    visible: false,
    note: '',
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
