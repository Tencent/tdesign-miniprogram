Component({
  data: {
    mode: '',
    second: '10:00:00',
    minute: '23:59',
    start: '2025-04-29 00:00:00',
  },
  methods: {
    showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const { mode } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;

      console.log('confirm', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  },
});
