Component({
  data: {
    text: '',
    value: '10:00:00',
    visible: false,
  },
  methods: {
    showPicker() {
      this.setData({
        visible: true,
      });
    },
    hidePicker() {
      this.setData({
        visible: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;

      console.log('confirm', value);

      this.setData({
        value,
        text: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  },
});
