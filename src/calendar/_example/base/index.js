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
      console.log(value);
      this.setData({
        value,
      });
    },

    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
